"use client";

import { LogoMT } from "@/components/mt24/logo-MT";
import Link from "next/link";
import { RegisterButton } from "@/components/mt24/register-button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Season", href: "/#season" },
    { name: "Categories", href: "/#categories" },
    { name: "Venue", href: "/#venue" },
    { name: "Volunteers", href: "/volunteers" },
    { name: "Practical", href: "/#practical" },
    { name: "Social", href: "/#social" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <div
      className={"sticky top-0 z-50 w-full"}
      id={"header"}
      data-testid={"header"}
    >
      <div
        className={
          "flex items-center justify-between py-4 px-5 bg-[#00111F]/90 backdrop-blur-md border-b border-white/5"
        }
      >
        <Link href={"/"} onClick={() => setIsOpen(false)}>
          <LogoMT />
        </Link>

        {/* Desktop Navigation */}
        <div className={"flex items-center gap-5"}>
          <div className={"hidden lg:flex items-center gap-6 mr-4"}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={
                  "text-white hover:text-primary transition-colors text-xs xl:text-sm font-bold uppercase tracking-wider"
                }
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="hidden sm:block">
            <RegisterButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#00111F] border-b border-white/10 py-6 px-5 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-primary transition-colors text-lg font-bold uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-white/10">
            <RegisterButton />
          </div>
        </div>
      )}
    </div>
  );
}
