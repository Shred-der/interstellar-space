import React from 'react'
import { motion } from 'framer-motion'

const cards = [
    {
        title: 'The Departure',
        subtitle: 'Leaving Earth behind...',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBdsUsKjtlkgKUH27-_lSOIC5aKbWDSRynQvtspcCVcglOsKhey9_jhLurabwm3SenJkgBfrU46qotZlJawaWtZJaO1tF1Qx7IktZfw5P9iizqPvTo0xiYBW8sGQQsKsc2N0kPKDXcmTSYnX9cotoWPSL8qE5cRp-K69rpUZit3OePw3uN4YvxQOoP95lAHvb8aHnhq47sA2jFpxgVBd8w3XPiYFsGp3ewjigIPJGqih5exOtqd3szJrAQh2LbWELHEmQGhAN9USh2N',
        active: false
    },
    {
        title: 'Event Horizon',
        subtitle: 'Nearing the Singularity',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYKSi9fFks-0IzAW6IzjqhzC7Xayvk342Ff9elIMJzwayHzcdn_RtYBD16KF5P6dg7IkkjMAFYoAeSu3zy1tjtd1K6JJgxbr_Ey6JKsBt-Rr-OfgvWDtdpnZr1QAe9mUuh4c6X0RDGBnHx5wCM9OgWVPOQb9bKjhGqJ3Bh_5K0BOcgD6ryMuBYkhta0ZIb2FW0ogQNASO6-NqD8nvRziX38j5pYrETm_0cOwixjRGjbWEBUFEvQsmpxOmAYX89LSbxh6nsSwzba8FY',
        active: true
    },
    {
        title: 'Final Frontier',
        subtitle: 'Scanning for Habitable Worlds',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcc2JBymTIhvgW6oFyL61s6g46X797OxLcTMkAyPihVANMTtBCtQZuTOYN61ezPEs1uqaywp5SSEhmjmE2ENJcDT3SUmSKFiAR4INBeA2FdPWSwaYpivjhhZs8HyyCtceYejQOLKmjDacKGCVY5S6K9xIKDdzE9Piiz4EZtHm12gXR6FqM8X2tcZZb3Sl9wWfpYNhXUkQaf0zOgnOj8rlutUg1HxVpRldsnpVGX5ujD9NyTUY_3AeMFOCY7HYMDtogQU3vgf5z60aw',
        active: false
    }
]

const Sidebar = () => {
    return (
        <motion.aside
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col gap-4 md:gap-6 lg:pl-16 h-full justify-center mt-12 lg:mt-0"
        >
            {cards.map((card, idx) => (
                <motion.div
                    key={card.title}
                    whileHover={{ scale: card.active ? 1.05 : 1.02, x: 5 }}
                    className={`
            group relative flex items-center gap-4 md:gap-5 p-2 md:p-3 rounded-xl md:rounded-2xl cursor-pointer transition-all duration-500
            ${card.active
                            ? 'bg-white/10 ring-2 ring-primary/40 shadow-[0_0_30px_rgba(0,242,255,0.15)]'
                            : 'glass-effect hover:bg-white/10 border-transparent hover:border-white/20'
                        }
          `}
                >
                    <div className="relative w-28 sm:w-36 h-20 sm:h-24 flex-shrink-0 overflow-hidden rounded-lg md:rounded-xl">
                        <img
                            src={card.image}
                            alt={card.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {!card.active && <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />}
                    </div>

                    <div className="flex flex-col gap-0.5 md:gap-1">
                        <h4 className={`text-[11px] md:text-sm font-bold uppercase tracking-widest transition-colors ${card.active ? 'text-primary' : 'text-white/80'}`}>
                            {card.title}
                        </h4>
                        <p className={`text-[10px] md:text-xs transition-colors ${card.active ? 'text-white/90' : 'text-gray-500'}`}>
                            {card.subtitle}
                        </p>
                    </div>

                    {card.active && (
                        <motion.div
                            layoutId="active-indicator"
                            className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-12 bg-primary rounded-full shadow-[0_0_15px_rgba(0,242,255,0.8)]"
                        />
                    )}
                </motion.div>
            ))}
        </motion.aside>
    )
}

export default Sidebar
