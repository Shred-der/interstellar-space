import React from 'react'
import { motion } from 'framer-motion'

const Chronicles = () => {
    const events = [
        { year: "2067", event: "Standardization of NASA missions", status: "Archive" },
        { year: "2071", event: "Dust storms reach peak intensity", status: "Critical" },
        { year: "2073", event: "Discovery of the Saturnian Anomaly", status: "Top Secret" },
        { year: "2075", event: "Lazarus Missions deployed", status: "Active" },
        { year: "2081", event: "Launch of the Endurance", status: "Current" }
    ]

    return (
        <section id="chronicles" className="relative min-h-screen w-full py-24 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-6 md:px-12 w-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 uppercase italic">The Chronicles</h2>
                    <p className="text-gray-500 tracking-[0.3em] font-medium uppercase text-xs">Mission Timeline & Logs</p>
                </motion.div>

                <div className="space-y-4">
                    {events.map((e, idx) => (
                        <motion.div
                            key={e.year}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.6 }}
                            className="group flex items-center justify-between p-6 md:p-8 glass-effect rounded-2xl border border-white/5 hover:border-primary/20 hover:bg-white/[0.07] transition-all cursor-crosshair"
                        >
                            <div className="flex items-center gap-8 md:gap-12">
                                <span className="text-2xl md:text-3xl font-bold text-gray-600 transition-colors group-hover:text-primary">
                                    {e.year}
                                </span>
                                <div>
                                    <h3 className="text-sm md:text-base font-bold uppercase tracking-widest text-white/90">
                                        {e.event}
                                    </h3>
                                    <p className="text-[10px] text-primary/60 font-bold uppercase tracking-[0.2em] mt-1 italic">
                                        {e.status}
                                    </p>
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <div className="w-12 h-px bg-white/10 group-hover:w-24 group-hover:bg-primary transition-all duration-500" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1 }}
                    className="mt-20 text-center text-gray-600 text-[10px] uppercase font-bold tracking-[0.5em]"
                >
                    - End of Encrypted Logs -
                </motion.div>
            </div>
        </section>
    )
}

export default Chronicles
