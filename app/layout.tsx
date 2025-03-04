import LanguageSwitcher from "../components/LanguageSwitcher"; // ✅ Correct path

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageSwitcher />
        {children}
      </body>
    </html>
  );
}
