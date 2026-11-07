// localStorage se safely JSON parse karta hai
// corrupt/invalid JSON pe crash nahi hota, fallback return karta hai
export function safeParse<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}