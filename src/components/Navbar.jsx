import React from 'react'
import { Search, Bell } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 md:py-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]"
        >
            <div className="flex items-center gap-6 lg:gap-12">
                <div className="text-xl md:text-2xl font-bold tracking-tighter text-white cursor-pointer hover:text-primary transition-colors">
                    INTERSTELLAR
                </div>
                <nav className="hidden lg:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-gray-300">
                    {[
                        { name: 'Home', id: '#home' },
                        { name: 'Mission', id: '#mission' },
                        { name: 'Data', id: '#data' },
                        { name: 'Chronicles', id: '#chronicles' }
                    ].map((item) => (
                        <a
                            key={item.name}
                            className="hover:text-primary transition-colors relative group"
                            href={item.id}
                        >
                            {item.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                        </a>
                    ))}
                </nav>
            </div>

            <div className="flex items-center gap-4 md:gap-6">
                <button aria-label="Search" className="text-white hover:text-primary transition-colors">
                    <Search size={18} />
                </button>
                <button aria-label="Notifications" className="text-white hover:text-primary transition-colors relative">
                    <Bell size={18} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
                </button>
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-700 overflow-hidden border border-white/20 hover:border-primary/50 transition-colors cursor-pointer ring-offset-2 ring-offset-black hover:ring-2 ring-primary/20">
                    <img
                        alt="User Profile"
                        className="w-full h-full object-cover"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr9xOnsG5AuI-UE-osjccQwR8j0ffvMn_FHrJKgtYytSEyFwJQ59V4Vy_OpqosP1-HPci2lwHiykx9PibKyOOjfF2-SZeNmL8aVL6O-IiN5cSjGNjP37I_zobb8aAl_38RybEnepL1yAMzInXfHCjqdYtoLkOhte4K8dR0var4VCTORJt3s6nYIak8_JxSuTrvgiJ96JnYcJTcls9pDxqng2dRkNbXBNSybDqsqenQheCJMb7AzrvWibU9GVS57MjxZY-c1YPyl59b"
                    />
                </div>
            </div>
        </motion.header>
    )
}

export default Navbar
