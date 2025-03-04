"use client"; // Required for hooks in Next.js App Router

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // Get current path

  const changeLanguage = (locale: string) => {
    // Remove existing locale ("/en", "/fr") from pathname
    const newPath = pathname.replace(/^\/(en|fr)/, "");
    
    // Navigate to the correct language version
    router.push(`/${locale}${newPath}`);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
      <button onClick={() => changeLanguage("fr")}>🇫🇷 Français</button>
    </div>
  );
}
