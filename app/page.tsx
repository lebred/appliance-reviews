import { redirect } from "next/navigation";

export default function Home() {
  redirect("/en"); // Change to "/fr" if you prefer French as default
}
