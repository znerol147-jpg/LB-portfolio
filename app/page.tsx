'use client'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'
import { Code2, Sparkles, ArrowRight, Terminal } from 'lucide-react'

export default function Home() {
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  }

  const cardVariants: any = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 90, damping: 12 }
    }
  }

  return (
    <motion.div 
      className="min-h-[85vh] flex flex-col items-center justify-center py-12 px-4 sm:px-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Section */}
      <motion.div variants={cardVariants} className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-800 text-sm font-bold mb-6">
          <Terminal className="w-4 h-4" />
          System Initialization
        </div>
        <h1 className="text-6xl md:text-7xl font-black tracking-tight text-gray-900 mb-6">
          Lorenz Cloud G. Balacuit
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
          Information Technology student bridging the gap between robust system architecture and immersive digital experiences. Select a pathway below.
        </p>
      </motion.div>

      {/* Split Navigation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        
        {/* Professional Pathway */}
        <Link href="/professional">
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative h-full flex flex-col bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150" />
            
            <div className="relative z-10 flex-1">
              <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Code2 className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Professional Portfolio</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Explore my full-stack Next.js business dashboards, custom Point of Sale systems, and Web3 smart contract deployments across the Solana and TON ecosystems.
              </p>
            </div>
            
            <div className="relative z-10 flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform duration-300">
              View Qualifications <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </motion.div>
        </Link>

        {/* Creative Pathway */}
        <Link href="/creative">
          <motion.div 
            variants={cardVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative h-full flex flex-col bg-gray-950 p-8 rounded-3xl border-2 border-gray-900 shadow-sm hover:shadow-2xl hover:border-purple-500 transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-900/30 rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-150" />
            
            <div className="relative z-10 flex-1">
              <div className="w-14 h-14 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
                <Sparkles className="w-7 h-7" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Creative Gallery</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Dive into my visual projects, including 3D Web3 token assets modeled in Blender, custom Unity game environments, and pure CSS animated artwork.
              </p>
            </div>
            
            <div className="relative z-10 flex items-center text-purple-400 font-bold group-hover:translate-x-2 transition-transform duration-300">
              View Artworks <ArrowRight className="ml-2 w-5 h-5" />
            </div>
          </motion.div>
        </Link>

      </div>
    </motion.div>
  )
}