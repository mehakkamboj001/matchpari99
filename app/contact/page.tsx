import Link from "next/link";
import {
  ArrowIcon,
  WHATSAPP_LINK,
  WhatsAppIcon,
} from "../site-ui";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Contact Matchpari99 Support",
  description:
    "Contact Matchpari99 support on WhatsApp for help with the website, app information, or account access.",
  path: "/contact",
  keywords: [
    "Matchpari99 contact",
    "Matchpari99 support",
    "Matchpari99 WhatsApp",
    "Matchpari99 customer support",
  ],
});

export default function ContactPage() {
  return (
    <main className="subpage">
      <section className="simple-hero contact-hero">
        <div className="simple-hero-content">
          <p className="eyebrow"><span /> WE’RE HERE TO HELP</p>
          <h1>Let’s get<br /><span>in touch.</span></h1>
          <p>
            Have a question about Matchpari99 or need help finding your way
            around? Send a message to our team.
          </p>
          <a className="primary-button" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
            <WhatsAppIcon /> Message on WhatsApp <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="contact-content content-wrap">
        <div className="contact-card">
          <span className="contact-icon"><WhatsAppIcon /></span>
          <p className="eyebrow">DIRECT SUPPORT</p>
          <h2>Chat with our team</h2>
          <p>Open WhatsApp with a message ready, then send it to start your conversation.</p>
          <a className="text-link" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">+91 98765 43210 <ArrowIcon /></a>
        </div>
        <div className="contact-side">
          <p className="eyebrow">BEFORE YOU MESSAGE</p>
          <h2>How can we help?</h2>
          <ul>
            <li>Ask a question about Matchpari99.</li>
            <li>Request information about account access.</li>
            <li>Check whether an official app link is available.</li>
          </ul>
          <p className="small-note">Please don’t send your password or payment details in chat.</p>
          <Link className="text-link" href="/app">Explore app information <ArrowIcon /></Link>
        </div>
      </section>
    </main>
  );
}
