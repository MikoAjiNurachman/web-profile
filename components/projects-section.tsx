"use client"

import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
}
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const projects = [
  {
    title: "FMCG Microservices Platform",
    description:
      "High-throughput microservices architecture for the FMCG industry. Real-time inventory with automated supply-chain triggers via Go + RabbitMQ.",
    technologies: ["Go", "Kubernetes", "Redis", "RabbitMQ", "PostgreSQL"],
  },
  {
    title: "Enterprise Banking Middleware",
    description:
      "Critical integration layer connecting web portals to legacy IBM core systems. Specialized in ISO8583 message parsing and high-security TCP/IP communication.",
    technologies: ["Go", "IBM MQ", "ACE", "Docker", "TCP/IP"],
  },
  {
    title: "Fraud Detection Engine",
    description:
      "Real-time transaction filtering with Elasticsearch for rapid pattern matching and threat detection across financial transactions.",
    technologies: ["Go", "Elasticsearch", "Redis", "Docker"],
  },
  {
    title: "FinTech Dashboard",
    description:
      "Interactive real-time monitoring dashboard with WebSocket integration for tracking financial health and system metrics.",
    technologies: ["React", "TypeScript", "Recharts", "Tailwind"],
  },
]

// Apple light tile — project tiles in a 2-column utility grid. Most of the
// work is closed-source / private enterprise, so we surface the system + the
// stack without a Source link.
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="tile-light relative w-full py-20 md:py-28 px-6"
    >
      <motion.div
        className="max-w-[1180px] mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <motion.div variants={fadeUp} className="mb-14 md:mb-20 max-w-[720px]">
          <h2 className="type-display-lg text-[var(--apple-ink)] mb-5">
            Selected engineering works.
          </h2>
          <p className="type-lead-airy text-[var(--apple-ink-muted-80)]">
            Systems architecture, middleware integration, and frontend experiences.
            Most are private enterprise. What&apos;s listed is the role and the stack.
          </p>
        </motion.div>

        {/* Single-column list rows, hairline dividers: a different layout
            family from the skills card grid above. */}
        <motion.div variants={stagger} className="divide-y divide-[var(--apple-hairline)] border-y border-[var(--apple-hairline)]">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              variants={fadeUp}
              className="py-8 md:py-12 grid md:grid-cols-[1fr_1.5fr] gap-5 md:gap-12 items-start"
            >
              <div>
                <h3 className="type-display-md text-[var(--apple-ink)] mb-4">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="type-caption text-[var(--apple-ink-muted-80)] bg-[var(--apple-parchment)] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="type-body-apple text-[var(--apple-ink-muted-80)] mb-4">
                  {project.description}
                </p>
                <p className="type-caption text-[var(--apple-ink-muted-48)]">
                  Private enterprise, closed source
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
