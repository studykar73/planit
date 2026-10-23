import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getDb, ensureSchema } from "@/lib/db";
import { createSession } from "@/lib/session";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    await ensureSchema();
    const db = getDb();

    const result = await db.execute({
      sql: "SELECT id, name, email, password_hash FROM users WHERE email = ?",
      args: [email],
    });

    const user = result.rows[0];
    if (!user) {
      return NextResponse.json(
        { error: "No account found with this email. Sign up first." },
        { status: 404 }
      );
    }

    const matches = await bcrypt.compare(
      password,
      String(user.password_hash)
    );
    if (!matches) {
      return NextResponse.json(
        { error: "Incorrect password. Try again." },
        { status: 401 }
      );
    }

    await createSession(String(user.id));
    return NextResponse.json({
      ok: true,
      user: {
        name: String(user.name),
        email: String(user.email),
      },
    });
  } catch (error) {
    console.error("login error", error);
    return NextResponse.json(
      { error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
