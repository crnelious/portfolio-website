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
        <motion.article
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex cursor-pointer flex-col gap-6"
        >
          <motion.div
            whileHover={{ y: -16 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
            className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gray-200"
          >
            <span className="text-gray-500 text-sm">First Draft Interface Image</span>
          </motion.div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-black sm:text-3xl">Identity Research Labs</h3>
            <p className="text-lg leading-relaxed text-gray-600">
              Redesigning the underlying design system, creating web and mobile wireframing kits and supporting redesigning the UI as part of Figma&apos;s post-config relaunch of First Draft.
            </p>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Figma · Shipped 2025</h4>
          </div>
        </motion.article>
      </Link>

      {/* Notifications */}
      <motion.article
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="flex flex-col gap-6"
      >
        <motion.div
          whileHover={{ y: -16 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
          className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gray-200"
        >
          <span className="text-gray-500 text-sm">Notification Interface Image</span>
        </motion.div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-black sm:text-3xl">PARC</h3>
          <p className="text-lg leading-relaxed text-gray-600">
            Improving the information architecture and parseability of Figma&apos;s notification feed with a visual redesign. This includes a scalable and robust system to support future notifications.
          </p>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Figma · Shipped 2025</h4>
        </div>
      </motion.article>

      {/* Sneaker Access */}
      <Link href="/sneaker-access">
        <motion.article
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="flex cursor-pointer flex-col gap-6"
        >
          <motion.div
            whileHover={{ y: -16 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
            className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-3xl bg-gray-200"
          >
            <span className="text-gray-500 text-sm">Sneaker Access</span>
          </motion.div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-black sm:text-3xl">Sneaker Access</h3>
            <p className="text-lg leading-relaxed text-gray-600">
                A mobile app concept that allows users to discover and access exclusive sneaker releases through a seamless and engaging user experience.
            </p>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-500">Figma · Shipped 2019</h4>
          </div>
        </motion.article>
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
