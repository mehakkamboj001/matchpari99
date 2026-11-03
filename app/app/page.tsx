import Image from "next/image";
import Link from "next/link";
import {
  ArrowIcon,
  WHATSAPP_LINK,
  WhatsAppIcon,
} from "../site-ui";
import { createPageMetadata } from "../seo";

export const metadata = createPageMetadata({
  title: "Matchpari99 App Information",
  description:
    "Explore Matchpari99 app information and contact the team to check official app availability for your device and location.",
  path: "/app",
  keywords: [
    "Matchpari99 app",
    "Matchpari99 mobile app",
    "Matchpari99 app information",
    "Matchpari99 official app",
  ],
});

export default function AppPage() {
  return (
    <main className="subpage">
      <section className="app-hero">
        <div className="app-hero-inner">
          <div className="app-copy">
            <p className="eyebrow"><span /> THE MATCHPARI99 EXPERIENCE</p>
            <h1>Match day,<br /><span>wherever you are.</span></h1>
            <p className="app-lead">
              A mobile-friendly way to explore sports and match information.
              Ask our team about current app availability.
            </p>
            <a className="primary-button" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
              <WhatsAppIcon /> Ask about the app <ArrowIcon />
            </a>
            <p className="small-note">Only use official app links shared by our team.</p>
          </div>

          <div className="phone-stage" aria-label="Illustration of the mobile sports experience">
            <div className="phone-orbit" />
            <div className="phone-frame">
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-topbar">
                  <Image src="/matchpari99-logo.png" alt="Matchpari99" width={806} height={246} />
                  <span className="screen-menu">•••</span>
                </div>
                <div className="phone-greeting">
                  <span>YOUR MATCH CENTRE</span>
                  <strong>Follow the action</strong>
                </div>
                <div className="phone-match">
                  <div className="phone-match-meta"><span>CRICKET</span><span className="match-live"><i /> MATCH DAY</span></div>
                  <div className="phone-teams">
                    <div><span className="team-disc team-disc-gold">IN</span><b>IND</b></div>
                    <span className="phone-vs">VS</span>
                    <div><span className="team-disc team-disc-blue">EN</span><b>ENG</b></div>
                  </div>
                  <div className="phone-match-caption">International match centre</div>
                </div>
                <div className="phone-section-title">EXPLORE SPORTS <span>VIEW ALL</span></div>
                <div className="phone-sports">
                  <div><span>🏏</span><b>Cricket</b></div>
                  <div><span>⚽</span><b>Football</b></div>
                  <div><span>🎾</span><b>Tennis</b></div>
                </div>
                <div className="phone-bottom-nav"><span>⌂<small>Home</small></span><span>◷<small>Sports</small></span><span>◎<small>Profile</small></span></div>
              </div>
            </div>
            <div className="phone-badge">MADE FOR<br /><strong>MATCH DAY</strong></div>
          </div>
        </div>
      </section>

      <section className="app-details content-wrap">
        <div className="section-heading">
          <p className="eyebrow">A SIMPLE WAY TO KEEP UP</p>
          <h2>Made for the<br />mobile fan.</h2>
        </div>
        <div className="feature-grid">
          <article className="feature-card"><span>01</span><h3>Browse sports</h3><p>Explore sports and game information from a mobile-friendly page.</p></article>
          <article className="feature-card"><span>02</span><h3>One clear view</h3><p>Find Matchpari99 information in a layout designed for smaller screens.</p></article>
          <article className="feature-card"><span>03</span><h3>Ask for help</h3><p>Message the team directly to ask about access and official app links.</p></article>
        </div>
        <p className="app-disclaimer">
          No app-store download is linked here. Contact the team to check whether
          an official app is currently available for your device and location.
        </p>
        <Link className="text-link" href="/contact">Contact Matchpari99 <ArrowIcon /></Link>
      </section>
    </main>
  );
}
