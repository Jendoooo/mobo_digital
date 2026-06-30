"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const heroShots = [
  {
    className: "a",
    label: "Iby Closet",
    src: "/work/assets-ibycloset.png",
    alt: "Iby Closet ecommerce site screenshot",
  },
  {
    className: "b",
    label: "Order From RC",
    src: "/work/assets-orderfromrc.png",
    alt: "Order From RC ordering platform screenshot",
  },
  {
    className: "c",
    label: "FPL Gaffer",
    src: "/work/assets-fplgaffer.png",
    alt: "FPL Gaffer analytics product screenshot",
  },
];

const stats = [
  ["20+", "client and internal builds delivered"],
  ["8M+", "energy telemetry records shaped into BI"],
  ["4,128+", "public contracts extracted and parsed"],
  ["4", "countries served through freelance delivery"],
];

const caseFiles = [
  {
    type: "Fashion ecommerce",
    title: "Iby Closet",
    desc: "Production ecommerce platform for a Lagos menswear brand with catalogue browsing, cart, Paystack checkout, order management, abandoned cart recovery, and Supabase-backed admin workflows.",
    tags: ["Next.js", "Supabase", "TypeScript", "Paystack"],
    href: "https://www.ibycloset.com/",
    link: "Visit live site",
    image: "/work/assets-ibycloset.png",
    alt: "Iby Closet live site screenshot",
  },
  {
    type: "Assessment product",
    title: "Job Hunt Nigeria",
    desc: "Graduate assessment preparation platform for high-pressure employer tests, with interactive practice environments, scoring logic, and AI-powered performance coaching.",
    tags: ["React", "Supabase", "DeepSeek API", "Framer Motion"],
    href: "https://job-hunt-nga.vercel.app",
    link: "Visit live product",
    image: "/work/assets-jobhunt.png",
    alt: "Job Hunt Nigeria product screenshot",
  },
  {
    type: "Food ordering",
    title: "Order From RC",
    desc: "Mobile-first ordering platform for a Nigerian food business, covering menu discovery, cart flow, checkout behaviour, and a smoother digital ordering experience.",
    tags: ["Next.js", "Supabase", "Mobile UX", "Checkout"],
    href: "https://orderfromrc.com",
    link: "Visit live site",
    image: "/work/assets-orderfromrc.png",
    alt: "Order From RC live site screenshot",
  },
  {
    type: "Analytics platform",
    title: "FPL Gaffer",
    desc: "Fantasy Premier League analytics product powered by a Python data engine, weekly data pipeline, expected-points models, formation optimisation, and transfer planning workflows.",
    tags: ["Python", "FastAPI", "React", "Vercel"],
    href: "https://fplgaffer.vercel.app",
    link: "Visit live demo",
    image: "/work/assets-fplgaffer.png",
    alt: "FPL Gaffer product screenshot",
  },
  {
    type: "Fabric ecommerce",
    title: "3:15 Fabrics",
    desc: "Ecommerce platform for a fabrics business with product collections, product management, and checkout workflows shaped for a retail buying experience.",
    tags: ["Next.js", "Supabase", "TypeScript", "Retail"],
    href: "https://3-15fabrics.vercel.app/",
    link: "Visit live site",
    image: "/work/assets-315fabrics.png",
    alt: "3:15 Fabrics live site screenshot",
  },
  {
    type: "Memorial web experience",
    title: "Oriyomi Ayeola Memorial",
    desc: "A dedicated memorial website built around respectful storytelling, clean typography, and a calm digital tribute experience for family and community remembrance.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Storytelling"],
    href: "https://oriyomiayeola.com",
    link: "Visit live site",
    image: "/work/assets-oriyomi.png",
    alt: "Oriyomi Ayeola Memorial website screenshot",
  },
];

const workIndex = [
  {
    type: "Power BI / Energy",
    title: "Fintry District Heating Analytics",
    desc: "8M+ API telemetry points modelled into emissions, heat loss, boiler performance, RHI revenue, and fault diagnostics.",
    href: "https://app.powerbi.com/view?r=eyJrIjoiOTQyMzQ5NjAtNTYyMC00MGQwLTkwYWEtNGE0YTI5YzFjOWViIiwidCI6IjJlYWUxODYwLTQwYmUtNDdhNC04MTYxLTZhN2NmYzBjZmEwNyJ9&pageName=f318b65a977e39964372",
    link: "Live dashboard",
  },
  {
    type: "Procurement intelligence",
    title: "Government Contracts Platform",
    desc: "4,128+ contracts scraped across US counties, with PDF OCR, AI parsing, parallel ingestion, and structured storage.",
  },
  {
    type: "Marketplace scraping",
    title: "Microsoft AppSource Listings",
    desc: "500+ partner listings extracted from a bot-protected marketplace and enriched with address validation.",
  },
  {
    type: "Local data",
    title: "UK Electric Installers Directory",
    desc: "1,660 installers mapped across 73 UK cities with GPS coordinates, ratings, hours, and quality scoring.",
  },
  {
    type: "Automotive data",
    title: "Dealer Inventory Scrapers",
    desc: "Five dealership inventory scrapers across Canada and Australia, handling JS-heavy sites and full vehicle spec extraction.",
  },
  {
    type: "Finance pipeline",
    title: "Yahoo Finance Data Pipeline",
    desc: "Market cap, price history, and income statement data pulled into a structured downstream analysis workflow.",
  },
  {
    type: "Legacy automation",
    title: "Excel VBA to Python",
    desc: "Macro inspection, tab translation, English conversion pass, and QA handoff for a legacy spreadsheet workflow.",
  },
  {
    type: "Game analysis",
    title: "Chess Analysis Platform",
    desc: "Stockfish-backed chess analysis with Python data visualisation for move evaluation and game pattern review.",
  },
  {
    type: "Conference data",
    title: "DevFest Participant Scraper",
    desc: "Conference participant extraction delivered across multiple milestones with revision checkpoints and clean handoff.",
  },
];

const capabilities = [
  ["01", "Web products", "React, Next.js, Supabase, auth flows, portals, dashboards, and product interfaces."],
  ["02", "Commerce", "Catalogues, carts, checkout, admin CMS, order handling, and payment integrations."],
  ["03", "Data systems", "Scraping, OCR, API ingestion, enrichment, ETL, validation, and structured storage."],
  ["04", "Analytics", "Power BI, data modelling, KPI dashboards, operational reporting, and decision workflows."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="shell" aria-hidden="true" />
      <header className="header">
        <nav className="nav" aria-label="Main navigation">
          <Link className="brand" href="#top" onClick={closeMenu}>
            <span className="mark">M</span>
            <span>MOBO Digital</span>
          </Link>
          <button
            className="menu"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            &#9776;
          </button>
          <div className={`links${menuOpen ? " open" : ""}`}>
            <a href="#case-files" onClick={closeMenu}>
              Case files
            </a>
            <a href="#work-index" onClick={closeMenu}>
              Work index
            </a>
            <a href="#capabilities" onClick={closeMenu}>
              Capabilities
            </a>
            <a className="nav-cta" href="mailto:olajideayeola@gmail.com" onClick={closeMenu}>
              Start a build
            </a>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="kicker rise">Independent digital studio archive</p>
              <h1 className="rise delay-1">A ledger of shipped digital work.</h1>
              <p className="hero-copy rise delay-2">
                MOBO Digital builds public websites, ecommerce platforms, analytics products,
                scraping systems, and internal tools. The work is the pitch.
              </p>
              <div className="actions rise delay-3">
                <a className="button primary" href="#case-files">
                  Open the case files
                </a>
                <a className="button" href="mailto:olajideayeola@gmail.com">
                  Discuss a project
                </a>
              </div>
            </div>

            <div className="evidence-stack rise delay-2" aria-label="Screenshots from MOBO Digital projects">
              {heroShots.map((shot) => (
                <figure className={`shot ${shot.className}`} data-label={shot.label} key={shot.label}>
                  <Image src={shot.src} alt={shot.alt} fill sizes="(max-width: 980px) 88vw, 40vw" priority={shot.className === "a"} />
                </figure>
              ))}
            </div>

            <div className="ledger rise delay-3">
              {stats.map(([value, label]) => (
                <div className="ledger-item" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            {["ECOMMERCE", "ANALYTICS", "SCRAPING", "DASHBOARDS", "WEB PRODUCTS"].flatMap((item) => [
              <span key={`${item}-1`}>{item}</span>,
              <span key={`${item}-2`}>{item}</span>,
            ])}
          </div>
        </div>

        <section id="case-files" className="reveal">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="kicker">Case files</p>
                <h2>Selected work, shown as evidence.</h2>
              </div>
              <p className="lead">
                No pretend mockups here. These are live-product captures and project notes from the work already
                delivered under the MOBO Digital orbit.
              </p>
            </div>

            <div className="case-ledger">
              {caseFiles.map((item, index) => (
                <article className="case-file" key={item.title}>
                  <div className="case-no">{String(index + 1).padStart(2, "0")}</div>
                  <div className="case-body">
                    <div>
                      <span className="case-type">{item.type}</span>
                      <h3>{item.title}</h3>
                      <p>{item.desc}</p>
                      <div className="chips">
                        {item.tags.map((tag) => (
                          <span className="chip" key={tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a className="case-link" href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.link}
                    </a>
                  </div>
                  <div className="case-media">
                    <div className="media-frame">
                      <div className="media-image">
                        <Image src={item.image} alt={item.alt} fill sizes="(max-width: 980px) 100vw, 42vw" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="work-index" className="dark reveal">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="kicker">Delivery index</p>
                <h2>Private work, data systems, and deeper builds.</h2>
              </div>
              <p className="lead">
                Some work does not belong as a public link. The index records the shape of those systems without
                exposing client internals.
              </p>
            </div>

            <div className="work-index">
              {workIndex.map((item) => (
                <article className="work-item" key={item.title}>
                  <div>
                    <small>{item.type}</small>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {item.link}
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="capabilities" className="capabilities reveal">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="kicker">Capabilities proven by the work</p>
                <h2>Not services in theory. Patterns already shipped.</h2>
              </div>
              <p className="lead">
                The portfolio covers the practical stack a small team needs: public web presence, transaction flows,
                data ingestion, analytics, and private automation.
              </p>
            </div>

            <div className="cap-grid">
              {capabilities.map(([number, title, copy]) => (
                <article className="cap" key={title}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact reveal">
          <div className="wrap">
            <p className="kicker">Commission the next file</p>
            <h2>Bring a real project with a real outcome.</h2>
            <p className="lead">
              Send the product, workflow, dataset, ecommerce idea, or business system you want shipped. MOBO Digital
              builds from evidence, not decoration.
            </p>
            <div className="actions contact-actions">
              <a className="button primary" href="mailto:olajideayeola@gmail.com">
                Email MOBO Digital
              </a>
              <a className="button" href="#case-files">
                Review case files
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <span>MOBO Digital Work Ledger</span>
          <span>Websites, ecommerce, dashboards, scraping, automation.</span>
        </div>
      </footer>
    </>
  );
}
