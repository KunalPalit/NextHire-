import { isAuthenticated } from "@/lib/actions/auth-actions";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { type ReactNode } from "react";

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="App Logo" width={36} height={30} />
          <h2 className="text-primary-100">NextHire</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
}
