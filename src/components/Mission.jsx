import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Shield } from 'lucide-react'

const Mission = () => {
    const features = [
        {
            icon: <Users className="text-primary" size={24} />,
            title: "The Crew",
            desc: "Elite specialists trained for the ultimate crossing. Engineers, pilots, and scientists united by a single goal."
        },
        {
            icon: <Target className="text-primary" size={24} />,
            title: "The Objective",
            desc: "Locating 'Miller', 'Mann', and 'Edmunds' planets to verify habitability and secure the future of our species."
        },
        {
            icon: <Shield className="text-primary" size={24} />,
            title: "Protocol",
            desc: "Strict adherence to the Endurance operational guidelines. Survival is not just a plan, it's a necessity."
        }
    ]

    return (
        <section id="mission" className="relative min-h-screen w-full py-24 flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase">The Mission Protocol</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full shadow-[0_0_10px_#00f2ff]" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((f, idx) => (
                        <motion.div
                            key={f.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            className="glass-effect p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {f.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4 uppercase tracking-widest text-primary/90">{f.title}</h3>
                            <p className="text-gray-400 leading-relaxed font-light">
                                {f.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-24 p-12 glass-effect rounded-[2rem] border border-white/5 relative overflow-hidden"
                >
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <h4 className="text-2xl font-bold mb-6 uppercase tracking-widest">Endurance Operational Status</h4>
                            <div className="space-y-4">
                                {[
                                    { label: "Hull Integrity", val: "94%" },
                                    { label: "Oxygen Reserve", val: "12 Years" },
                                    { label: "Fuel Level", val: "Critical" }
                                ].map((stat) => (
                                    <div key={stat.label}>
                                        <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-1">
                                            <span>{stat.label}</span>
                                            <span className="text-primary">{stat.val}</span>
                                        </div>
                                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: stat.val }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, ease: "easeOut" }}
                                                className="h-full bg-primary shadow-[0_0_10px_#00f2ff]"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex-1 text-sm text-gray-500 font-light leading-loose border-l border-white/10 pl-12 hidden md:block">
                            "We're not meant to save the world. We're meant to leave it. Our survival is written in the stars, yet our path is forged in the darkness of the unknown. The Endurance stands as our last monument."
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Mission
