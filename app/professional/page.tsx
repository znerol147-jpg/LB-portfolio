'use client'
import { motion, Variants } from 'framer-motion'
import { Server, Layout, Database, ExternalLink, Mail, Code2, Briefcase, GraduationCap } from 'lucide-react'


export default function ProfessionalPortfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  }

  const skills = [
    { title: "Frontend", stack: ["Next.js", "React", "Tailwind CSS", "Bootstrap"], color: "bg-blue-50 text-blue-700 border-blue-200" },
    { title: "Backend", stack: ["Node.js", "Express", "PHP", "MySQL"], color: "bg-green-50 text-green-700 border-green-200" },
    { title: "Web3 & AI", stack: ["Ethereum", "Solana (Rust)", "TON (Tact)", "AI Integration"], color: "bg-purple-50 text-purple-700 border-purple-200" },
    { title: "DevOps", stack: ["DigitalOcean", "Apache", "Vercel", "Cloudflare"], color: "bg-orange-50 text-orange-700 border-orange-200" }
  ]

  const projects = [
    {
      title: "HFGOSYS Poultry Management",
      tech: ["Next.js", "AI Receipt Scanning", "DigitalOcean", "Cloudflare"],
      description: "Developed and deployed a comprehensive poultry inventory and sales management system. Features an AI-powered receipt scanner for automated expense and data entry, alongside modules for tracking sales, inventory, and customer ledger details. Hosted on a DigitalOcean droplet with network accessibility secured via Cloudflare.",
      link: "https://hfgo.site/" // Replace with actual HFGOSYS URL
    },
    {
      title: "PC Project Inventory & POS",
      tech: ["Next.js", "DigitalOcean", "Apache", "MySQL"],
      description: "Developed a custom Point of Sale and inventory management system for a local computer hardware store. Engineered global serial tracking and purchase order management. Managed the Apache web server and secured the application using Certbot SSL.",
      link: "https://pcpcomputers.shop/" // Replace with actual PC Project URL
    },
    {
      title: "Web3 Ecosystem Development",
      tech: ["Ethereum", "Rust (Anchor)", "Tact", "React"],
      description: "Developed custom whitelist transfer hook logic using Rust on Solana for $JAGGER, and authored Tact smart contracts for Jetton token deployment on TON. Designed interactive tokenomics landing pages for projects across Ethereum, Solana, and TON.",
      link: "https://www.capybara-ai.site/" // Replace with actual Web3 portfolio/project URL
    },
    {
      title: "Classroom Network Checker",
      tech: ["UI/UX Sprint", "Agile Documentation"],
      description: "Collaborated on an MVP UX upgrade sprint for a campus Wi-Fi monitoring application. Mapped user flows and documented group screen responsibilities for the IT business solutions course.",
      link: "#" // Replace with actual repo or project URL
    }
  ]

  return (
    <motion.div 
      className="max-w-4xl mx-auto py-16 px-6 sm:px-8 font-sans text-gray-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.header variants={itemVariants} className="mb-16">
        <h1 className="text-5xl font-black tracking-tight mb-4">Lorenz Cloud G. Balacuit</h1>
        <div className="flex flex-wrap items-center gap-4 text-lg text-gray-600 mb-6">
          <span className="font-semibold text-blue-600">Senior BSIT Student</span>
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
          <span>Full-Stack & Web3 Developer</span>
          <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
          <span>Cagayan de Oro, PH</span>
        </div>
        <div className="flex gap-4">
          <a href="mailto:your-email@example.com" className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
            <Mail className="w-4 h-4" /> Contact Me
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-900 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            GitHub
          </a>
        </div>
      </motion.header>

      {/* Summary */}
      <motion.section variants={itemVariants} className="mb-16">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-4 border-b pb-2">
          <Layout className="w-5 h-5 text-blue-600" /> Professional Summary
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Information Technology student and active full-stack web developer specializing in Next.js, React, Node.js, and Express. 
          Experienced in architecting comprehensive business dashboards, custom Point of Sale systems with global serial tracking, 
          and executing Web3 frontend development and smart contract deployment across the Ethereum, TON, and Solana ecosystems.
        </p>
      </motion.section>

      {/* Skills Layout */}
      <motion.section variants={itemVariants} className="mb-16">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-6 border-b pb-2">
          <Code2 className="w-5 h-5 text-blue-600" /> Technical Arsenal
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 rounded-xl border border-gray-100 bg-white shadow-sm flex flex-col justify-center">
              <h3 className="font-semibold text-gray-900 mb-3">{skill.title}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.stack.map((item, i) => (
                  <span key={i} className={`px-2.5 py-1 text-xs font-semibold rounded-md border ${skill.color}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Projects Timeline Layout */}
      <motion.section variants={itemVariants} className="mb-16">
        <h2 className="text-xl font-bold flex items-center gap-2 mb-8 border-b pb-2">
          <Briefcase className="w-5 h-5 text-blue-600" /> Key Projects & Deployments
        </h2>
        <div className="space-y-8 pl-2 md:pl-0">
          {projects.map((project, index) => (
            <div key={index} className="relative pl-6 md:pl-0">
              {/* Timeline Line (Mobile) */}
              <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-gray-200 md:hidden" />
              {/* Timeline Dot (Mobile) */}
              <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-blue-600 md:hidden" />
              
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow md:border-l-4 md:border-l-blue-600">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Changed from <button> to <a> */}
                  <a href={project.link} target="_blank" rel="noreferrer" className="hidden md:flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                    View Live <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                {/* Changed from <button> to <a> */}
                <a href={project.link} target="_blank" rel="noreferrer" className="mt-4 flex md:hidden items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors">
                  View Live <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education */}
      <motion.section variants={itemVariants}>
        <h2 className="text-xl font-bold flex items-center gap-2 mb-6 border-b pb-2">
          <GraduationCap className="w-5 h-5 text-blue-600" /> Education
        </h2>
        <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <div className="p-3 bg-white rounded-lg shadow-sm">
            <Server className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">Bachelor of Science in Information Technology</h3>
            <p className="text-gray-700 mt-1">PHINMA Cagayan de Oro College</p>
            <p className="text-blue-600 text-sm font-semibold mt-2">Senior Year</p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}