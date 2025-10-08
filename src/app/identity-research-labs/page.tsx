"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "work", href: "/" },
  { label: "about", href: "/about" },
];

export default function IdentityResearchLabs() {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full py-6 px-8 sm:px-16 flex justify-between items-center bg-gray-50/80 backdrop-blur-md">
        <div className="text-2xl font-medium text-black">
          <Link href="/" className="nav-pill text-black hover:text-black">
            cornelious
          </Link>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          {NAV_LINKS.map(({ label, href }) => {
            const isActive =
              (label === "about" && pathname === "/about") ||
              (label === "work" && pathname !== "/about");
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
        </div>
      </nav>

      {/* Header Image Section */}
      <div className="relative max-w-7xl mx-auto h-96 bg-gray-400 rounded-3xl px-8 mt-8 overflow-hidden">
        {/* Gray placeholder background */}
        <div className="absolute inset-0 bg-gray-400 rounded-3xl">
          {/* Image placeholder - replace with actual image when available */}
        </div>

        {/* Title Overlay */}
        <div className="absolute left-12 top-1/2 transform -translate-y-1/2 text-white">
          <h1 className="text-6xl font-light leading-tight">
            <span className="italic">Identity</span><br />
            Research Labs
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16 py-16">
        <h1 className="text-4xl font-bold text-black mb-8">Identity Research Labs</h1>
        {/* Content will be added later */}
      </main>

      {/* Footer */}
      <footer className="w-full px-8 sm:px-16 py-8 bg-white">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">made by cornelious</span>
          <div className="flex items-center space-x-8">
            <a href="#" className="nav-pill-inline text-gray-600 hover:text-black">Figma</a>
            <a href="#" className="nav-pill-inline text-gray-600 hover:text-black">Twitter</a>
            <a href="#" className="nav-pill-inline text-gray-600 hover:text-black">LinkedIn</a>
          </div>
          <span className="text-gray-600 text-sm">©2025</span>
        </div>
      </footer>
    </div>
  );
}
