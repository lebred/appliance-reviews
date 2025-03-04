"use client"; // Required for hooks in Next.js (App Router)

import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    const currentPath = window.location.pathname;
    router.push(`/${locale}${currentPath}`);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
      <button onClick={() => changeLanguage("fr")}>🇫🇷 Français</button>
    </div>
  );
}
