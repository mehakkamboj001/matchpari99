import Image from "next/image";
import Link from "next/link";
import {
  ArrowIcon,
  WHATSAPP_LINK,
} from "./site-ui";
import { createPageMetadata } from "./seo";

export const metadata = createPageMetadata({
  title: "Official Sports ID in India",
  description:
    "Visit Matchpari99 for sports and app information, contact details, and support with account access.",
  path: "/",
  keywords: [
    "Matchpari99",
    "Matchpari99 official website",
    "Matchpari99 sports ID",
    "Matchpari99 India",
  ],
});

function UserIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2c-5.01 0-9 2.51-9 5.5V22h18v-2.5c0-2.99-3.99-5.5-9-5.5Z" />
    </svg>
  );
}

function KeyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7.5 14a5.5 5.5 0 1 1 4.88-3H22v4h-3v3h-4v-3h-2.62a5.47 5.47 0 0 1-4.88 3Zm0-3a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <section className="login-section" aria-label="Matchpari99 account access">
        <div className="login-content">
          <Link className="logo-link" href="/" aria-label="Matchpari99 home">
            <Image
              className="main-logo"
              src="/matchpari99-logo.png"
              alt="Matchpari99"
              width={806}
              height={246}
              priority
            />
          </Link>

          <div className="login-card">
            <h1 className="login-title">
              LOGIN <span aria-hidden="true">👇</span>
            </h1>
            <div className="login-form">
              <label className="input-group">
                <span className="sr-only">User name</span>
                <input type="text" placeholder="User Name" autoComplete="username" />
                <span className="input-icon"><UserIcon /></span>
              </label>
              <label className="input-group">
                <span className="sr-only">Password</span>
                <input type="password" placeholder="Password" autoComplete="current-password" />
                <span className="input-icon"><KeyIcon /></span>
              </label>
              <Link className="login-button" href="/login">
                Login <ArrowIcon />
              </Link>
              <Link className="login-button" href="/sign-up">
                Create an account <ArrowIcon />
              </Link>
            </div>
            <p className="login-note">
              For account access, contact our team on{" "}
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              . Login details are not collected on this page.
            </p>
          </div>
        </div>
      </section>

      <article className="site-content">
        <header className="article-heading">
          <p className="article-kicker">
            Sports, games and match-day information
          </p>
          <h2>Welcome to Matchpari99</h2>
        </header>

        <section>
          <h2>One place for sports fans</h2>
          <p>
            Follow the sports you love and explore the information available
            through Matchpari99. The site includes information about cricket,
            football, tennis, horse racing and online games.
          </p>
          <p>
            Use the navigation above to learn about the app, contact the team,
            or find the account-access page. Availability and rules can differ
            depending on where you live.
          </p>
        </section>

        <section className="home-link-cards">
          <Link className="home-link-card" href="/app">
            <span className="home-card-icon">▣</span>
            <strong>Explore the App</strong>
            <span>See the mobile experience and app information.</span>
            <ArrowIcon />
          </Link>
          <Link className="home-link-card" href="/contact">
            <span className="home-card-icon">↗</span>
            <strong>Contact our team</strong>
            <span>Ask a question or request help with access.</span>
            <ArrowIcon />
          </Link>
          <Link className="home-link-card" href="/sign-up">
            <span className="home-card-icon">＋</span>
            <strong>Get started</strong>
            <span>Ask the team how to get started.</span>
            <ArrowIcon />
          </Link>
        </section>

        <p className="responsible-play">
          18+ only. Please follow local laws and play responsibly.
        </p>
      </article>
    </main>
  );
}
