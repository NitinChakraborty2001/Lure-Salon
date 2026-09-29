import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CalendarDays,
  Check,
  ChevronRight,
  Heart,
  Instagram,
  Leaf,
  Mail,
  MapPin,
  Phone,
  Recycle,
  Sparkles,
} from "lucide-react";

import heroImage from "../assets/lure-hero-balayage.jpg";
import balayageImage from "../assets/lure-balayage-detail.jpg";
import headSpaImage from "../assets/lure-head-spa.jpg";
import vividsImage from "../assets/lure-vivids.jpg";

const BOOKING_URL = "https://luresalon.zenoti.com/webstoreNew/services/";
const PHONE_HREF = "tel:+12149195873";

const serviceCards = [
  {
    category: "Signature color",
    title: "Balayage",
    description:
      "Dimensional, hand-painted color designed around your tone, texture, and everyday life.",
    image: balayageImage,
    alt: "Glossy brunette and honey balayage being finished by a colorist",
  },
  {
    category: "Restorative ritual",
    title: "Japanese Head Spa",
    description:
      "A soothing, scalp-focused experience created for a deeper sense of care and renewal.",
    image: headSpaImage,
    alt: "A guest receiving a relaxing Japanese head spa treatment",
  },
  {
    category: "Creative color",
    title: "Vivids",
    description:
      "Expressive, custom color with the polished finish and considered care Lure is known for.",
    image: vividsImage,
    alt: "Model with dimensional copper and raspberry vivid hair color",
  },
];

const otherServices = [
  "Brow Bar",
  "Bridal Services",
  "Hair Color",
  "Hair Services",
  "Treatments + Textures",
  "Alto Experience",
  "Consultations",
  "Hair Extensions",
];

const teamGroups = [
  {
    label: "Colorists:",
    names: [
      "Vanessa Dominguez",
      "Mackenzie Bryant",
      "Rin Guzman",
      "Jenie Nguyen",
      "Emily Clark",
      "Jasmine Blackbear",
      "Maria Pizano",
      "Lexie Bednarski",
      "Izzy Donina",
    ],
  },
  {
    label: "Stylists:",
    names: [
      "Alexis Robinson",
      "Clint Wheeler",
      "Taylor Newroth",
      "Melanie Fisette",
      "Philippe Grijalva",
      "Ashley Briggs",
      "Selina Darquea",
    ],
  },
  {
    label: "Generalists + Apprentices:",
    names: [
      "Erinne Farrel",
      "Kelly Taylor",
      "Cat Peyton",
      "Veronika Pitka",
      "Ruby Cervantes",
      "Janet Ruiz",
    ],
  },
  {
    label: "Salon Leadership:",
    names: [
      "Ashlee Alteri (Salon Manager)",
      "Giovanni Hager (VP Of Finance)",
      "Jessica DeGuzman (Lead Salon Coordinator)",
      "Sydney Shubitz (Salon Coordinator)",
    ],
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lure Salon Dallas | Luxury Hair, Color & Head Spa" },
      {
        name: "description",
        content:
          "Book luxury hair color, balayage, Japanese Head Spa, vivids, extensions and more at Lure Salon, an eco-conscious, women-owned Dallas salon.",
      },
      { property: "og:title", content: "Lure Salon Dallas | Amazing Hair, Warmly Done" },
      {
        property: "og:description",
        content:
          "Luxury hair, thoughtful care and a greener salon experience on McKinney Avenue in Dallas.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function BookingLink({ children, className }: { children: React.ReactNode; className: string }) {
  return (
    <a href={BOOKING_URL} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-hidden bg-background font-body text-foreground">
      <div className="bg-primary px-5 py-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-foreground sm:text-[11px]">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 sm:justify-between">
          <span>Green Circle Salon · 100% renewable energy</span>
          <span className="hidden sm:inline">
            Women-owned · Community-minded · Dallas since 2010
          </span>
        </div>
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-6">
        <a
          href="#top"
          aria-label="Lure Salon home"
          className="flex items-baseline gap-2 focus-ring"
        >
          <span className="font-display text-3xl font-semibold leading-none">Lure</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-sage">
            Salon
          </span>
        </a>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 text-sm font-medium text-muted-foreground md:flex"
        >
          <a className="nav-link" href="#services">
            Services
          </a>
          <a className="nav-link" href="#difference">
            Our Impact
          </a>
          <a className="nav-link" href="#team">
            Team
          </a>
          <a className="nav-link" href="#visit">
            Visit
          </a>
        </nav>
        <BookingLink className="button-dark hidden sm:inline-flex">
          Book Now <ArrowUpRight size={15} aria-hidden="true" />
        </BookingLink>
        <BookingLink className="button-dark px-4 sm:hidden">Book Now</BookingLink>
      </header>

      <section
        id="top"
        className="mx-auto grid max-w-6xl items-center gap-9 px-5 pb-14 pt-3 sm:px-6 md:pb-20 lg:grid-cols-12 lg:gap-12 lg:pt-5"
      >
        <div className="fade-up lg:col-span-7">
          <p className="eyebrow">Dallas · Established May 25, 2010.</p>
          <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            Amazing hair,
            <br />
            <em className="font-normal text-sage-deep">warmly</em> done.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            An organic blend of skilled, continually educated beauty professionals—creating
            exceptional hair in a friendly, inclusive and greener salon.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookingLink className="button-primary">
              <CalendarDays size={17} aria-hidden="true" /> Book Your Visit
            </BookingLink>
            <a className="button-outline" href={PHONE_HREF}>
              <Phone size={16} aria-hidden="true" /> Call 214-919-5873
            </a>
          </div>
          <div className="mt-9 grid max-w-xl grid-cols-3 border-y border-border py-5">
            <div>
              <strong className="font-display text-2xl font-medium text-sage-deep">95%</strong>
              <span className="mt-1 block text-xs leading-4 text-muted-foreground">
                Salon waste recycled.
              </span>
            </div>
            <div className="border-x border-border px-4">
              <strong className="font-display text-2xl font-medium text-sage-deep">100%</strong>
              <span className="mt-1 block text-xs leading-4 text-muted-foreground">
                Renewable energy.
              </span>
            </div>
            <div className="pl-4">
              <strong className="font-display text-2xl font-medium text-sage-deep">7 Days</strong>
              <span className="mt-1 block text-xs leading-4 text-muted-foreground">
                For service adjustments.
              </span>
            </div>
          </div>
        </div>

        <div className="fade-up relative lg:col-span-5 lg:pl-4">
          <div className="absolute -left-4 top-8 hidden h-28 w-1 bg-gold lg:block" />
          <div className="hero-frame overflow-hidden">
            <img
              src={heroImage}
              alt="Guest with glossy dimensional balayage hair at a refined salon"
              width={1024}
              height={1280}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 bg-surface px-5 py-4 shadow-editorial sm:left-auto sm:right-5 sm:w-72">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 text-gold" size={18} aria-hidden="true" />
              <p className="text-sm leading-5">
                <strong className="block font-semibold">New To Lure?</strong>
                <span className="text-muted-foreground">
                  Ask the front desk for your new-client gift.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="section-pad bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow text-gold-light">A thoughtful welcome</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">
              Start with a complimentary hair consultation! Leave with a plan made for you.
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-primary-foreground/75">
              New clients can ask our front desk for a gift. If your finished service needs an
              adjustment, contact us within seven business days for a complimentary adjustment with
              your original provider—or credit toward a different provider.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:col-span-4 md:items-stretch">
            <BookingLink className="button-gold">
              Choose Your Service <ArrowUpRight size={16} aria-hidden="true" />
            </BookingLink>
            <a href={PHONE_HREF} className="button-light-outline">
              <Phone size={16} aria-hidden="true" /> Call The Salon
            </a>
            <p className="text-center text-xs text-primary-foreground/55">
              Adjustments are not refunds for services rendered.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="section-pad">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Signature experiences</p>
              <h2 className="section-title">What will you love next?</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Expert color, restorative rituals and confidence-boosting transformations—all with
              personal attention.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {serviceCards.map((service) => (
              <article key={service.title} className="group border-b border-border pb-6">
                <div className="aspect-4/3 overflow-hidden bg-muted">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <p className="eyebrow mt-5">{service.category}</p>
                <h3 className="mt-2 font-display text-3xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 border-y border-border py-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
              Also At Lure &rarr;
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {otherServices.map((service) => (
                <span key={service} className="inline-flex items-center gap-2 text-sm font-medium">
                  <span className="h-1 w-1 rounded-full bg-gold" />
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="difference" className="section-pad bg-secondary">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">Look good. Do good.</p>
              <h2 className="section-title">Luxury with a lighter footprint.</h2>
              <p className="mt-5 max-w-md leading-7 text-muted-foreground">
                Lure believes beautiful work and responsible choices belong together. Every visit
                supports a salon committed to its guests, its team, its community and the
                environment.
              </p>
              <BookingLink className="mt-7 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-semibold">
                Find Your Service <ChevronRight size={15} aria-hidden="true" />
              </BookingLink>
            </div>
            <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:col-span-7">
              <ImpactItem
                icon={<Recycle />}
                title="95% Recycled."
                text="A Certified Green Circle Salon, diverting up to 95% of salon waste."
              />
              <ImpactItem
                icon={<Leaf />}
                title="Renewably Powered."
                text="The salon is powered by 100% renewable energy."
              />
              <ImpactItem
                icon={<Sparkles />}
                title="Women-Owned."
                text="A certified women-owned business founded by Yvonne Hager."
              />
              <ImpactItem
                icon={<Heart />}
                title="Community Care."
                text="Supporting the North Texas GLBT Chamber and Dallas Children's Advocacy Center."
              />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section-pad bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-6">
              <p className="eyebrow text-gold-light">The care continues at home</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">Clean, luxury must-haves.</h2>
            </div>
            <p className="max-w-lg leading-7 text-primary-foreground/70 md:col-span-6">
              Keep your hair healthy and your finish lasting with a carefully selected range of
              professional home care.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 border-y border-primary-foreground/20 md:grid-cols-4">
            {["Davines", "Kérastase", "Oribe", "Lure Co+Op"].map((brand, index) => (
              <div
                key={brand}
                className={`py-7 text-center md:py-9 ${index > 0 ? "border-l border-primary-foreground/20" : ""}`}
              >
                <span className="font-display text-2xl sm:text-3xl">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="section-pad">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 border-b border-border pb-12 md:grid-cols-12 md:items-center">
            <div className="md:col-span-4">
              <p className="eyebrow">Founder · President · Lead Colorist</p>
              <h2 className="section-title">Yvonne Hager</h2>
            </div>
            <blockquote className="font-display text-2xl leading-snug text-sage-deep sm:text-3xl md:col-span-8">
              “Lead with kindness and respect. Unite around excellence. Respect our community and
              environment. Keep learning.”
            </blockquote>
          </div>
          <div className="mt-10">
            <p className="eyebrow">An Organic Blend Of Beauty Professionals &rarr;</p>
            <div className="mt-7 grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
              {teamGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="border-b border-border pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-sage">
                    {group.label}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {group.names.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="section-pad bg-secondary">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Your chair is waiting</p>
              <h2 className="section-title">Visit Lure In Dallas!</h2>
              <address className="mt-6 not-italic text-base leading-7 text-muted-foreground">
                3839 McKinney Avenue, Unit 100,
                <br />
                Dallas, Texas, 75204, USA.
              </address>
              <div className="mt-7 space-y-3 text-sm font-medium">
                <a className="contact-link" href={PHONE_HREF}>
                  <Phone size={16} /> 214-919-5873
                </a>
                <a className="contact-link" href="mailto:lure@luresalondallas.com">
                  <Mail size={16} /> lure@luresalondallas.com
                </a>
                <a
                  className="contact-link"
                  href="https://www.instagram.com/luresalondallas/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Instagram size={16} /> @luresalondallas
                </a>
                <a
                  className="contact-link"
                  href="https://maps.google.com/?q=3839+McKinney+Avenue+Unit+100+Dallas+TX+75204"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MapPin size={16} /> Get Directions &rarr;
                </a>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <BookingLink className="button-primary">
                  Book Online <ArrowUpRight size={16} />
                </BookingLink>
                <a
                  className="button-outline"
                  href="https://www.facebook.com/luresalon/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Facebook
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              <Policy
                title="Cancellation"
                text="Please give at least 24 hours' notice. Late cancellations are charged $50 for each booked provider. Your first cancellation is waived when you rebook at the time of cancellation. A no-show—including arriving 15 minutes late—is charged 50% of the missed service."
              />
              <Policy
                title="Service adjustments"
                text="Contact the salon within seven business days for a complimentary adjustment with the original provider, or choose credit with a different provider. Lure does not offer refunds for services rendered."
              />
              <Policy
                title="Product exchanges"
                text="Products may be exchanged within 14 days. Items must be returned in their original packaging with no writing or labels added. Products outside these conditions may not qualify."
              />
              <div className="border border-border bg-surface p-6">
                <p className="eyebrow">While You Are Here &rarr;</p>
                <h3 className="mt-3 font-display text-2xl">Complimentary WiFi</h3>
                <dl className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Network:</dt>
                    <dd className="font-medium">Lure Dallas</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="text-muted-foreground">Password:</dt>
                    <dd className="font-medium">LureHair</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-foreground pb-24 text-background sm:pb-0">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl">
              Lure <span className="text-gold-light">Salon</span>
            </p>
            <p className="mt-2 text-xs text-background/60">
              Amazing hair. A warm experience. A greener future.
            </p>
          </div>
          <div className="text-xs leading-5 text-background/55 md:text-right">
            <p>Copyright © {new Date().getFullYear()} Lure Salon - All Rights Reserved!</p>
            <p>
              Powered By <a href="https://www.nexadigitalservices.agency">Nexa</a>, A Digital Agency
              By <a href="https://www.linkedin.com/in/NitinChakraborty2001/">Nitin Chakraborty</a>.
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur sm:hidden">
        <a
          href={PHONE_HREF}
          aria-label="Call Lure Salon"
          className="flex h-12 w-12 shrink-0 items-center justify-center border border-border text-foreground"
        >
          <Phone size={18} />
        </a>
        <BookingLink className="button-primary h-12 flex-1">
          Book Your Visit <ArrowUpRight size={16} />
        </BookingLink>
      </div>
    </main>
  );
}

function ImpactItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="bg-background p-6 sm:p-7">
      <div className="text-gold [&>svg]:h-6 [&>svg]:w-6">{icon}</div>
      <h3 className="mt-5 font-display text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
    </div>
  );
}

function Policy({ title, text }: { title: string; text: string }) {
  return (
    <article className="border border-border bg-surface p-6">
      <div className="flex items-center gap-2 text-sage">
        <Check size={16} />
        <p className="text-xs font-semibold uppercase tracking-[0.16em]">{title}</p>
      </div>
      <p className="mt-4 text-sm leading-6 text-muted-foreground">{text}</p>
    </article>
  );
}
