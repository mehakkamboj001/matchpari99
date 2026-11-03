import Link from "next/link";
import {
  ArrowIcon,
  WHATSAPP_LINK,
  WhatsAppIcon,
} from "../site-ui";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Matchpari99 Login Help",
  description:
    "Get help with Matchpari99 account access. This page does not collect or submit login credentials.",
  path: "/login",
  keywords: ["Matchpari99 login", "Matchpari99 login help"],
  noIndex: true,
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

export default function LoginPage() {
  return (
    <main className="subpage">
      <section className="login-section account-login-section" aria-label="Login assistance">
        <div className="login-content">
          <div className="login-card">
            <h1 className="login-title">LOGIN <span aria-hidden="true">👇</span></h1>
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
              <a className="login-button" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                Get login help <ArrowIcon />
              </a>
            </div>
            <p className="login-note">
              This demo page does not sign you in or send your credentials.
              Contact support and never share your password.
            </p>
            <p className="account-switch">
              Need signup information? <Link href="/sign-up">Visit signup</Link>
            </p>
            <a className="login-whatsapp" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> Contact support
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
