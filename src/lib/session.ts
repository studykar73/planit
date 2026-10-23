import { randomBytes } from "crypto";
import { cookies } from "next/headers";
import { getDb, ensureSchema } from "@/lib/db";

const SESSION_COOKIE = "planit_session";
const SESSION_DAYS = 30;

export async function createSession(userId: string) {
  await ensureSchema();
  const db = getDb();
  const token = randomBytes(32).toString("hex");
  const expiresAt = new Date(
    Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000
  ).toISOString();

  await db.execute({
    sql: "INSERT INTO sessions (token, user_id, expires_at) VALUES (?, ?, ?)",
    args: [token, userId, expiresAt],
  });

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_DAYS * 24 * 60 * 60,
  });

  return token;
}

export async function getSessionToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(SESSION_COOKIE)?.value ?? null;
}

export async function destroySession() {
  const token = await getSessionToken();
  if (token) {
    const db = getDb();
    await db.execute({
      sql: "DELETE FROM sessions WHERE token = ?",
      args: [token],
    });
  }

  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function getSessionUserId(): Promise<string | null> {
  const token = await getSessionToken();
  if (!token) return null;

  await ensureSchema();
  const db = getDb();
  const result = await db.execute({
    sql: "SELECT user_id, expires_at FROM sessions WHERE token = ?",
    args: [token],
  });

  const row = result.rows[0];
  if (!row) return null;

  if (new Date(String(row.expires_at)).getTime() < Date.now()) {
    await db.execute({
      sql: "DELETE FROM sessions WHERE token = ?",
      args: [token],
    });
    return null;
  }

  return String(row.user_id);
}
