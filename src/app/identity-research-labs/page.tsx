import Link from "next/link";

export default function IdentityResearchLabs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full py-8 px-8 sm:px-16 flex justify-between items-center bg-gray-50/80 backdrop-blur-md">
        <div className="text-2xl font-medium text-black">
          cornelious
        </div>
        <div className="flex space-x-8">
          <Link href="/" className="text-black hover:text-gray-600 transition-colors">home</Link>
          <a href="#me" className="text-black hover:text-gray-600 transition-colors">me</a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16 py-16">
        <h1 className="text-4xl font-bold text-black mb-8">Identity Research Labs</h1>
        {/* Content will be added later */}
      </main>
    </div>
  );
}
