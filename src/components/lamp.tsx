"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./lamp-demo";

export default function Lamp({ children,paddingY }) {
    return (
        <LampContainer className="flex flex-col items-center relative">
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                className={`${paddingY} -mt-96 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center font-medium tracking-tight text-transparent`}
            >
            <div>
                {children}
            </div>
            </motion.h1>

        </LampContainer>
    );
}
