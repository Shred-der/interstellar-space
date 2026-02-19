import React from 'react'
import { Play } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    }

    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start pt-12 md:pt-20 lg:pt-0"
        >
            <motion.div
                variants={itemVariants}
                className="inline-block px-3 py-1 mb-4 md:mb-6 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] text-white/90 glass-effect rounded-full border border-white/20 shadow-xl shadow-black/20"
            >
                Mission Phase 1
            </motion.div>

            <motion.h1
                variants={itemVariants}
                className="text-[clamp(2.5rem,12vw,8.5rem)] font-bold tracking-tighter mb-2 leading-[0.85] break-words md:break-normal golden-shimmer"
            >
                INTERSTELLAR
            </motion.h1>

            <motion.h2
                variants={itemVariants}
                className="text-lg sm:text-2xl md:text-3xl font-light tracking-[0.3em] md:tracking-[0.4em] text-primary mb-6 md:mb-10 uppercase drop-shadow-[0_0_10px_rgba(0,242,255,0.4)]"
            >
                Beyond the Horizon
            </motion.h2>

            <motion.p
                variants={itemVariants}
                className="max-w-xl text-base md:text-lg text-gray-300/90 leading-relaxed mb-8 md:mb-12 font-light"
            >
                The entire crew of the Endurance has embarked on a final mission to find a new home for humanity among the stars. Explore the unknown, witness the impossible.
            </motion.p>

            <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5 w-full sm:w-auto"
            >
                <button className="flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all px-7 md:px-9 py-3.5 md:py-4 rounded-custom font-bold text-white shadow-2xl shadow-primary/30 group teal-gloss border border-white/40 backdrop-blur-sm">
                    <Play size={18} className="fill-current group-hover:scale-110 transition-transform" />
                    Watch Movie
                </button>
                <button className="px-7 md:px-9 py-3.5 md:py-4 rounded-custom font-bold text-white border border-white/20 hover:bg-white/10 transition-all backdrop-blur-sm hover:border-white/40 active:scale-95">
                    Mission Logs
                </button>
            </motion.div>

            <motion.div
                variants={itemVariants}
                className="mt-10 md:mt-16 flex items-center gap-4 md:gap-8 text-[10px] md:text-[11px] text-gray-500 font-bold tracking-widest uppercase"
            >
                <span>Horror / Sci-Fi</span>
                <span className="w-px h-4 bg-white/10"></span>
                <span>16+</span>
                <span className="w-px h-4 bg-white/10"></span>
                <span className="flex items-center gap-2 text-primary/80">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    4.8
                </span>
            </motion.div>
        </motion.section>
    )
}

export default Hero
