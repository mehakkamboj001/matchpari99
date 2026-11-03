"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const WHATSAPP_LINK =
  "https://wa.me/917009784942?text=I%20need%20a%20ID";

const navigation = [
  { href: "/", label: "Home" },
  { href: "/app", label: "App" },
  { href: "/contact", label: "Contact" },
  { href: "/sign-up", label: "Signup" },
  { href: "/login", label: "Login" },
];

export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      className={`brand-logo ${className}`.trim()}
      href="/"
      aria-label="Matchpari99 home"
    >
      <Image
        src="/matchpari99-logo.png"
        alt="Matchpari99"
        width={806}
        height={246}
        priority
      />
    </Link>
  );
}

export function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.2 4.3a1 1 0 0 1 1.4 0l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 1 1-1.4-1.4l5.3-5.3H3a1 1 0 1 1 0-2h15.5l-5.3-5.3a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

export function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2a9.87 9.87 0 0 0-8.48 14.93L2 22l5.2-1.52A9.93 9.93 0 1 0 12.04 2Zm0 18.18a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.1.91.93-3.02-.2-.31a8.2 8.2 0 1 1 6.85 3.74Zm4.5-6.14c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.97-.14.17-.29.19-.54.06-.25-.13-1.05-.39-2-.1-.73-.6-.73-1.17-.92-.26-.19-.04-.42-.04-.65-.04-.23 0-.61.09-.93.42-.32.34-1.22 1.2-1.22 2.92s1.25 3.39 1.42 3.63c.17.23 2.46 3.75 5.96 5.26.83.36 1.48.57 1.98.73.83.26 1.58.23 2.18.14.66-.1 2.03-.83 2.32-1.63.29-.81.29-1.5.2-1.64-.09-.15-.23-.23-.49-.36Z" />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="header-top">
        <BrandLogo />
        <span className="header-tagline">YOUR GAME. YOUR MOMENT.</span>
      </div>
      <nav className="main-nav" aria-label="Main navigation">
        {navigation.map((item) => {
          const current =
            item.href === "/"
              ? pathname === "/"
              : pathname === item.href ||
                pathname.startsWith(`${item.href}/`);

          return (
            <Link
              aria-current={current ? "page" : undefined}
              className={`nav-link${current ? " is-active" : ""}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <BrandLogo className="footer-logo" />
        <p>For sports fans. For the love of game day.</p>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Matchpari99</span>
        <span>18+ only · Follow local laws · Play responsibly</span>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="I WANT MATCHPARI 🆔"
    >
      <WhatsAppIcon />
      <span>Get an ID</span>
    </a>
  );
}
