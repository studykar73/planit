import { NextResponse } from "next/server";
import { getDb, ensureSchema } from "@/lib/db";
import { getSessionUserId } from "@/lib/session";

export async function GET() {
  try {
    const userId = await getSessionUserId();
    if (!userId) {
      return NextResponse.json({ user: null });
    }

    await ensureSchema();
    const db = getDb();
    const result = await db.execute({
      sql: "SELECT name, email FROM users WHERE id = ?",
      args: [userId],
    });

    const user = result.rows[0];
    if (!user) {
      return NextResponse.json({ user: null });
    }

    return NextResponse.json({
      user: {
        name: String(user.name),
        email: String(user.email),
      },
    });
  } catch (error) {
    console.error("me error", error);
    return NextResponse.json({ user: null });
  }
}
