"use client";

import { useKonamiCode } from "../../hooks/useKonamiCode";
import MemoryGame from "../konami/MemoryGame";

export default function MemoryGameProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { success, reset } = useKonamiCode();

  return (
    <>
      {children}
      <MemoryGame isOpen={success} onClose={reset} />
    </>
  );
}
