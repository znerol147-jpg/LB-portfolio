'use client'
import { motion } from 'framer-motion'
import { Palette, Wand2, Sparkles, Gamepad2, Code2, Rocket } from 'lucide-react'

export default function CreativePortfolio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 10, mass: 0.8 }
    }
  }

  const artworks = [
    {
      title: "The Little Seed",
      category: "Pure CSS Art & Animation",
      tools: "HTML, CSS",
      concept: "An interactive, animated children's storybook film built entirely without JavaScript.",
      color: "from-emerald-400 via-green-500 to-teal-500",
      span: "md:col-span-2 md:row-span-2",
      icon: <Code2 className="w-8 h-8 text-white mb-4" />
    },
    {
      title: "Web3 3D Assets",
      category: "3D Modeling",
      tools: "Blender, Three.js",
      concept: "Interactive spinning coin models designed for meme coin landing pages.",
      color: "from-orange-400 via-amber-500 to-yellow-500",
      span: "md:col-span-1 md:row-span-1",
      icon: <Sparkles className="w-8 h-8 text-white mb-4" />
    },
    {
      title: "AI 2D Environments",
      category: "Game Assets",
      tools: "Pika AI, Photoshop",
      concept: "Immersive background environments and pixel art sprite generation.",
      color: "from-purple-400 via-fuchsia-500 to-pink-500",
      span: "md:col-span-1 md:row-span-1",
      icon: <Wand2 className="w-8 h-8 text-white mb-4" />
    },
    {
      title: "Unity Dragon Encounter",
      category: "2D Game Development",
      tools: "Unity, C#",
      concept: "A top-down 2D action sequence featuring custom player mechanics and enemy AI.",
      color: "from-rose-400 via-red-500 to-orange-500",
      span: "md:col-span-2 md:row-span-1",
      icon: <Gamepad2 className="w-8 h-8 text-white mb-4" />
    }
  ]

  return (
    <motion.div 
      className="relative min-h-screen bg-indigo-950 overflow-hidden py-16 px-6 sm:px-12 font-sans"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Animated Background Orbs for a "Fun" vibe */}
      <motion.div 
        animate={{ y: [0, -20, 0], x: [0, 15, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />
      <motion.div 
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
        className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header section */}
        <motion.header variants={itemVariants} className="text-center mb-16">
          <motion.div 
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-pink-300 text-sm font-bold mb-6 shadow-lg cursor-pointer"
          >
            <Rocket className="w-4 h-4" />
            Welcome to the Sandbox
          </motion.div>
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight mb-6 text-transparent bg-clip-text bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-400 drop-shadow-sm">
            Creative Playground
          </h1>
          <p className="text-lg sm:text-xl text-indigo-100 max-w-2xl mx-auto leading-relaxed font-medium">
            Where code meets color. Exploring pure CSS animation, generative AI environments, and 3D Web3 assets.
          </p>
        </motion.header>

        {/* Fun Bento Box Gallery */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {artworks.map((art, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, translateY: -8, rotate: index % 2 === 0 ? 1 : -1 }}
              className={`group relative flex flex-col justify-end p-8 rounded-3xl overflow-hidden cursor-pointer shadow-xl ${art.span}`}
            >
              {/* Vibrant Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${art.color} transition-transform duration-700 group-hover:scale-110`} />
              
              {/* Playful overlay pattern */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/polka-dots.png')]" />
              
              {/* Glassmorphism Content Box */}
              <div className="relative z-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 transform transition-all duration-300 group-hover:bg-white/20 group-hover:shadow-2xl">
                {art.icon}
                <h3 className="text-2xl font-bold text-white mb-1 shadow-sm">{art.title}</h3>
                <p className="text-white/80 font-bold text-sm mb-3 uppercase tracking-wider">{art.category}</p>
                
                <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100 mt-2">
                  <p className="text-white/90 text-sm leading-relaxed mb-3 font-medium">
                    {art.concept}
                  </p>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-lg text-xs font-bold text-white backdrop-blur-sm border border-white/30">
                    {art.tools}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Playful Process Footer */}
        <motion.section variants={itemVariants} className="mt-20 flex flex-col items-center text-center">
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-10" />
          <h2 className="text-3xl font-black text-white mb-8 flex items-center gap-3">
            <Palette className="w-8 h-8 text-pink-400" />
            How I Build
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {['Ideation', 'AI Prototyping', 'Code & Geometry', 'Interactive Polish'].map((step, i) => (
              <motion.div 
                key={step}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-indigo-900/50 backdrop-blur-sm border border-indigo-500/30 rounded-xl text-indigo-100 font-bold shadow-lg"
              >
                <span className="text-pink-400 mr-2">{i + 1}.</span> {step}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </motion.div>
  )
}