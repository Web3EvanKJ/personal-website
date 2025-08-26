"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/profile", label: "Profile" },
    { href: "/skills", label: "Skills" },
    { href: "/achievement", label: "Achievement" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white shadow mb-6 w-full">
      <div className=" flex justify-between md:justify-start md:gap-10 items-center px-15 py-4">
        {/* Navigation Links */}
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`${
              pathname === link.href
                ? "text-blue-600 font-bold"
                : "text-gray-600"
            } hover:text-blue-600`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
