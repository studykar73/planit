"use client";

import { useCallback, useEffect, useState } from "react";

export type SessionUser = {
  name: string;
  email: string;
};

type AuthActionResponse =
  | { ok: true; returning?: boolean; user: SessionUser }
  | { ok: false; error: string };

async function parseJson<T>(res: Response): Promise<T> {
  return (await res.json()) as T;
}

export async function signUpRequest(input: {
  name: string;
  email: string;
  password: string;
}): Promise<AuthActionResponse> {
  const res = await fetch("/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  return parseJson<AuthActionResponse>(res);
}

export async function logInRequest(input: {
  email: string;
  password: string;
}): Promise<AuthActionResponse> {
  const res = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  return parseJson<AuthActionResponse>(res);
}

export async function logOutRequest() {
  await fetch("/api/auth/logout", { method: "POST" });
}

export function useUser() {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    fetch("/api/auth/me", { cache: "no-store" })
      .then((res) => parseJson<{ user: SessionUser | null }>(res))
      .then((data) => {
        if (!active) return;
        setUser(data.user);
        setLoading(false);
      })
      .catch(() => {
        if (!active) return;
        setUser(null);
        setLoading(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const refresh = useCallback(async () => {
    try {
      const res = await fetch("/api/auth/me", { cache: "no-store" });
      const data = await parseJson<{ user: SessionUser | null }>(res);
      setUser(data.user);
      return data.user;
    } catch {
      setUser(null);
      return null;
    } finally {
      setLoading(false);
    }
  }, []);

  return { user, loading, refresh, setUser };
}
