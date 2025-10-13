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
      <nav className="sticky top-0 z-50 flex w-full items-center justify-between bg-gray-50/80 px-8 py-6 backdrop-blur-md sm:px-16">
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
              <Link
                key={label}
                href={href}
                className={`${baseClasses}${activeClasses}`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Header Image Section */}
      <div className="relative mx-auto mt-8 h-96 max-w-7xl overflow-hidden rounded-3xl bg-gray-400 px-8">
        {/* Gray placeholder background */}
        <div className="absolute inset-0 rounded-3xl bg-gray-400">
          {/* Image placeholder - replace with actual image when available */}
        </div>

        {/* Title Overlay */}
        <div className="absolute top-1/2 left-12 -translate-y-1/2 transform text-white">
          <h1 className="text-6xl leading-tight font-light">
            <span className="italic">Identity</span>
            <br />
            Research Labs
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-8 py-16 sm:px-16">
        {/* Overview */}
        <section className="mb-20 grid gap-12 lg:grid-cols-[2fr,1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-black">
              Project Overview
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-700">
              Identity Research Labs explores how people manage, protect, and
              express their identities across emerging digital ecosystems. Use
              this template to articulate the full UX case study&mdash;from
              framing the problem through validated outcomes. Swap the
              placeholder copy with the specifics of your project narrative.
            </p>
            <ul className="mt-8 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-900" />
                <span>
                  Start with the context, challenge, and opportunity that set
                  the stage for the work.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-900" />
                <span>
                  Show your process end-to-end: discovery, synthesis, design,
                  validation, and launch.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2.5 w-2.5 rounded-full bg-gray-900" />
                <span>
                  Highlight measurable outcomes, learnings, and how you evolved
                  the solution after release.
                </span>
              </li>
            </ul>
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
                Role
              </p>
              <p className="mt-3 text-lg font-medium text-black">
                Product Designer &amp; Research Lead
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Add the hats you wore: research strategy, interaction design,
                facilitation, etc.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
                Team
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li>Product Manager</li>
                <li>2 Engineers</li>
                <li>Brand Strategist</li>
                <li>Compliance Partner</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
                Timeline
              </p>
              <p className="mt-3 text-lg font-medium text-black">10 weeks</p>
              <p className="mt-2 text-sm text-gray-600">
                Break down the phases (discovery, synthesis, build) to show how
                you paced the work.
              </p>
            </div>
          </aside>
        </section>

        {/* Challenge & Opportunity */}
        <section className="mb-20 grid gap-10 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              Challenge
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-black">
              Fragmented identity tooling created friction and trust issues
            </h3>
            <p className="mt-4 text-gray-700">
              Summarize the business goal and user pain. What was happening in
              the ecosystem? Why was the status quo no longer acceptable? Anchor
              your narrative in evidence.
            </p>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              Opportunity
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-black">
              Offer guidance, transparency, and control for identity journeys
            </h3>
            <p className="mt-4 text-gray-700">
              Define what success looked like for the business and for people
              using the product. Clarify constraints, edge cases, and strategic
              bets made along the way.
            </p>
          </div>
        </section>

        {/* Objectives */}
        <section className="mb-20">
          <div className="rounded-3xl bg-gray-50 p-10">
            <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              Objectives &amp; Success Metrics
            </p>
            <div className="mt-8 grid gap-10 lg:grid-cols-3">
              <div>
                <h4 className="text-xl font-semibold text-black">
                  User Outcomes
                </h4>
                <ul className="mt-4 space-y-3 text-gray-700">
                  <li>Reduce identity verification drop-off</li>
                  <li>Surface trust signals at key decision points</li>
                  <li>Clarify what happens to user data at every step</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black">
                  Business Outcomes
                </h4>
                <ul className="mt-4 space-y-3 text-gray-700">
                  <li>Shorten onboarding from X to Y minutes</li>
                  <li>Improve conversion for target segments</li>
                  <li>Unlock compliance readiness across regions</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-black">
                  Signals of Success
                </h4>
                <ul className="mt-4 space-y-3 text-gray-700">
                  <li>Task success scores in moderated studies</li>
                  <li>Quant feedback from pilot cohorts</li>
                  <li>NPS / qualitative sentiment around trust</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Responsibilities */}
        <section className="mb-20 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-8">
            <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              My Responsibilities
            </p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li>Led discovery planning and stakeholder interviews</li>
              <li>
                Defined research protocol, synthesized insights, and aligned
                teams
              </li>
              <li>
                Shaped IA, interaction patterns, and accessibility requirements
              </li>
              <li>
                Partnered with engineers to scope V1 vs. north-star moments
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-8">
            <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              Partners
            </p>
            <div className="mt-6 space-y-6 text-gray-700">
              <div>
                <p className="text-sm font-semibold text-black">Product</p>
                <p className="mt-2 text-sm text-gray-600">
                  PM to keep focus on launch scope and regulatory milestones.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-black">Engineering</p>
                <p className="mt-2 text-sm text-gray-600">
                  2 full-stack engineers for feasibility checks and prototype
                  builds.
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-black">
                  Legal &amp; Compliance
                </p>
                <p className="mt-2 text-sm text-gray-600">
                  Ensured flows satisfied privacy requirements across markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Approach */}
        <section className="mb-20">
          <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
            Research Approach
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-3">
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <h4 className="text-lg font-semibold text-black">Discovery</h4>
              <p className="mt-3 text-sm text-gray-600">
                Outline foundational interviews, competitive analysis, and desk
                research you ran to benchmark current confidence and gaps.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <h4 className="text-lg font-semibold text-black">Synthesis</h4>
              <p className="mt-3 text-sm text-gray-600">
                Capture affinity mapping, frameworks, or opportunity maps that
                unlocked direction.
              </p>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8">
              <h4 className="text-lg font-semibold text-black">Validation</h4>
              <p className="mt-3 text-sm text-gray-600">
                Detail evaluative research rounds&mdash;usability testing,
                surveys, or analytics readouts used to shape the final solution.
              </p>
            </div>
          </div>
          <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-500">
            Add a research timeline visual or Miro board snapshot here.
          </div>
        </section>

        {/* Insights */}
        <section className="mb-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
                Key Insights
              </p>
              <h3 className="mt-2 text-3xl font-semibold text-black">
                What we learned about people managing their identities
              </h3>
            </div>
            <p className="max-w-xl text-sm text-gray-600">
              Translate raw research into crisp insight statements and tie each
              one back to the product moves it inspired. Include quotes or stats
              where available.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Trust is earned with transparency",
                description:
                  "Participants wanted a narrative about why data is needed, not just a checklist.",
              },
              {
                title: "Control reduces drop-off",
                description:
                  "Giving users options for identity proofs let them choose the safest route.",
              },
              {
                title: "Guidance combats anxiety",
                description:
                  "Microcopy, progress markers, and human reassurance cues eased uncertainty.",
              },
            ].map(({ title, description }) => (
              <div
                key={title}
                className="flex h-full flex-col justify-between rounded-3xl border border-gray-200 bg-white p-8"
              >
                <div>
                  <h4 className="text-lg font-semibold text-black">{title}</h4>
                  <p className="mt-3 text-sm text-gray-600">{description}</p>
                </div>
                <div className="mt-6 rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-4 text-xs tracking-[0.2em] text-gray-400 uppercase">
                  Add quote or supporting evidence
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Personas */}
        <section className="mb-20">
          <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
            Personas
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {["Verification Novice", "Cross-Border Professional"].map(
              (persona) => (
                <div
                  key={persona}
                  className="rounded-3xl border border-gray-200 bg-white p-8"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-500 uppercase">
                      Img
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-black">
                        {persona}
                      </h4>
                      <p className="text-sm text-gray-600">
                        Summarize their goal, behaviors, and identity management
                        mindset.
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 grid gap-4 text-sm text-gray-600 sm:grid-cols-2">
                    <div>
                      <p className="font-semibold text-black">Needs</p>
                      <ul className="mt-2 space-y-1">
                        <li>Reassurance around data safety</li>
                        <li>Clear handoffs between systems</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-black">Pain Points</p>
                      <ul className="mt-2 space-y-1">
                        <li>Confusing terminology</li>
                        <li>Inconsistent verification steps</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </section>

        {/* Journey Map */}
        <section className="mb-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
                Journey Mapping
              </p>
              <h3 className="mt-2 text-3xl font-semibold text-black">
                Visualizing the end-to-end identity journey
              </h3>
            </div>
            <p className="max-w-xl text-sm text-gray-600">
              Document the moments that matter: triggers, actions, questions,
              emotions, and backstage processes. Show how insights fed into
              opportunity areas.
            </p>
          </div>
          <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-16 text-center text-gray-500">
            Replace with journey map artifact (Miro, FigJam, etc.)
          </div>
        </section>

        {/* Information Architecture */}
        <section className="mb-20 grid gap-12 lg:grid-cols-[1.2fr,1fr]">
          <div>
            <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              Information Architecture
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-black">
              Structuring the experience
            </h3>
            <p className="mt-4 text-gray-700">
              Explain how you translated insights into flows, states, and
              content strategy. Annotate decisions: Why did you prioritize
              certain pathways? How did regulations shape the architecture?
            </p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>
                Map the happy path along with contingencies and edge cases.
              </li>
              <li>
                Show hierarchy decisions (dashboards, step-by-step, modular
                cards).
              </li>
              <li>
                Highlight accessibility or localization considerations made
                early.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center text-gray-500">
            Drop in sitemap / IA diagram image
          </div>
        </section>

        {/* Design Exploration */}
        <section className="mb-20">
          <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
            Design Exploration
          </p>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {[
              {
                label: "Low-Fidelity Flows",
                description:
                  "Demonstrate how you iterated quickly and partnered with stakeholders to converge.",
              },
              {
                label: "Mid-Fidelity Prototypes",
                description:
                  "Show how you started addressing edge cases, states, and compliance guardrails.",
              },
              {
                label: "Visual Language System",
                description:
                  "Document the components, typography, and motion cues that bring confidence.",
              },
            ].map(({ label, description }) => (
              <div key={label} className="flex flex-col gap-6">
                <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-100 p-12 text-center text-gray-500">
                  {label} &mdash; insert screens
                </div>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Usability Testing */}
        <section className="mb-20 rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">
          <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
            Usability Testing
          </p>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-xl font-semibold text-black">
                What we tested
              </h4>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>Identity verification flow across desktop and mobile</li>
                <li>Messaging and reassurance content comprehension</li>
                <li>Recovery and escalation paths in failure scenarios</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-black">
                What we learned
              </h4>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>Clarified threshold for when assistance is required</li>
                <li>
                  Introduced progressive disclosure for sensitive data requests
                </li>
                <li>Added contextual help and connections to support team</li>
              </ul>
            </div>
          </div>
          <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-12 text-center text-gray-500">
            Embed testing highlight reel or feedback quotes
          </div>
        </section>

        {/* Final Solution */}
        <section className="mb-20">
          <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
            Final Solution
          </p>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr,1fr]">
            <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-100 p-16 text-center text-gray-500">
              Showcase final UI screens or interactive prototype
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <h4 className="text-xl font-semibold text-black">
                Measured Impact
              </h4>
              <ul className="mt-4 space-y-3 text-gray-700">
                <li>Onboarding completion rate increased from X% to Y%</li>
                <li>User trust sentiment moved from baseline to target</li>
                <li>Support tickets around identity declined by Z%</li>
              </ul>
              <p className="mt-6 text-sm text-gray-600">
                Replace with concrete metrics, anecdotes, or partner
                testimonials. Tie impact back to the objectives defined earlier.
              </p>
            </div>
          </div>
        </section>

        {/* Learnings */}
        <section className="mb-20 grid gap-12 lg:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-10">
            <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              What I Learned
            </p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li>Share a moment where research reframed the direction.</li>
              <li>Document collaboration wins or trade-offs you negotiated.</li>
              <li>
                Reflect on how this project influences your design practice.
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-gray-200 bg-white p-10">
            <p className="text-sm tracking-[0.3em] text-gray-500 uppercase">
              What&apos;s Next
            </p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li>Outline backlog ideas or phased roadmap extensions.</li>
              <li>Discuss open questions for future research.</li>
              <li>Flag metrics you&apos;re monitoring post-launch.</li>
            </ul>
          </div>
        </section>

        {/* Call to Action */}
        <section className="rounded-3xl bg-black px-10 py-12 text-white">
          <h3 className="text-3xl font-semibold">
            Let&apos;s build identity experiences people trust.
          </h3>
          <p className="mt-4 max-w-3xl text-gray-200">
            Invite readers to reach out for a walkthrough, deeper insights, or
            collaboration. Link out to supporting assets like research plans,
            prototypes, or press coverage.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="mailto:hello@identityresearchlabs.com"
              className="nav-pill bg-white text-black hover:bg-gray-200"
            >
              Contact
            </Link>
            <Link
              href="#"
              className="nav-pill border border-white text-white hover:bg-white/10"
            >
              View Prototype
            </Link>
          </div>
        </section>
      </main>

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
