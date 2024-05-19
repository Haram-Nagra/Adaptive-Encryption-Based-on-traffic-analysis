    "use client";
    import React from "react";
    import { motion } from "framer-motion";
    import { cn } from "./util";

    export const LampContainer = ({
    children,
    className,
    }: {
    children: React.ReactNode;
    className?: string;
    }) => {
    return (
    <div
    className={cn(
    "relative flex h-[758px] flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0",
    className
    )}
    >
    <div className="relative flex w-full flex-auto scale-y-125 items-center justify-center isolate z-0 ">
    <motion.div
        initial={{ opacity: 0.5, width: "15rem" }}
        whileInView={{ opacity: 1, width: "40rem" }}
        transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
        }}
        style={{
        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto right-1/2 h-56 overflow-visible w-[40rem] bg-gradient-conic from-red-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
    >
        <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
    </motion.div>
    <motion.div
        initial={{ opacity: 0.5, width: "15rem" }}
        whileInView={{ opacity: 1, width: "40rem" }}
        transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
        }}
        style={{
        backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
        }}
        className="absolute inset-auto left-1/2 h-56 w-[40rem] bg-gradient-conic from-transparent via-transparent to-red-500 text-white [--conic-position:from_290deg_at_center_top]"
    >
        <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
        <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
    </motion.div>
    <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl"></div>
    <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
    <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-red-500 opacity-50 blur-3xl"></div>
    <motion.div
        initial={{ width: "8rem" }}
        whileInView={{ width: "16rem" }}
        transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
        }}
        className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-red-400 blur-2xl"
    ></motion.div>
    <motion.div
        initial={{ width: "15rem" }}
        whileInView={{ width: "40rem" }}
        transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
        }}
        className="absolute inset-auto z-50 h-0.5 w-[40rem] -translate-y-[7rem] bg-red-400"
    ></motion.div>

    <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950"></div>
    </div>

    <div className="relative z-50 flex flex-col items-center px-5">
    {children}
    </div>
    </div>
    );
    };