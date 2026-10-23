"use client";

const ACCOUNTS_KEY = "planit_accounts";
const SESSION_KEY = "planit_session";
export const AUTH_EVENT = "planit-auth-change";

export type StoredAccount = {
  name: string;
  email: string;
  password: string;
};

export type SessionUser = {
  name: string;
  email: string;
};

const notify = () => {
  window.dispatchEvent(new Event(AUTH_EVENT));
};

const readAccounts = (): StoredAccount[] => {
  try {
    const raw = localStorage.getItem(ACCOUNTS_KEY);
    return raw ? (JSON.parse(raw) as StoredAccount[]) : [];
  } catch {
    return [];
  }
};

const writeAccounts = (accounts: StoredAccount[]) => {
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts));
};

const encodePassword = (password: string) => btoa(password);

export const getCurrentUser = (): SessionUser | null => {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? (JSON.parse(raw) as SessionUser) : null;
  } catch {
    return null;
  }
};

export const emailExists = (email: string) =>
  readAccounts().some(
    (account) => account.email.toLowerCase() === email.toLowerCase()
  );

export const signUp = (input: {
  name: string;
  email: string;
  password: string;
}): { ok: true } | { ok: false; error: string } => {
  const accounts = readAccounts();
  const normalized = input.email.trim().toLowerCase();

  if (
    accounts.some((account) => account.email.toLowerCase() === normalized)
  ) {
    return {
      ok: false,
      error: "An account with this email already exists. Try logging in.",
    };
  }

  accounts.push({
    name: input.name.trim(),
    email: normalized,
    password: encodePassword(input.password),
  });
  writeAccounts(accounts);

  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({ name: input.name.trim(), email: normalized })
  );
  notify();
  return { ok: true };
};

export const logIn = (input: {
  email: string;
  password: string;
}): { ok: true } | { ok: false; error: string } => {
  const normalized = input.email.trim().toLowerCase();
  const account = readAccounts().find(
    (item) => item.email.toLowerCase() === normalized
  );

  if (!account) {
    return {
      ok: false,
      error: "No account found with this email. Sign up first.",
    };
  }

  if (account.password !== encodePassword(input.password)) {
    return { ok: false, error: "Incorrect password. Try again." };
  }

  localStorage.setItem(
    SESSION_KEY,
    JSON.stringify({ name: account.name, email: account.email })
  );
  notify();
  return { ok: true };
};

export const logOut = () => {
  localStorage.removeItem(SESSION_KEY);
  notify();
};
