"use client";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const root = window.document.documentElement;
    if (mode === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
  }, [mode]);

  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className="px-3 py-1 border rounded-md text-sm"
    >
      Toggle {mode === "light" ? "Dark" : "Light"}
    </button>
  );
}
