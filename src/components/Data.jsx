import React from 'react'
import { motion } from 'framer-motion'
import { Activity, Globe, Zap } from 'lucide-react'

const Data = () => {
    return (
        <section id="data" className="relative min-h-screen w-full py-24 flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-primary/90 glass-effect rounded-full border border-primary/20">
                        Telemetry Analysis
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 uppercase leading-none">
                        Deep Space <br /> <span className="text-primary/80">Observation</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-12 font-light max-w-xl">
                        Real-time data synchronization from the Endurance sensory array. Our sensors are picking up anomalies near the accretion disk.
                    </p>

                    <div className="space-y-8">
                        {[
                            { icon: <Activity className="text-primary" />, title: "Gravitational Waves", value: "3.42 GHz" },
                            { icon: <Globe className="text-primary" />, title: "Habitability Index", value: "88/100" },
                            { icon: <Zap className="text-primary" />, title: "Energy Resonance", value: "Locked" }
                        ].map((item, idx) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-6"
                            >
                                <div className="p-3 bg-white/5 rounded-full border border-white/10">{item.icon}</div>
                                <div>
                                    <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{item.title}</div>
                                    <div className="text-xl font-bold text-white">{item.value}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    {/* Animated Circular Scanner Visual */}
                    <div className="relative aspect-square w-full max-w-md mx-auto">
                        <div className="absolute inset-0 rounded-full border border-primary/20 animate-spin-slow" />
                        <div className="absolute inset-4 rounded-full border border-white/5 animate-reverse-spin" />
                        <div className="absolute inset-12 rounded-full border-2 border-primary/10" />

                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-6xl font-bold text-primary tracking-tighter drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">
                                    GARGANTUA
                                </div>
                                <div className="text-xs uppercase tracking-[0.5em] text-gray-500 mt-2 font-bold">
                                    Event Horizon Data
                                </div>
                            </div>
                        </div>

                        {/* Floating Data Points */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-1/4 -right-4 glass-effect p-3 rounded-xl border border-primary/30"
                        >
                            <div className="text-[9px] uppercase font-bold text-primary">Singularity</div>
                            <div className="text-xs font-mono">r=2GM/c²</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes reverse-spin {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-reverse-spin { animation: reverse-spin 15s linear infinite; }
      `}</style>
        </section>
    )
}

export default Data
