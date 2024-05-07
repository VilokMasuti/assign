"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../../animi/ui/images-slider";
import Link from "next/link";

const page = () => {
      const images = [
            "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          ];
  return (
<main className="flex min-h-screen flex-col items-center justify-between p-24">
<ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold  ml-10 tracking-widest font-mono  text-2xl md:text-6xl text-center bg-clip-text text-transparent bg-clip bg-gradient-to-b from-slate-50 to-neutral-950' py-4">
          The Weather Report Near You...!
        </motion.p>
        <div className=" flex  gap-8 ">

        <button className="px-4 py-2  mt-10npm backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative ">
          <Link href="/report">
          <span>Check now →</span>
          </Link>
         
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        <button className="px-4 py-2  mt-10npm backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative ">
          <Link href="/about">
          <span>ABOUT →</span>
          </Link>
         
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        <button className="px-4 py-2  mt-10npm backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative ">
          <Link href="/contact">
          <span>Contact →</span>
          </Link>
         
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
        </div>
        
      </motion.div>
    </ImagesSlider>
      </main>
  )
}

export default page