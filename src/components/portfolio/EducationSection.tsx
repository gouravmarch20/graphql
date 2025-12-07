"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { useState } from "react";
import education from "@/constants/Education";

export default function EducationSection() {
    const [pos, setPos] = useState({ x: 0, y: 0 })

    return (
        <div
            id="education"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                setPos({ x, y });
            }}
            className="relative min-h-[100dvh] flex-col items-center justify-center  py-4 border-4 rounded-2xl
             transition-colors duration-300
            hover:border-l-slate-400 hover:border-l-4">
            <SectionHeader
                tagText="Education"
                tagIcon="solar:book-bold"
                heading="Academic Background"
                showUnderline={true}
                centered={true}
            />
            {/*Cursor Effect*/}
            <div
                className="absolute w-8 h-8 border-4 border-cyan-500 bg-transparent rounded-full
                pointer-events-none transition-transform duration-100 ease-in"
                style={{
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    transform: "translate(-50%, -50%)", // centers it on the cursor
                }}></div>


            {/* Subtle Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/10 rounded-full blur-3xl" />

                {/* Geometric Accents */}
                <motion.div
                    className="absolute top-20 right-20 w-2 h-2 bg-blue-500/30 rounded-full"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-32 left-16 w-1 h-1 bg-purple-500/40 rounded-full"
                    animate={{ scale: [1, 2, 1], opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
                <motion.div
                    className="absolute top-1/2 left-10 w-1.5 h-1.5 bg-pink-500/35 rounded-full"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0.6, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                />
            </div>


            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-4xl mx-auto px-6 text-center -mb-8"
            >

                {
                    education.map((edu, idx) => (

                        <div key={idx} className="text-left mb-10">
                            <motion.h2
                                className="text-3xl md:text-2xl font-bold mb-3 md:mb-4 lg:mb-6"
                                whileHover={{ scale: 1.02 }}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                viewport={{ once: false }}
                            >
                                <span className={`${edu.gradient} bg-clip-text text-transparent`}>
                                    {edu.institution}
                                </span>
                            </motion.h2>


                            <motion.p
                                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                {edu.course}

                            </motion.p>
                            <motion.p
                                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                {edu.duration}

                            </motion.p>
                            <motion.p
                                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                {edu.subjects}

                            </motion.p>
                            <motion.p
                                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto leading-relaxed"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                            >
                                {edu.score}

                            </motion.p>
                        </div>


                    ))
                }


            </motion.section>


        </div>
    )
}
