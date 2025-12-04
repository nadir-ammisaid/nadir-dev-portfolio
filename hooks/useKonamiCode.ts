"use client";

import { useEffect, useState } from "react";

const KONAMI_CODE = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];

export function useKonamiCode() {
  const [success, setSuccess] = useState(false);
  const [keys, setKeys] = useState<string[]>([]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      const newKeys = [...keys, key].slice(-10);
      setKeys(newKeys);

      if (newKeys.join(",") === KONAMI_CODE.join(",")) {
        setSuccess(true);
        setKeys([]);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [keys]);

  const reset = () => setSuccess(false);

  return { success, reset, setSuccess };
}
