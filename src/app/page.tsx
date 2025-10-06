"use client";
import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "home", href: "#home" },
  { label: "me", href: "#me" },
];

const SOCIAL_LINKS = [
  { label: "Figma", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
];

function ProjectCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Identity Research Labs",
      description:
        "Supporting identity-focused research through organizing lab materials, synthesizing findings, and contributing design support for digital knowledge management at DePaul’s Identity Research Lab.",
      badge: "Research Assistant · Shipped · 2025",
      imageLabel: "First Draft Interface Image",
      href: "/identity-research-labs",
    },
    {
      title: "PARC",
      description:
        "Contributing to the Healthy & Equitable Public Spaces initiative by supporting web design, creating digital assets, and assisting with research communication for DePaul’s Places for All Research Collective (PARC).",
      badge: "Research Assistant · 2025",
      imageLabel: "Notification Interface Image",
    },
    {
      title: "Sneaker Access",
      description:
        "A mobile app concept that allows users to discover and access exclusive sneaker releases through a seamless and engaging user experience.",
      badge: "E-commerce · Shipped · 2019",
      imageLabel: "Sneaker Access",
      href: "/sneaker-access",
      imageSrc: "/projects/sneaker-access/sneaker-access-header.jpg",
    },
    {
      title: "Microsoft",
      description:
        "Rapidly prototyped cross-platform productivity flows for an internal product team, translating mixed-method research into accessible interaction patterns.",
      badge: "Cloud Support Engineer & Designer · 2023",
      imageLabel: "Microsoft Collaboration",
    },
    {
      title: "Google",
      description:
        "Partnered with Google UX researchers to refine onboarding journeys, pairing qualitative insights with high-fidelity interface explorations for emerging products.",
      badge: "iOS Engineer Internship · 2019",
      imageLabel: "Google UX Sprint",
    },
    {
      title: "Supreme Access",
      description:
        "Designed a membership-driven commerce flow that balances hype moments with inclusive access, focusing on real-time drops and community-driven storytelling.",
      badge: "Design · Front-end Development · 2019",
      imageLabel: "Supreme Access Interface",
      imageSrc: "/projects/supreme-access/supreme-access-header.JPG",
    },
    {
      title: "North Shore Clinical Labs",
      description:
        "Introduced patient-friendly reporting dashboards and intake flows that simplify complex diagnostics for North Shore Clinical Labs’ digital touchpoints.",
      badge: "Healthcare Product Design · 2022",
      imageLabel: "Clinical Labs Dashboard",
    },
  ];

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map(({ title, description, badge, imageLabel, href, imageSrc }, index) => {
        const content = (
          <motion.article
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
            transition={{ duration: 0.8, delay: 0.1 + index * 0.2, ease: "easeOut" }}
            className={`flex flex-col gap-6 ${href ? "cursor-pointer" : ""}`}
          >
            <motion.div
              whileHover={{ y: -16 }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
              className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gray-200"
            >
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageLabel}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                  className="h-full w-full object-cover"
                  priority={index === 2}
                />
              ) : (
                <span className="text-gray-500 text-sm">{imageLabel}</span>
              )}
            </motion.div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-black sm:text-3xl">{title}</h3>
              <p className="text-lg leading-relaxed text-gray-600">{description}</p>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">{badge}</h4>
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
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full py-8 px-8 sm:px-16 flex justify-between items-center bg-gray-50/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-medium text-black"
        >
          cornelious
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-8"
        >
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-black hover:text-gray-600 transition-colors"
            >
              {label}
            </a>
          ))}
        </motion.div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16 min-h-screen flex items-center pt-0 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Gradient Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-black"></div>
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
                <span className="underline decoration-2 underline-offset-2">digital experiences</span>{" "}
                focusing on user-centered design. I am currently studying UX Design @{" "}
                DePaul University in Chicago and Im always looking to solve 
                problems that make a positive impact.
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Projects Section */}
      <section className="w-full px-8 sm:px-16 py-16">
        <ProjectCards />
      </section>

      {/* Footer */}
      <footer className="w-full px-8 sm:px-16 py-8 bg-white">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">made by cornelious</span>
          <div className="flex items-center space-x-8">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="text-gray-600 hover:text-black transition-colors text-sm"
              >
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
