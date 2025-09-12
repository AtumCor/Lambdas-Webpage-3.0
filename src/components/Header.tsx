"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/config/navLinks";

const navItems = [
  { name: "Home", href: "/" },
  { name: "People", href: "/members" },
  { name: "Publications", href: "/publications" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-gray-900">
          Greene Lab
        </Link>

        <nav className="flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-l text-gray-900 hover:text-blue-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
