"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SneakerAccess() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full py-8 px-8 sm:px-16 flex justify-between items-center bg-gray-50/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-medium text-black"
        >
          <Link href="/" className="hover:text-gray-600 transition-colors">
            cornelious
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex space-x-8"
        >
          <Link href="/" className="text-black hover:text-gray-600 transition-colors">home</Link>
          <a href="#me" className="text-black hover:text-gray-600 transition-colors">me</a>
        </motion.div>
      </nav>

      {/* Header Image Section */}
      <div className="relative max-w-7xl mx-auto h-96 bg-gray-400 rounded-3xl px-8 mt-8 overflow-hidden">
        {/* Gray placeholder background */}
        <div className="absolute inset-0 bg-gray-400 rounded-3xl">
          {/* Image placeholder - replace with actual image when available */}
        </div>
        
        {/* Title Overlay - Simplified */}
        <div className="absolute left-12 top-1/2 transform -translate-y-1/2 text-white">
          <h1 className="text-6xl font-light leading-tight">
            <span className="italic">Sneaker</span><br />
            Access
          </h1>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content - Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Title */}
            <h2 className="text-6xl font-bold text-black mb-6">Sneaker Access</h2>
            
            {/* Subtitle */}
            <p className="text-2xl text-gray-500 leading-relaxed">
              A mobile app and web platform to make sneaker releases and access more engaging for collectors and enthusiasts
            </p>
            
            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              I&apos;m passionate about sneaker culture and noticed how difficult it can be for collectors to access limited releases. I decided to create Sneaker Access as a personal project to improve the experience of discovering, tracking, and accessing exclusive sneaker drops. This platform brings collectors together with interactive features, showing release histories, authentication guides, and community insights. This project showcases my UX design skills in the e-commerce and collector space.
            </p>
            
            {/* Problem and Outcome Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 pt-12">
              {/* Problem */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Problem</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  How might we make sneaker release experiences more accessible, transparent, and community-driven for collectors of all levels?
                </p>
              </div>
              
              {/* Outcome */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">Outcome</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I created a comprehensive web and mobile platform that makes sneaker collecting more accessible through release tracking, authentication tools, community features, and fair access systems for limited drops.
                </p>
              </div>
            </div>
          </div>
          
          {/* Sidebar - Right Column */}
          <div className="space-y-12">
            {/* Role */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Role</h3>
              <p className="text-lg text-gray-600">Product designer</p>
            </div>
            
            {/* Timeline */}
            <div>
              <h3 className="text-xl font-bold text-black mb-4">Timeline</h3>
              <p className="text-lg text-gray-600">Sep &apos;24 - Dec &apos;24</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Features and Iterations Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-6xl font-bold text-black mb-16">Features and Iterations</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Mobile App Mockup - Gray Placeholder */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto h-96 bg-gray-300 rounded-3xl p-8 shadow-lg">
              {/* Gray placeholder for the mobile app image */}
              <div className="w-full h-full bg-gray-400 rounded-2xl flex items-center justify-center">
                <span className="text-gray-600 text-sm">Mobile App Mockup</span>
              </div>
            </div>
          </div>
          
          {/* Shop Feature Description */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-black">Shop</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              After creating your account, cycle through the pages to purchase a slot that could potentially give you the Supreme items you&apos;ve been wanting.
            </p>
          </div>
        </div>
        
        {/* Multiple Profiles Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
          {/* Multiple Profiles Description */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-black">Multiple Profiles</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              After creating your account, cycle through the pages to purchase a slot that could potentially give you the Supreme items you&apos;ve been wanting.
            </p>
          </div>
          
          {/* Account Interface Mockup - Gray Placeholder */}
          <div className="relative">
            <div className="w-full max-w-2xl mx-auto h-96 bg-gray-300 rounded-3xl p-8 shadow-lg">
              {/* Gray placeholder for the account interface image */}
              <div className="w-full h-full bg-gray-400 rounded-2xl flex items-center justify-center">
                <span className="text-gray-600 text-sm">Account Interface Mockup</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-24">
          {/* Testimonials Interface Mockup - Gray Placeholder */}
          <div className="relative">
            <div className="w-full max-w-2xl mx-auto h-96 bg-gray-300 rounded-3xl p-8 shadow-lg">
              {/* Gray placeholder for the testimonials interface image */}
              <div className="w-full h-full bg-gray-400 rounded-2xl flex items-center justify-center">
                <span className="text-gray-600 text-sm">Testimonials Interface Mockup</span>
              </div>
            </div>
          </div>
          
          {/* Testimonials Description */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-black">Testimonials</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              To bring trust to our website, we needed actual success. Users would tweet us on Twitter to confirm if our service worked for them! Having a page dedicated to testimonials brought in more customers and trust to our website.
            </p>
          </div>
        </div>
      </div>
      
      {/* User Research & Results Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Title and Description */}
          <div className="space-y-8 lg:sticky lg:top-32 self-start">
            <h2 className="text-6xl font-bold text-black">User Research & Results</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Customers who don&apos;t have the time to line up for the latest sneaker drops will turn to our services to secure the shoes they want. Limited-edition sneakers are known for selling out within seconds of their release, and our platform ensures they don&apos;t miss out on their most coveted pairs.
            </p>
          </div>
          
          {/* Right Column - Research Statistics */}
          <div className="space-y-12">
            {/* Statistic 1 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-semibold text-black">97%</span>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Of respondents do not know a sneaker bot service actually existed.</h3>
                  <p className="text-gray-600">
                    Many participants said they didn&apos;t know this type of content existed. One person said, &quot;Is this the reason why I can never buy any shoe that drops on the SNKRS app?&quot;
                  </p>
                </div>
              </div>
            </div>
            
            {/* Statistic 2 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-semibold text-black">79%</span>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Of respondents kept trying and buying more devices to buy shoes.</h3>
                  <p className="text-gray-600">
                    Participants went out of their way to buy another Macbook, or iPhone, or buy used laptops off Facebook or eBay. One person mentioned, &quot;I thought the more laptops I bought, ill have a better chance of buying yeezy&apos;s&quot;
                  </p>
                </div>
              </div>
            </div>
            
            {/* Statistic 3 */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl font-semibold text-black">66%</span>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">Of respondents wish someone could just buy them the shoe and they&apos;ll pay a fee for it.</h3>
                  <p className="text-gray-600">
                    Many people who can afford to pay $200+ for shoes are working and these shoes get released while they&apos;re away from their computers or phones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Sketches and Ideas Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-6xl font-bold text-white leading-tight">
                Sketches<br />
                <span className="text-gray-400">and ideas</span>
              </h2>
            </div>
            
            {/* Right Column - Description */}
            <div>
              <p className="text-lg text-white leading-relaxed">
                I ideated on potential solutions and user flows. I provided some HiFi screenshots to showcase the user flow for the desktop version.
              </p>
            </div>
          </div>
          
          {/* Sketches Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Sketch 1 - Large sneaker image */}
            <div className="lg:row-span-2">
              <div className="h-96 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Sneaker Sketch</span>
              </div>
            </div>
            
            {/* Sketch 2 - Sign up form */}
            <div>
              <div className="h-44 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Sign Up Form</span>
              </div>
            </div>
            
            {/* Sketch 3 - Blurred wireframe */}
            <div>
              <div className="h-44 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Wireframe</span>
              </div>
            </div>
            
            {/* Sketch 4 - Product grid */}
            <div>
              <div className="h-44 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Product Grid</span>
              </div>
            </div>
            
            {/* Sketch 5 - Numbered wireframes */}
            <div className="lg:row-span-2">
              <div className="h-96 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Flow Wireframes</span>
              </div>
            </div>
            
            {/* Additional sketches to fill the grid */}
            <div>
              <div className="h-44 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">Sketch Detail</span>
              </div>
            </div>
            
            <div>
              <div className="h-44 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">UI Concept</span>
              </div>
            </div>
            
            <div>
              <div className="h-44 bg-gray-600 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-sm">User Flow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Usability Testing and Findings Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-6xl font-bold text-black leading-tight">
                Usability testing and<br />
                findings
              </h2>
            </div>
            
            {/* Right Column - Description */}
            <div>
              <p className="text-lg text-gray-600 leading-relaxed">
                I conducted a small usability test with 4 individuals. I was looking to test clarity, completion and comprehension of the different features.
              </p>
            </div>
          </div>
          
          {/* Testing Interface Mockups */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Mockup - Before */}
            <div>
              <div className="w-full h-96 bg-gray-400 rounded-3xl flex items-center justify-center mb-8">
                <span className="text-gray-600 text-sm">Before Interface</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">Before</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The arrows next to &quot;View All products&quot; was confusing to users. Users would click the arrows thinking the next page would load.
                </p>
              </div>
            </div>
            
            {/* Right Mockup - After */}
            <div>
              <div className="w-full h-96 bg-gray-400 rounded-3xl flex items-center justify-center mb-8">
                <span className="text-gray-600 text-sm">After Interface</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">After</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Looking at the old website, I decided to take away the icons and have it highlighted. The click-through rate on our shop page increased by <span className="bg-yellow-200 px-2 py-1 rounded">100%!</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Second Row - Testing Interface Mockups */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
            {/* Left Mockup - Before */}
            <div>
              <div className="w-full h-96 bg-gray-400 rounded-3xl flex items-center justify-center mb-8">
                <span className="text-gray-600 text-sm">Before Interface</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">Before</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Users found it difficult to navigate and understand the interface layout. The previous design lacked clear visual hierarchy.
                </p>
              </div>
            </div>
            
            {/* Right Mockup - After */}
            <div>
              <div className="w-full h-96 bg-gray-400 rounded-3xl flex items-center justify-center mb-8">
                <span className="text-gray-600 text-sm">After Interface</span>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-black">After</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  The redesigned interface improved user comprehension and navigation. User satisfaction scores increased significantly with the new layout.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Building a Brand Identity Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Title */}
            <div>
              <h2 className="text-6xl font-bold text-white leading-tight">
                Building a<br />
                <span className="text-gray-400">brand identity</span>
              </h2>
            </div>

            {/* Right Column - Description */}
            <div className="space-y-6">
              <p className="text-lg text-white leading-relaxed">
                To support the design, I created a brand guideline kit. It includes tone of voice, logos, colors, fonts, icons, images, and product vision.
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
        <div className="max-w-7xl mx-auto px-8">
          <div className="space-y-12">
            <div>
              <h3 className="text-4xl font-bold text-black mb-8">Building a new logo</h3>
              <p className="text-lg text-gray-700 mb-16 max-w-2xl ml-auto">
                To give the design a sense of regality, tradition, and a touch of modernity, I created a new logo.
              </p>
            </div>

            {/* Logo Comparison - Old and New side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              {/* Old Logo */}
              <div className="text-left">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-black mb-2">LOGOS</h4>
                  <p className="text-gray-600 text-sm">OLD</p>
                </div>
                <div className="w-full h-64 bg-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Old Logo</span>
                </div>
              </div>

              {/* New Logo */}
              <div className="text-left">
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-black mb-2">LOGOS</h4>
                  <p className="text-gray-600 text-sm">NEW</p>
                </div>
                <div className="w-full h-64 bg-gray-600 rounded-lg flex items-center justify-center">
                  <span className="text-gray-500 text-sm">New Logo</span>
                </div>
              </div>
            </div>

            {/* Wide Gray Box Below */}
            <div className="w-full h-96 bg-gray-600 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-sm">Brand Guidelines</span>
            </div>
          </div>
        </div>
      </div>

      {/* Design System Section */}
      <div className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-6xl font-bold text-white leading-tight">
                A Robust<br />
                <span className="text-gray-400">Design System</span>
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-lg text-white leading-relaxed">
                I created a comprehensive design system that goes beyond what made it into the final design. Everything follows WCAG AA accessibility guidelines so the experience is clear and inclusive even when the visuals are simple.
              </p>
              <p className="text-lg text-gray-400 italic">
                I will be updating this soon with colors, typefaces, buttons, and text fields.
              </p>
            </div>
          </div>

          <div className="w-full bg-white rounded-3xl shadow-2xl p-12 flex items-center justify-center">
            <span className="text-gray-500 text-sm">Design System Preview</span>
          </div>
        </div>
      </div>

      {/* Final Outcome Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
            <div>
              <h2 className="text-5xl font-bold text-black">Final Outcome</h2>
            </div>
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                I developed a website that resulted in a remarkable 90% increase in sales. Additionally, it successfully enhanced user retention and significantly reduced abandoned carts by over 95%.
              </p>
            </div>
          </div>

          <div className="w-full bg-gray-300 rounded-[40px] h-[32rem] flex items-center justify-center">
            <span className="text-gray-500 text-sm">Final Outcome Mockup</span>
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full px-8 sm:px-16 py-8 bg-white">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 text-sm">made by cornelious</span>
          <div className="flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Figma</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">Twitter</a>
            <a href="#" className="text-gray-600 hover:text-black transition-colors text-sm">LinkedIn</a>
          </div>
          <span className="text-gray-600 text-sm">©2025</span>
        </div>
      </footer>
    </div>
  );
}
