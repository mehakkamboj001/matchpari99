import Link from "next/link";
import {
  ArrowIcon,
  WHATSAPP_LINK,
  WhatsAppIcon,
} from "../site-ui";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Matchpari99 Sign Up Information",
  description:
    "Contact Matchpari99 to ask about signup information and availability in your location.",
  path: "/sign-up",
  keywords: ["Matchpari99 sign up", "Matchpari99 signup information"],
  noIndex: true,
});

export default function SignUpPage() {
  return (
    <main className="subpage">
      <section className="account-hero">
        <div className="account-card">
          <div className="account-symbol">＋</div>
          <p className="eyebrow">GET STARTED</p>
          <h1>Sign up with<br />a little help.</h1>
          <p className="account-lead">
            Message the Matchpari99 team to ask about availability and the
            steps for getting started in your location.
          </p>
          <a className="primary-button account-action" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> Request signup information <ArrowIcon />
          </a>
          <p className="account-note">
            This page does not create an account or collect your personal
            details. Never share passwords or payment information in chat.
          </p>
          <div className="account-switch">
            Already have an account? <Link href="/login">Go to login help</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
