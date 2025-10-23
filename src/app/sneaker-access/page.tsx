"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "work", href: "/" },
  { label: "about", href: "/about" },
];

export default function SneakerAccess() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex w-full items-center justify-between bg-gray-50/80 px-8 py-6 backdrop-blur-md sm:px-16">
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
              (label === "about" && pathname === "/about") ||
              (label === "work" && pathname !== "/about");
            const baseClasses = "nav-pill text-black transition-colors";
            const activeClasses = isActive
              ? " bg-gray-200 text-black"
              : " hover:text-black hover:bg-gray-200";

            return (
              <Link
                key={label}
                href={href}
                className={`${baseClasses}${activeClasses}`}
              >
                {label}
              </Link>
            );
          })}
        </motion.div>
      </nav>

      {/* Header Image Section */}
      <div className="relative mx-auto mt-8 h-96 max-w-7xl overflow-hidden rounded-3xl bg-gray-400 px-8">
        {/* Gray placeholder background */}
        <div className="absolute inset-0 rounded-3xl bg-gray-400">
          {/* Image placeholder - replace with actual image when available */}
        </div>

        {/* Title Overlay - Simplified */}
        <div className="absolute top-1/2 left-12 -translate-y-1/2 transform text-white">
          <h1 className="text-6xl leading-tight font-light">
            <span className="italic">Sneaker</span>
            <br />
            Access
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto max-w-7xl px-8 pt-16 pb-24 sm:pb-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Main Content - Left Column */}
          <div className="space-y-12 lg:col-span-2">
            {/* Title */}
            <h2 className="mb-6 text-6xl font-bold text-black">
              Sneaker Access
            </h2>

            {/* Subtitle */}
            <p className="text-2xl leading-relaxed text-gray-500">
              A mobile app and web platform to make sneaker releases and access
              more engaging for collectors and enthusiasts
            </p>

            {/* Description */}
            <p className="text-lg leading-relaxed text-gray-600">
              I&apos;m passionate about sneaker culture and noticed how
              difficult it can be for collectors to access limited releases. I
              decided to create Sneaker Access as a personal project to improve
              the experience of discovering, tracking, and accessing exclusive
              sneaker drops. This platform brings collectors together with
              interactive features, showing release histories, authentication
              guides, and community insights. This project showcases my UX
              design skills in the e-commerce and collector space.
            </p>

            {/* Problem and Outcome Section */}
            <div className="grid grid-cols-1 gap-16 pt-12 md:grid-cols-2">
              {/* Problem */}
              <div>
                <h3 className="mb-6 text-2xl font-bold text-black">Problem</h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  How might we make sneaker release experiences more accessible,
                  transparent, and community-driven for collectors of all
                  levels?
                </p>
              </div>

              {/* Outcome */}
              <div>
                <h3 className="mb-6 text-2xl font-bold text-black">Outcome</h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  I created a comprehensive web and mobile platform that makes
                  sneaker collecting more accessible through release tracking,
                  authentication tools, community features, and fair access
                  systems for limited drops.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar - Right Column */}
          <div className="space-y-12">
            {/* Role */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-black">Role</h3>
              <p className="text-lg text-gray-600">Product designer</p>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-black">Timeline</h3>
              <p className="text-lg text-gray-600">
                Sep &apos;19 - Jan &apos;20
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features and Iterations Section */}
      <div className="mx-auto w-full max-w-[1600px] px-6 pt-28 pb-20 sm:px-12 sm:pt-36 lg:pt-40 lg:pb-28">
        <h2 className="mb-14 text-4xl font-bold text-black sm:mb-16 sm:text-5xl lg:mb-20">
          Features and Iterations
        </h2>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] lg:gap-24">
          {/* Shop Feature Visual */}
          <div className="relative w-full overflow-hidden rounded-[2rem] lg:-ml-4">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/projects/sneaker-access/assets/Shop%20Screenshot.jpg"
                alt="High-fidelity Sneaker Access shop interface showcasing featured releases."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 95vw, (max-width: 1600px) 68vw, 1040px"
                priority
              />
            </div>
          </div>

          {/* Shop Feature Description */}
          <div className="space-y-5">
            <h3 className="text-3xl font-bold text-black sm:text-4xl">Shop</h3>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              After creating your account, cycle through the pages to purchase a
              slot that could potentially give you the Supreme items you&apos;ve
              been wanting.
            </p>
          </div>
        </div>

        {/* Multiple Profiles Section */}
        <div className="mt-28 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.8fr)] lg:gap-24">
          {/* Multiple Profiles Description */}
          <div className="order-2 space-y-5 lg:order-1">
            <h3 className="text-3xl font-bold text-black sm:text-4xl">
              Multiple Profiles
            </h3>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              After creating your account, cycle through the pages to purchase a
              slot that could potentially give you the Supreme items you&apos;ve
              been wanting.
            </p>
          </div>

          {/* Account Interface Mockup */}
          <div className="order-1 relative w-full overflow-hidden rounded-[2rem] lg:order-2 lg:ml-4">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/projects/sneaker-access/assets/Profile%20page.jpg"
                alt="Sneaker Access profile management screen."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 95vw, (max-width: 1600px) 68vw, 1040px"
              />
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-28 grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1.8fr)_minmax(0,1fr)] lg:gap-24">
          {/* Testimonials Visual */}
          <div className="relative w-full overflow-hidden rounded-[2rem] lg:-ml-4">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/projects/sneaker-access/assets/Testimonials%20Page.jpg"
                alt="Testimonials page showcasing real user feedback."
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 95vw, (max-width: 1600px) 68vw, 1040px"
              />
            </div>
          </div>

          {/* Testimonials Description */}
          <div className="space-y-5">
            <h3 className="text-3xl font-bold text-black sm:text-4xl">
              Testimonials
            </h3>
            <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
              To bring trust to our website, we needed actual success. Users
              would tweet us on Twitter to confirm if our service worked for
              them! Having a page dedicated to testimonials brought in more
              customers and trust to our website.
            </p>
          </div>
        </div>
      </div>

      {/* User Research & Results Section */}
      <div className="mx-auto max-w-6xl px-8 py-24 sm:py-28">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:gap-20">
          {/* Left Column - Title and Description */}
          <div className="space-y-5">
            <div>
              <h2 className="text-3xl font-bold text-black sm:text-4xl">
                User research
              </h2>
              <h3 className="text-3xl font-semibold text-gray-500 sm:text-4xl">
                findings &amp; results
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Customers who don&apos;t have the time to line up for the latest
              sneaker drops will turn to our services to secure the shoes they
              want. Limited-edition sneakers sell out within seconds, and our
              platform ensures they won&apos;t miss out on the pairs they care about.
            </p>
          </div>

          {/* Right Column - Research Statistics */}
          <div className="space-y-8">
            {[{
              stat: "97%",
              title: "Of respondents didn't know sneaker bot services existed.",
              copy:
                "Many participants said they didn't know this type of content existed. One person asked, \"Is this why I can never buy any shoe that drops on SNKRS?\"",
            },
            {
              stat: "79%",
              title: "Tried buying more devices to improve their chances.",
              copy:
                "Participants went out of their way to buy extra laptops and phones. One person said, \"I thought the more laptops I bought, the better shot I'd have at Yeezys.\"",
            },
            {
              stat: "88%",
              title: "Would pay a fee for someone else to secure the shoe.",
              copy:
                "People who can afford $200+ pairs are often working during drop times. They want a trusted partner who can grab releases while they're offline.",
            }].map(({ stat, title, copy }) => (
              <div key={stat} className="flex items-start gap-6">
                <span className="text-lg font-semibold text-black sm:text-xl">
                  {stat}
                </span>
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-black sm:text-xl">
                    {title}
                  </h4>
                  <p className="text-base leading-relaxed text-gray-500 sm:text-lg">
                    {copy}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Prototyping Visual Section */}
      <div className="bg-black py-20 text-white sm:py-24">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-12 lg:gap-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] lg:items-center">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Prototyping the new home experience
            </h2>
            <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
              Replaced the fragmented wireframe grid with a focused prototype
              that highlights how the redesigned home brings releases,
              testimonials, and account tools into one glanceable layout.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="flex min-h-[18rem] w-full items-center justify-center rounded-[2rem] bg-gray-300 text-gray-600">
              <span className="text-sm sm:text-base">Prototype Placeholder</span>
            </div>
            <div className="flex min-h-[18rem] w-full items-center justify-center rounded-[2rem] bg-gray-300 text-gray-600">
              <span className="text-sm sm:text-base">Prototype Placeholder</span>
            </div>
          </div>
        </div>
      </div>

      {/* Usability Testing and Findings Section */}
      <div className="bg-white py-24 sm:py-28">
        <div className="mx-auto max-w-6xl px-6 sm:px-12">
          <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.35fr)] lg:gap-20">
            {/* Left Column - Title */}
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-black sm:text-4xl">
                Usability testing
              </h2>
              <h3 className="text-3xl font-semibold text-gray-500 sm:text-4xl">
                and findings
              </h3>
            </div>

            {/* Right Column - Description */}
            <div className="lg:pl-12 xl:pl-16">
              <p className="max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base">
                I conducted a small usability test with four participants to
                understand clarity, completion, and comprehension across the new
                features. The sessions validated the flows and highlighted
                opportunities to simplify prompts before launch.
              </p>
            </div>
          </div>

          {/* Testing Interface Mockups */}
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left Mockup - Before */}
            <div>
              <div className="mb-8 flex h-96 w-full items-center justify-center rounded-3xl bg-gray-400">
                <span className="text-sm text-gray-600">Before Interface</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-red-500">Before</h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  The arrows next to &quot;View All products&quot; was confusing
                  to users. Users would click the arrows thinking the next page
                  would load.
                </p>
              </div>
            </div>

            {/* Right Mockup - After */}
            <div>
              <div className="mb-8 flex h-96 w-full items-center justify-center rounded-3xl bg-gray-400">
                <span className="text-sm text-gray-600">After Interface</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-green-500">After</h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  Looking at the old website, I decided to take away the icons
                  and have it highlighted. The click-through rate on our shop
                  page increased by{" "}
                  <span className="rounded bg-yellow-200 px-2 py-1">100%!</span>
                </p>
              </div>
            </div>
          </div>

          {/* Second Row - Testing Interface Mockups */}
          <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Left Mockup - Before */}
            <div>
              <div className="mb-8 flex h-96 w-full items-center justify-center rounded-3xl bg-gray-400">
                <span className="text-sm text-gray-600">Before Interface</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-red-500">Before</h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  Users found it difficult to navigate and understand the
                  interface layout. The previous design lacked clear visual
                  hierarchy.
                </p>
              </div>
            </div>

            {/* Right Mockup - After */}
            <div>
              <div className="mb-8 flex h-96 w-full items-center justify-center rounded-3xl bg-gray-400">
                <span className="text-sm text-gray-600">After Interface</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-green-500">After</h3>
                <p className="text-lg leading-relaxed text-gray-600">
                  The redesigned interface improved user comprehension and
                  navigation. User satisfaction scores increased significantly
                  with the new layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Building a Brand Identity Section */}
      <div className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-6xl leading-tight font-bold text-white">
                Building a<br />
                <span className="text-gray-400">brand identity</span>
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-white">
                To support the design, I created a brand guideline kit. It
                includes tone of voice, logos, colors, fonts, icons, images, and
                product vision.
              </p>
              <p className="text-lg text-gray-400 italic">
                *still fleshing this out*
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Building a New Logo Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="space-y-12">
            <div>
              <h3 className="mb-8 text-4xl font-bold text-black">
                Building a new logo
              </h3>
              <p className="mb-16 ml-auto max-w-2xl text-lg text-gray-700">
                To give the design a sense of regality, tradition, and a touch
                of modernity, I created a new logo.
              </p>
            </div>

            {/* Logo Comparison - Old and New side by side */}
            <div className="mb-16 grid grid-cols-1 gap-16 md:grid-cols-2">
              {/* Old Logo */}
              <div className="text-left">
                <div className="mb-6">
                  <h4 className="mb-2 text-xl font-bold text-black">LOGOS</h4>
                  <p className="text-sm text-gray-600">OLD</p>
                </div>
                <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gray-600">
                  <span className="text-sm text-gray-500">Old Logo</span>
                </div>
              </div>

              {/* New Logo */}
              <div className="text-left">
                <div className="mb-6">
                  <h4 className="mb-2 text-xl font-bold text-black">LOGOS</h4>
                  <p className="text-sm text-gray-600">NEW</p>
                </div>
                <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gray-600">
                  <span className="text-sm text-gray-500">New Logo</span>
                </div>
              </div>
            </div>

            {/* Wide Gray Box Below */}
            <div className="flex h-96 w-full items-center justify-center rounded-lg bg-gray-600">
              <span className="text-sm text-gray-500">Brand Guidelines</span>
            </div>
          </div>
        </div>
      </div>

      {/* Design System Section */}
      <div className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-6xl leading-tight font-bold text-white">
                A Robust
                <br />
                <span className="text-gray-400">Design System</span>
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-white">
                I created a comprehensive design system that goes beyond what
                made it into the final design. Everything follows WCAG AA
                accessibility guidelines so the experience is clear and
                inclusive even when the visuals are simple.
              </p>
              <p className="text-lg text-gray-400 italic">
                I will be updating this soon with colors, typefaces, buttons,
                and text fields.
              </p>
            </div>
          </div>

          <div className="flex w-full items-center justify-center rounded-3xl bg-white p-12 shadow-2xl">
            <span className="text-sm text-gray-500">Design System Preview</span>
          </div>
        </div>
      </div>

      {/* Final Outcome Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-5xl font-bold text-black">Final Outcome</h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-gray-700">
                I developed a website that resulted in a remarkable 90% increase
                in sales. Additionally, it successfully enhanced user retention
                and significantly reduced abandoned carts by over 95%.
              </p>
            </div>
          </div>

          <div className="flex h-[32rem] w-full items-center justify-center rounded-[40px] bg-gray-300">
            <span className="text-sm text-gray-500">Final Outcome Mockup</span>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full bg-white px-8 py-8 sm:px-16">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <span className="text-sm text-gray-600">made by cornelious</span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <a
              href="#"
              className="nav-pill-inline text-gray-600 hover:text-black"
            >
              Figma
            </a>
            <a
              href="#"
              className="nav-pill-inline text-gray-600 hover:text-black"
            >
              Twitter
            </a>
            <a
              href="#"
              className="nav-pill-inline text-gray-600 hover:text-black"
            >
              LinkedIn
            </a>
          </div>
          <span className="text-sm text-gray-600">©2025</span>
        </div>
      </footer>
    </div>
  );
}
