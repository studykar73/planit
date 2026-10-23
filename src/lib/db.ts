import { createClient, type Client } from "@libsql/client";
import path from "path";

const globalForDb = globalThis as unknown as { db?: Client };

function createDb(): Client {
  const url = process.env.TURSO_DATABASE_URL;
  const authToken = process.env.TURSO_AUTH_TOKEN;

  if (url) {
    return createClient({ url, authToken });
  }

  const fileUrl =
    process.env.DATABASE_URL ??
    `file:${path.join(process.cwd(), "planit.db")}`;
  return createClient({ url: fileUrl });
}

export function getDb(): Client {
  if (!globalForDb.db) {
    globalForDb.db = createDb();
  }
  return globalForDb.db;
}

let migrated = false;

export async function ensureSchema() {
  if (migrated) return;
  const db = getDb();

  await db.batch(
    [
      `CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now'))
      )`,
      `CREATE TABLE IF NOT EXISTS sessions (
        token TEXT PRIMARY KEY,
        user_id TEXT NOT NULL,
        created_at TEXT NOT NULL DEFAULT (datetime('now')),
        expires_at TEXT NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
      )`,
    ],
    "write"
  );

  migrated = true;
}
