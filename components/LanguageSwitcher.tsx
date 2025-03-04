"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // Get current path

  const changeLanguage = (locale: string) => {
    // Ensure only one locale is present in the path
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
