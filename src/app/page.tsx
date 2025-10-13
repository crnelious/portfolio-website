"use client";
import { motion, useAnimation } from "framer-motion";
import type { Transition } from "framer-motion";
import { Fragment, useCallback, useRef, useState, useEffect } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import GradientOrb from "@/components/GradientOrb";

// Primary nav links used across the site header.
const NAV_LINKS = [
  { label: "work", href: "#projects" },
  { label: "about", href: "/about" },
];

// Social handles rendered in the footer.
const SOCIAL_LINKS = [
  { label: "Twitter", href: "https://x.com/crnelious" },
  { label: "Email", href: "mailto:cornelious.info@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/crnelious" },
];

function ProjectCards() {
  // Each project drives one tile in the work grid.
  type Project = {
    title: string;
    description: string;
    badge: string;
    imageLabel: string;
    imageSrc?: string;
    href?: string;
  };

  // Static project data that feeds the animated grid below.
  const projects: Project[] = [
    {
      title: "Identity Research Labs",
      description:
        "Supporting identity-focused research through building a website that's accessible, and contributing design support for digital knowledge management at DePaul's Identity Research Lab.",
      badge: "Research Assistant · Shipped · 2025",
      imageLabel: "First Draft Interface Image",
      imageSrc: "/projects/identity-research-labs/Idrl-banner.jpg",
    },
    {
      title: "PARC",
      description:
        "Contributing to the Healthy & Equitable Public Spaces initiative by supporting web design, creating digital assets, and assisting with research communication for DePaul's Places for All Research Collective (PARC).",
      badge: "Research Assistant · 2025",
      imageLabel: "Notification Interface Image",
      imageSrc: "/projects/parc/parc-banner.jpeg",
    },
    {
      title: "Sneaker Access",
      description:
        "A web app that allows users to discover and access exclusive sneaker releases through a seamless and engaging user experience. Users gain access to premium sneakers by utilizing our automated checkout bot service for a fee, ensuring they secure the shoes they want during high-demand drops.",
      badge: "E-commerce · Shipped · 2019",
      imageLabel: "Sneaker Access",
      imageSrc: "/projects/sneaker-access/sneaker-access-header.jpg",
    },
    {
      title: "Microsoft",
      description:
        "Worked closely with Global Identity Azure Support teams to design user-centric solutions that enhance cloud service experiences, focusing on usability and accessibility.",
      badge: "Cloud Support Engineer & Designer · 2023",
      imageLabel: "Microsoft Collaboration",
      imageSrc: "/projects/microsoft/azure-logo.png",
    },
    {
      title: "Google",
      description:
        "Partnered with Google UX researchers & Google News team to refine onboarding journeys, pairing qualitative insights with high-fidelity interface explorations for Google News.",
      badge: "iOS Engineer Internship · 2019",
      imageLabel: "Google UX Sprint",
      imageSrc: "/projects/google/Publishers_lAhiFIX.gif",
    },
    {
      title: "Supreme Access",
      description:
        "Designed a membership-driven commerce flow that balances hype moments with inclusive access, focusing on real-time drops and community-driven storytelling.",
      badge: "Lead Designer · Front-end Development · 2019",
      imageLabel: "Supreme Access Interface",
      imageSrc: "/projects/supreme-access/supreme-access-header.JPG",
    },
    {
      title: "North Shore Clinical Labs",
      description:
        "Introduced patient-friendly reporting dashboards and intake flows that simplify complex diagnostics for North Shore Clinical Labs' digital touchpoints.",
      badge: "Healthcare Product Design · 2022",
      imageLabel: "Clinical Labs Dashboard",
      imageSrc: "/projects/north-shore-clinical-labs/northshore-banner.gif",
    },
    {
      title: "Hypremium",
      description:
        "Built and led a sneaker resale platform from the ground up, focusing on user experience, trust, and seamless transactions in the sneaker community.",
      badge: "Founder · Product Designer · 2018",
      imageLabel: "Hypremium Drops Interface",
      imageSrc: "/projects/hypremium/hypremium-header.gif",
    },
];

  return (
    <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8">
      {projects.map(({ title, description, badge, imageLabel, href, imageSrc }, index) => {
        const isGoogleProject = title === "Google";
        const isMicrosoftProject = title === "Microsoft";
        const isNorthShoreProject = title === "North Shore Clinical Labs";
        const isHypremiumProject = title === "Hypremium";
        const shouldAnimateOnLoad = index < 3;
        const isLocked = !href;
        const isWhiteLock =
          isLocked &&
          (title === "Identity Research Labs" || title === "Sneaker Access");
        const isAnimatedGif =
          typeof imageSrc === "string" && imageSrc.toLowerCase().endsWith(".gif");
        // Swap background treatments per client so logos remain legible.
        const imageWrapperClasses = [
          "relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl",
          isMicrosoftProject ? "bg-black" : "bg-gray-200",
          isGoogleProject || isNorthShoreProject || isHypremiumProject ? "border border-black/10" : "",
        ]
          .join(" ")
          .trim();
        const imageObjectClass = isMicrosoftProject ? "object-contain p-12" : "object-cover";
        const cardTransition: Transition = {
          duration: 0.7,
          delay: shouldAnimateOnLoad ? index * 0.15 : (index % 3) * 0.15,
          ease: "easeOut",
        };

        // Card animates in place; first row loads immediately, others as they scroll into view.
        const content = (
          <motion.article
            initial={{ opacity: 0, y: 80 }}
            animate={shouldAnimateOnLoad ? { opacity: 1, y: 0 } : undefined}
            whileInView={shouldAnimateOnLoad ? undefined : { opacity: 1, y: 0 }}
            viewport={shouldAnimateOnLoad ? undefined : { once: true, amount: 0.3 }}
            transition={cardTransition}
            className={`flex flex-col gap-4 sm:gap-6 ${href ? "cursor-pointer" : ""}`}
          >
            {/* Project visual */}
            <motion.div
              whileHover={{ y: -16 }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
              className={imageWrapperClasses}
            >
              {isLocked && (
                <span
                  className={[
                    "pointer-events-none absolute top-3 left-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border",
                    isWhiteLock
                      ? "border-white/80 text-white"
                      : "border-gray-300/80 text-gray-800",
                  ].join(" ")}
                >
                  <Image
                    src={isWhiteLock ? "/icons/white-lock.svg" : "/icons/lock.svg"}
                    alt="Locked"
                    width={isWhiteLock ? 20 : 18}
                    height={isWhiteLock ? 20 : 18}
                  />
                </span>
              )}
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageLabel}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                  className={`h-full w-full ${imageObjectClass}`}
                  unoptimized={isAnimatedGif}
                  priority={index === 2}
                />
              ) : (
                <span className="text-gray-500 text-sm">{imageLabel}</span>
              )}
            </motion.div>
            {/* Project copy */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-2xl font-bold text-black sm:text-3xl">{title}</h3>
              <p className="text-lg leading-relaxed text-gray-600">{description}</p>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-black">{badge}</h4>
            </div>
          </motion.article>
        );

        if (href) {
          return (
            <Link key={title} href={href} className="block">
              {content}
            </Link>
          );
        }

        return <Fragment key={title}>{content}</Fragment>;
      })}
    </div>
  );
}

export default function Home() {
  // Controls the project section entrance when "work" is clicked.
  const projectsControls = useAnimation();
  const projectsRef = useRef<HTMLElement | null>(null);
  const [activeNav, setActiveNav] = useState<string>("work");
  const pathname = usePathname();

  // Smooth-scroll to the projects grid and replay its animation when "work" is tapped.
  const handleWorkClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      if (typeof window === "undefined" || !projectsRef.current) {
        return;
      }

      setActiveNav("work");

      const navElement = document.querySelector("nav");
      const navHeight = navElement?.getBoundingClientRect().height ?? 96;
      const navOffset = navHeight + 8;
      const targetPosition =
        projectsRef.current.getBoundingClientRect().top + window.scrollY - navOffset;

      projectsControls.stop();
      window.scrollTo({ top: targetPosition, behavior: "smooth" });

      window.setTimeout(() => {
        projectsControls.stop();
        projectsControls.set({ y: -48, opacity: 0.7 });
        projectsControls.start({
          y: 0,
          opacity: 1,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        });
      }, 120);
    },
    [projectsControls]
  );

  // Keep the nav highlight in sync with the current route.
  useEffect(() => {
    if (pathname === "/about") {
      setActiveNav("about");
      return;
    }

    setActiveNav("work");
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky site navigation */}
      <nav className="sticky top-0 z-50 w-full py-6 px-8 sm:px-16 flex justify-between items-center bg-gray-50/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-medium text-black"
        >
          <Link href="/" className="nav-pill text-black hover:text-black">
            cornelious
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-4 sm:gap-6"
        >
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = activeNav === label;
            const baseClasses = "nav-pill text-black transition-colors";
            const activeClasses = isActive
              ? " bg-gray-200 text-black"
              : " hover:text-black hover:bg-gray-200";
            const navClassName = `${baseClasses}${activeClasses}`;

            if (href.startsWith("#")) {
              return (
                <button
                  key={label}
                  type="button"
                  onClick={handleWorkClick}
                  className={navClassName}
                >
                  {label}
                </button>
              );
            }

            return (
              <Link
                key={label}
                href={href}
                className={navClassName}
                onClick={() => setActiveNav(label)}
              >
                {label}
              </Link>
            );
          })}
        </motion.div>
      </nav>

      {/* Hero split layout */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16 min-h-[80vh] flex items-start pt-16 sm:pt-24 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Gradient Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-start"
          >
            <GradientOrb className="h-80 w-80 sm:h-96 sm:w-96 rounded-full" />
          </motion.div>

          {/* Right side - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
              CORNELIOUS WILLIAMS
            </h1>
            
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                Hey! My name is Cornelious, a Product Designer 
                <span className="inline-block ml-1">✌️</span>
              </p>
              
              <p>
                Im passionate about crafting meaningful{" "}
                <strong>digital experiences</strong>{" "}
                focusing on user-centered design. I am currently studying UX Design @{" "}
                DePaul University in Chicago and Im always looking to solve 
                problems that make a positive impact.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                className="space-y-1"
              >
                <h2 className="text-sm font-bold uppercase tracking-wide text-black">
                  Currently
                </h2>
                <p className="text-lg text-gray-600">Product Designer @ DePaul University</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                className="space-y-1"
              >
                <h2 className="text-sm font-bold uppercase tracking-wide text-black">
                  Previously at
                </h2>
                <p className="text-lg text-gray-600">Microsoft, Northshore Clinical Lab & Google</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Project grid */}
      <motion.section
        ref={projectsRef}
        animate={projectsControls}
        initial={false}
        id="projects"
        className="w-full px-8 sm:px-16 pt-12 pb-16 lg:-mt-12"
      >
        <ProjectCards />
      </motion.section>

      {/* Footer links */}
      <footer className="w-full px-8 sm:px-16 py-8 bg-white">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="text-gray-600 text-sm">made by cornelious</span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a key={label} href={href} className="nav-pill-inline text-gray-600 hover:text-black">
                {label}
              </a>
            ))}
          </div>
          <span className="text-gray-600 text-sm">©2025</span>
        </div>
      </footer>
    </div>
  );
}
