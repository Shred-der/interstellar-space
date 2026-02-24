import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useVelocity, useSpring, useMotionValue } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Starfield from './components/Starfield'
import Mission from './components/Mission'
import Data from './components/Data'
import Chronicles from './components/Chronicles'

const NavDot = ({ id }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsActive(true);
                else setIsActive(false);
            },
            { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" }
        );
        const el = document.getElementById(id);
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, [id]);

    return (
        <motion.a
            href={`#${id}`}
            animate={{
                height: isActive ? 40 : 16,
                backgroundColor: isActive ? "#00f2ff" : "rgba(255, 255, 255, 0.2)"
            }}
            className="w-1.5 rounded-full transition-colors hover:bg-white/40 cursor-pointer relative group"
        >
            {isActive && (
                <motion.div
                    layoutId="glow"
                    className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.8)]"
                />
            )}
            <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-black/80 px-3 py-1.5 rounded-lg text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none uppercase tracking-[0.2em] border border-white/10 whitespace-nowrap">
                {id}
            </span>
        </motion.a>
    );
};

function App() {
    const [isLoaded, setIsLoaded] = useState(false)
    const { scrollYProgress, scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY)
    const videoRef = React.useRef(null)

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

    // Video playback settings: using native browser looping for better performance
    // "Entering the Black Hole" scroll effects
    const rawBgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.0, 1.8, 3.5]);
    const bgScale = useSpring(rawBgScale, { damping: 40, stiffness: 400 });

    const bgOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8, 1], [0.8, 0.6, 0.4, 0.2, 0.1]);

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
                className="fixed inset-0 z-[100] bg-black pointer-events-none flex items-center justify-center px-6 text-center font-bold tracking-[0.6em] md:tracking-[1em] text-[10px] md:text-xs uppercase"
            >
                Initiating Crossing...
            </motion.div>

            {/* Dynamic Background */}
            <div className="fixed -inset-[10vh] z-0 overflow-hidden bg-black pointer-events-none">
                <motion.div
                    style={{
                        scale: bgScale,
                        willChange: "transform"
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="w-full h-full flex items-center justify-center"
                >
                    <motion.video
                        ref={videoRef}
                        style={{
                            opacity: bgOpacity
                        }}
                        src="/background-video.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        className="w-full h-full object-cover"
                    />
                    {/* Dark Overlay for depth and quality enhancement */}
                    <div className="absolute inset-0 bg-black/65 z-10" />
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

            {/* Interactive vertical slider indicator */}
            <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 z-20">
                {['home', 'mission', 'data', 'chronicles'].map((id) => (
                    <NavDot key={id} id={id} />
                ))}
            </div>
        </div>
    )
}

export default App
