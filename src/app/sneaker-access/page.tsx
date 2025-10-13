"use client";
import { motion } from "framer-motion";
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
      <div className="mx-auto max-w-7xl px-8 py-16">
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
                Sep &apos;24 - Dec &apos;24
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Features and Iterations Section */}
      <div className="mx-auto max-w-7xl px-8 py-16">
        <h2 className="mb-16 text-6xl font-bold text-black">
          Features and Iterations
        </h2>

        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Mobile App Mockup - Gray Placeholder */}
          <div className="relative">
            <div className="mx-auto h-96 w-full max-w-md rounded-3xl bg-gray-300 p-8 shadow-lg">
              {/* Gray placeholder for the mobile app image */}
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gray-400">
                <span className="text-sm text-gray-600">Mobile App Mockup</span>
              </div>
            </div>
          </div>

          {/* Shop Feature Description */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-black">Shop</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              After creating your account, cycle through the pages to purchase a
              slot that could potentially give you the Supreme items you&apos;ve
              been wanting.
            </p>
          </div>
        </div>

        {/* Multiple Profiles Section */}
        <div className="mt-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Multiple Profiles Description */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-black">Multiple Profiles</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              After creating your account, cycle through the pages to purchase a
              slot that could potentially give you the Supreme items you&apos;ve
              been wanting.
            </p>
          </div>

          {/* Account Interface Mockup - Gray Placeholder */}
          <div className="relative">
            <div className="mx-auto h-96 w-full max-w-2xl rounded-3xl bg-gray-300 p-8 shadow-lg">
              {/* Gray placeholder for the account interface image */}
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gray-400">
                <span className="text-sm text-gray-600">
                  Account Interface Mockup
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-24 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Testimonials Interface Mockup - Gray Placeholder */}
          <div className="relative">
            <div className="mx-auto h-96 w-full max-w-2xl rounded-3xl bg-gray-300 p-8 shadow-lg">
              {/* Gray placeholder for the testimonials interface image */}
              <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gray-400">
                <span className="text-sm text-gray-600">
                  Testimonials Interface Mockup
                </span>
              </div>
            </div>
          </div>

          {/* Testimonials Description */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-black">Testimonials</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              To bring trust to our website, we needed actual success. Users
              would tweet us on Twitter to confirm if our service worked for
              them! Having a page dedicated to testimonials brought in more
              customers and trust to our website.
            </p>
          </div>
        </div>
      </div>

      {/* User Research & Results Section */}
      <div className="mx-auto max-w-7xl px-8 py-16">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Column - Title and Description */}
          <div className="space-y-8 self-start lg:sticky lg:top-32">
            <h2 className="text-6xl font-bold text-black">
              User Research & Results
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Customers who don&apos;t have the time to line up for the latest
              sneaker drops will turn to our services to secure the shoes they
              want. Limited-edition sneakers are known for selling out within
              seconds of their release, and our platform ensures they don&apos;t
              miss out on their most coveted pairs.
            </p>
          </div>

          {/* Right Column - Research Statistics */}
          <div className="space-y-12">
            {/* Statistic 1 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-semibold text-black">97%</span>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-black">
                    Of respondents do not know a sneaker bot service actually
                    existed.
                  </h3>
                  <p className="text-gray-600">
                    Many participants said they didn&apos;t know this type of
                    content existed. One person said, &quot;Is this the reason
                    why I can never buy any shoe that drops on the SNKRS
                    app?&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Statistic 2 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-semibold text-black">79%</span>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-black">
                    Of respondents kept trying and buying more devices to buy
                    shoes.
                  </h3>
                  <p className="text-gray-600">
                    Participants went out of their way to buy another Macbook,
                    or iPhone, or buy used laptops off Facebook or eBay. One
                    person mentioned, &quot;I thought the more laptops I bought,
                    ill have a better chance of buying yeezy&apos;s&quot;
                  </p>
                </div>
              </div>
            </div>

            {/* Statistic 3 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-semibold text-black">66%</span>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-black">
                    Of respondents wish someone could just buy them the shoe and
                    they&apos;ll pay a fee for it.
                  </h3>
                  <p className="text-gray-600">
                    Many people who can afford to pay $200+ for shoes are
                    working and these shoes get released while they&apos;re away
                    from their computers or phones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sketches and Ideas Section */}
      <div className="bg-black py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-6xl leading-tight font-bold text-white">
                Sketches
                <br />
                <span className="text-gray-400">and ideas</span>
              </h2>
            </div>

            {/* Right Column - Description */}
            <div>
              <p className="text-lg leading-relaxed text-white">
                I ideated on potential solutions and user flows. I provided some
                HiFi screenshots to showcase the user flow for the desktop
                version.
              </p>
            </div>
          </div>

          {/* Sketches Gallery */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {/* Sketch 1 - Large sneaker image */}
            <div className="lg:row-span-2">
              <div className="flex h-96 items-center justify-center rounded-lg bg-gray-600">
                <span className="text-sm text-gray-400">Sneaker Sketch</span>
              </div>
            </div>

            {/* Sketch 2 - Sign up form */}
            <div>
              <div className="flex h-44 items-center justify-center rounded-lg bg-gray-600">
                <span className="text-sm text-gray-400">Sign Up Form</span>
              </div>
            </div>

            {/* Sketch 3 - Blurred wireframe */}
            <div>
              <div className="flex h-44 items-center justify-center rounded-lg bg-gray-600">
                <span className="text-sm text-gray-400">Wireframe</span>
              </div>
            </div>

            {/* Sketch 4 - Product grid */}
            <div>
              <div className="flex h-44 items-center justify-center rounded-lg bg-gray-600">
                <span className="text-sm text-gray-400">Product Grid</span>
              </div>
            </div>

            {/* Sketch 5 - Numbered wireframes */}
            <div className="lg:row-span-2">
              <div className="flex h-96 items-center justify-center rounded-lg bg-gray-600">
                <span className="text-sm text-gray-400">Flow Wireframes</span>
              </div>
            </div>

            {/* Additional sketches to fill the grid */}
            <div>
              <div className="flex h-44 items-center justify-center rounded-lg bg-gray-600">
                <span className="text-sm text-gray-400">Sketch Detail</span>
              </div>
            </div>

            <div>
              <div className="flex h-44 items-center justify-center rounded-lg bg-gray-600">
                <span className="text-sm text-gray-400">UI Concept</span>
              </div>
            </div>

            <div>
              <div className="flex h-44 items-center justify-center rounded-lg bg-gray-600">
                <span className="text-sm text-gray-400">User Flow</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Usability Testing and Findings Section */}
      <div className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-8">
          <div className="mb-16 grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-6xl leading-tight font-bold text-black">
                Usability testing and
                <br />
                findings
              </h2>
            </div>

            {/* Right Column - Description */}
            <div>
              <p className="text-lg leading-relaxed text-gray-600">
                I conducted a small usability test with 4 individuals. I was
                looking to test clarity, completion and comprehension of the
                different features.
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
                <h3 className="text-2xl font-bold text-black">Before</h3>
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
                <h3 className="text-2xl font-bold text-black">After</h3>
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
                <h3 className="text-2xl font-bold text-black">Before</h3>
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
                <h3 className="text-2xl font-bold text-black">After</h3>
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
