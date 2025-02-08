"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Heart, User, ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  {
    label: "Men",
    href: "/men",
    submenu: [
      { label: "Hoodies", href: "/men/hoodies" },
      { label: "T-Shirts", href: "/men/t-shirts" },
    ],
  },
  { label: "Women", href: "/women", submenu: [] },
];

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header className="w-full border-b bg-white shadow-sm sticky top-0">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Left: Logo */}
        <Link href="/" className="text-xl font-bold text-gray-900">
          <span className="text-blue-500">M</span>EDUSA
        </Link>

        {/* Center: Navigation + Search */}
        <div className="flex items-center space-x-6">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => setHovered(link.label)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-500"
              >
                {link.label}{" "}
                {link.submenu.length > 0 && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Dropdown for submenu */}
              {link.submenu.length > 0 && hovered === link.label && (
                <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                  {link.submenu.map((sublink) => (
                    <Link
                      key={sublink.label}
                      href={sublink.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      {sublink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Search Bar */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Search..."
              className="w-64 px-4 py-2 border rounded-md"
            />
          </div>
        </div>

        {/* Right: Profile, Wishlist, Bag */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Heart className="w-5 h-5 text-gray-700" />
          </Button>
          <Button variant="ghost" size="icon">
            <ShoppingBag className="w-5 h-5 text-gray-700" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5 text-gray-700" />
          </Button>
        </div>
      </div>
    </header>
  );
}
