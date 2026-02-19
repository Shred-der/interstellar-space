import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useVelocity, useSpring, useMotionValue } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Starfield from './components/Starfield'
import Mission from './components/Mission'
import Data from './components/Data'
import Chronicles from './components/Chronicles'

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const { scrollYProgress, scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY)

    // Smooth out the velocity for the "warp" effect
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    })

    // Calculate star speed multiplier based on scroll velocity
    const starSpeed = useTransform(smoothVelocity, [-2000, 0, 2000], [10, 1, 10])


    useEffect(() => {
        // Cinematic intro delay
        const timer = setTimeout(() => setIsLoaded(true), 500)
        return () => clearTimeout(timer)
    }, [])

    // "Entering the Black Hole" scroll effects
    const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.8, 3.5]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.6, 0.4, 0.2, 0.1, 0.05]);
    const bgBlur = useTransform(scrollYProgress, [0, 0.5, 1], [0, 10, 25]);
    const starOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.8, 0.2]);

    return (
        <div
            className="relative w-full bg-[#050505] text-white selection:bg-primary/30 selection:text-white scroll-smooth overflow-x-hidden"
        >
            {/* Cinematic Intro Overlay */}
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isLoaded ? 0 : 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="fixed inset-0 z-[100] bg-black pointer-events-none flex items-center justify-center font-bold tracking-[1em] text-xs uppercase"
            >
                Initiating Crossing...
            </motion.div>

            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0 overflow-hidden">
                <motion.div
                    style={{
                        scale: bgScale,
                        filter: `blur(${bgBlur}px)`,
                        willChange: "transform"
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="w-full h-full"
                >
                    <motion.img
                        style={{ opacity: bgOpacity }}
                        src="/background-image.png"
                        alt="Space Background"
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent pointer-events-none" />

                <motion.div style={{ opacity: starOpacity }}>
                    <Starfield speedMult={starSpeed} />
                </motion.div>

                {/* Cinematic "Tunnel" Light effect as you scroll deeper */}
                <motion.div
                    style={{
                        opacity: useTransform(scrollYProgress, [0.5, 1], [0, 0.4]),
                        scale: useTransform(scrollYProgress, [0.5, 1], [0.8, 1.2])
                    }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.1)_0%,transparent_70%)] pointer-events-none"
                />
            </div>

            <Navbar />

            {/* Scroll Sections Container */}
            <div className="relative z-10">
                <section id="home" className="w-full min-h-screen flex items-center max-w-7xl mx-auto px-4 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center w-full py-24 lg:py-20">
                        <div className="lg:col-span-8">
                            <Hero />
                        </div>
                        <div className="lg:col-span-4 w-full">
                            <Sidebar />
                        </div>
                    </div>
                </section>

                <Mission />
                <Data />
                <Chronicles />
            </div>

            {/* Decorative vertical slider indicator */}
            <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 z-20">
                <div className="w-1.5 h-4 bg-white/20 rounded-full transition-all hover:bg-white/40 cursor-pointer" />
                <div className="w-1.5 h-10 bg-primary rounded-full shadow-[0_0_15px_rgba(0,242,255,0.6)]" />
                <div className="w-1.5 h-4 bg-white/20 rounded-full transition-all hover:bg-white/40 cursor-pointer" />
                <div className="w-1.5 h-4 bg-white/20 rounded-full transition-all hover:bg-white/40 cursor-pointer" />
            </div>
        </div>
    )
}

export default App
