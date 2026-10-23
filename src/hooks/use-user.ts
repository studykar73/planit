"use client";

import { useSyncExternalStore } from "react";
import { AUTH_EVENT, getCurrentUser, type SessionUser } from "@/lib/auth";

const subscribe = (callback: () => void) => {
  window.addEventListener(AUTH_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(AUTH_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
};

const getSnapshot = () => {
  const user = getCurrentUser();
  return user ? JSON.stringify(user) : "";
};

const getServerSnapshot = () => "";

export function useUser(): SessionUser | null {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );
  return snapshot ? (JSON.parse(snapshot) as SessionUser) : null;
}
