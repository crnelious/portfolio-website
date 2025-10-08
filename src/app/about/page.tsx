"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GradientOrb from "@/components/GradientOrb";

const NAV_LINKS = [
  { label: "work", href: "/" },
  { label: "about", href: "/about" },
];

export default function About() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
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
            const isActive =
              (label === "work" && pathname === "/") ||
              (label === "about" && pathname === "/about");
            const baseClasses = "nav-pill text-black transition-colors";
            const activeClasses = isActive
              ? " bg-gray-200 text-black"
              : " hover:text-black hover:bg-gray-200";

            return (
              <Link key={label} href={href} className={`${baseClasses}${activeClasses}`}>
                {label}
              </Link>
            );
          })}
        </motion.div>
      </nav>

      <main className="w-full px-6 sm:px-12 lg:px-20 py-20">
        <div className="mx-auto w-full max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full"
            >
              <GradientOrb className="h-[560px] w-full rounded-[44px]" />
            </motion.div>

            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
              className="space-y-10"
            >
              <div className="space-y-5">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-black">
                  Hello,
                  <br />
                  Im Cornelious
                </h1>
                <p className="text-sm uppercase tracking-[0.35em] text-gray-500">
                  /kor-nee-lee-us/
                </p>
                <p className="text-lg leading-relaxed text-gray-600">
                  I’m a product designer focused on crafting welcoming digital experiences for communities and organizations that care deeply about access. My background sits at the intersection of research, front-end curiosity, and visual systems—helping teams move from complex ideas to thoughtful, approachable products.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                <div className="space-y-3">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-black">
                    Currently
                  </h2>
                  <p className="text-base leading-relaxed text-gray-600">
                    I collaborate with DePaul University’s Identity Research Lab and Places for All Research Collective, shaping website flows, design systems, and research narratives that bring academic work to life. Previously, I’ve supported teams at Microsoft and North Shore Clinical Labs, bridging design with engineering to ship accessible experiences.
                  </p>
                </div>
                <div className="space-y-3">
                  <h2 className="text-sm font-semibold uppercase tracking-wide text-black">
                    Out of Office
                  </h2>
                  <p className="text-base leading-relaxed text-gray-600">
                    Outside of design, I’m usually exploring Chicago’s architecture, losing track of time in art museums, or experimenting with sound in my home studio. Whether it’s gaming, music, or design meetups, I’m drawn to experiences that challenge how we see and interact with the world, and that curiosity always finds its way into my work
                  </p>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>

      <section className="w-full bg-white px-6 sm:px-12 lg:px-20 py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-16 lg:grid-cols-[0.9fr_1.4fr] lg:items-start">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-black tracking-tight">
              I love designing & building products.
            </h2>
          </div>
          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-gray-600 max-w-2xl">
              Every day I’m driven to solve problems for others and craft experiences that feel intuitive, warm, and considered. Currently I’m supporting DePaul University’s design and research teams while collaborating with partners who value accessibility and storytelling.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 text-gray-700 text-base">
              <div className="flex justify-between font-medium text-black">
                <span>DePaul University</span>
                <span className="text-gray-500">2024 — Now</span>
              </div>
              <div className="flex justify-between font-medium text-black">
                <span>Microsoft</span>
                <span className="text-gray-500">2022 — 2023</span>
              </div>
              <div className="flex justify-between font-medium text-black">
                <span>NorthShore Clinical Labs</span>
                <span className="text-gray-500">2021 — 2022</span>
              </div>
              <div className="flex justify-between font-medium text-black">
                <span>Google</span>
                <span className="text-gray-500">2019</span>
              </div>
              <div className="flex justify-between font-medium text-black">
                <span>Sneaker Access</span>
                <span className="text-gray-500">2019 — 2020</span>
              </div>
              <div className="flex justify-between font-medium text-black">
                <span>Supreme Access</span>
                <span className="text-gray-500">2019 — 2020</span>
              </div>
              <div className="flex justify-between font-medium text-black">
                <span>Hypremium</span>
                <span className="text-gray-500">2018 — 2020</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-6 sm:px-12 lg:px-20 py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-16 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-semibold text-black tracking-tight">
              Experience
            </h2>

          </div>
          <div className="space-y-14">
            <div className="grid grid-cols-[minmax(120px,160px)_1fr] gap-10">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                2024 — Now
              </span>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-black">DePaul University</h3>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Product Designer · Identity Research Lab
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Dive into research-rich problems with faculty and students, translating findings into inclusive tools, websites, and systems that broaden access to identity-focused scholarship.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[minmax(120px,160px)_1fr] gap-10">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                2022 — 2023
              </span>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-black">Microsoft</h3>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Cloud Support Engineer & Designer
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Partnered with Azure identity teams to streamline case workflows and surface guidance faster. Balanced frontline engineering with experience design to reduce resolution time for enterprise customers.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[minmax(120px,160px)_1fr] gap-10">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                2021 — 2022
              </span>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-black">NorthShore Clinical Labs</h3>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Product Design Lead
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Reimagined lab reporting and intake flows so patients could understand results at a glance. Built modular dashboards and care journeys that helped clinicians communicate with clarity.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[minmax(120px,160px)_1fr] gap-10">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                2019
              </span>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-black">Google</h3>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  iOS Engineer Internship · Google News
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Paired with UX research to refine the onboarding journey, ship animated prototypes, and align iOS engineers on an accessible first-run experience for millions of readers.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[minmax(120px,160px)_1fr] gap-10">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                2019 — 2020
              </span>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-black">Sneaker Access</h3>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Product Designer · Co-founder
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Led product vision for a membership platform that helped collectors secure limited releases. Defined brand, interface, and community flows that balanced hype with fairness.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[minmax(120px,160px)_1fr] gap-10">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                2019 — 2020
              </span>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-black">Supreme Access</h3>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Lead Designer
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Crafted a storytelling-driven commerce experience that celebrated the community while keeping the drop experience fast, accessible, and inclusive.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[minmax(120px,160px)_1fr] gap-10">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                2018 — 2020
              </span>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-black">Hypremium</h3>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Founder · Product Designer
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Built and launched online marketplaces for streetwear collectors. Ran end-to-end design and front-end experimentation to keep inventory drops engaging and trustworthy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white px-6 sm:px-12 lg:px-20 py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-16 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-semibold text-black tracking-tight">
              Education
            </h2>
          </div>
          <div className="space-y-10">
            <div className="grid grid-cols-[minmax(120px,160px)_1fr] gap-10">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                2026
              </span>
              <div className="space-y-1.5">
                <h3 className="text-xl font-semibold text-black">Bachelor of Science</h3>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  DePaul University · User Experience Design
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Immersive coursework in interaction design, research synthesis, and inclusive design systems. GPA 3.8.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-[minmax(120px,160px)_1fr] gap-10">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
                2022
              </span>
              <div className="space-y-1.5">
                <h3 className="text-xl font-semibold text-black">Associate of Science</h3>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  Joliet Junior College · Computer Science
                </p>
                <p className="text-base leading-relaxed text-gray-600">
                  Foundations in programming, data structures, and problem-solving that support collaborative product work. GPA 3.5.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full px-8 sm:px-16 py-8 bg-white">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-gray-600 text-sm">made by cornelious</span>
          <div className="flex items-center space-x-8">
            <a href="https://x.com/crnelious" className="nav-pill-inline text-gray-600 hover:text-black">
              Twitter
            </a>
            <a href="mailto:cornelious.info@gmail.com" className="nav-pill-inline text-gray-600 hover:text-black">
              Email
            </a>
            <a href="https://www.linkedin.com/in/crnelious" className="nav-pill-inline text-gray-600 hover:text-black">
              LinkedIn
            </a>
          </div>
          <span className="text-gray-600 text-sm">©2025</span>
        </div>
      </footer>
    </div>
  );
}
