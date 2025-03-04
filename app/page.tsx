import { redirect } from "next/navigation";

export default function Home() {
  // Detect preferred language (default to English)
  const preferredLang = "en"; // Later, we can improve this with user settings
  redirect(`/${preferredLang}`);
}
