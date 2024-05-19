"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./canvas-real-effect";

export default function Hero() {
const [hovered, setHovered] = React.useState(false);
return (
<div
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className="h-[47rem] flex flex-col lg:flex-row overflow-hidden items-center justify-center bg-black w-full gap-4 mx-auto px-8 relative"
>
    <p className="md:text-6xl text-2xl font-serif font-medium tracking-tight text-center text-white relative z-20 max-w-6xl mx-auto">
    Adaptive Encryption Based on Traffic Analysis
    </p>
    <AnimatePresence>
    {hovered && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="h-full w-full absolute inset-0"
        >
        <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent"
            colors={[
                [59, 130, 246],
                [139, 92, 246],
            ]}
            opacities={[0.2, 0.2, 0.2, 0.2, 0.2, 0.4, 0.4, 0.4, 0.4, 1]}
            dotSize={2}
        />
        </motion.div>
    )}
    </AnimatePresence>
    {/* Radial gradient for the cute fade */}
    <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
</div>
);
}
