import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
import { getDb, ensureSchema } from "@/lib/db";
import { createSession } from "@/lib/session";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const password = String(body.password ?? "");

    if (!name) {
      return NextResponse.json(
        { error: "Full name is required." },
        { status: 400 }
      );
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Enter a valid email address." },
        { status: 400 }
      );
    }
    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters." },
        { status: 400 }
      );
    }

    await ensureSchema();
    const db = getDb();

    const existing = await db.execute({
      sql: "SELECT id, name, password_hash FROM users WHERE email = ?",
      args: [email],
    });

    if (existing.rows.length > 0) {
      const user = existing.rows[0];
      const matches = await bcrypt.compare(
        password,
        String(user.password_hash)
      );

      if (!matches) {
        return NextResponse.json(
          {
            error:
              "This email is already registered with a different password. Try logging in instead.",
          },
          { status: 409 }
        );
      }

      await createSession(String(user.id));
      return NextResponse.json({
        ok: true,
        returning: true,
        user: { name: String(user.name), email },
      });
    }

    const id = randomUUID();
    const passwordHash = await bcrypt.hash(password, 10);

    await db.execute({
      sql: "INSERT INTO users (id, name, email, password_hash) VALUES (?, ?, ?, ?)",
      args: [id, name, email, passwordHash],
    });
    await createSession(id);

    return NextResponse.json({
      ok: true,
      user: { name, email },
    });
  } catch (error) {
    console.error("signup error", error);
    return NextResponse.json(
      { error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
