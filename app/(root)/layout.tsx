import Image from "next/image";
import Link from "next/link";
import { type ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
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
