"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

function ProjectCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* First Draft relaunch */}
      <Link href="/identity-research-labs">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
        >
        <div className="bg-gradient-to-br from-purple-200 to-purple-300 h-64 flex items-center justify-center">
          <div className="bg-gray-200 w-80 h-48 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-sm">First Draft Interface Image</span>
          </div>
        </div>
        <div className="bg-white p-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-black">Identity Research Labs</h3>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">SHIPPED ↗</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Redesigning the underlying design system, creating web and mobile wireframing kits and supporting redesigning the UI as part of Figma&apos;s post-config relaunch of First Draft.
          </p>
          <div className="flex items-center justify-between text-gray-500">
            <span className="font-medium">Figma</span>
            <span>2025</span>
          </div>
        </div>
        </motion.div>
      </Link>

      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="rounded-3xl overflow-hidden"
      >
        <div className="bg-gradient-to-br from-green-600 to-green-700 h-64 flex items-center justify-center">
          <div className="bg-gray-200 w-80 h-48 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-sm">Notification Interface Image</span>
          </div>
        </div>
        <div className="bg-white p-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-black">PARC</h3>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">SHIPPED ↗</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Improving the information architecture and parseability of Figma&apos;s notification feed with a visual redesign. This includes a scalable and robust system to support future notifications.
          </p>
          <div className="flex items-center justify-between text-gray-500">
            <span className="font-medium">Figma</span>
            <span>2025</span>
          </div>
        </div>
      </motion.div>

      {/* ChromeOS PWA */}
      <Link href="/sneaker-access">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
        >
        <div className="bg-gradient-to-br from-yellow-400 to-orange-400 h-64 flex items-center justify-center">
          <div className="bg-gray-200 w-80 h-48 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-sm">ChromeOS PWA Interface Image</span>
          </div>
        </div>
        <div className="bg-white p-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-black">Sneaker Access</h3>
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">SHIPPED ↗</span>
          </div>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Adding progressive web app (PWA) support for downloading Figma on Chromebooks and ChromeOS. Announced and presented during the Google I/O 2024 Chrome keynote.
          </p>
          <div className="flex items-center justify-between text-gray-500">
            <span className="font-medium">Figma</span>
            <span>2019</span>
          </div>
        </div>
      </motion.div>
      </Link>
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
          <a href="#home" className="text-black hover:text-gray-600 transition-colors">home</a>
          <a href="#me" className="text-black hover:text-gray-600 transition-colors">me</a>
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