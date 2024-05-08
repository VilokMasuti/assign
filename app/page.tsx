"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../app/animi/ui/lamp";
import Link from "next/link";


export default function Home() {

  return (
    <main className="">
   
       <LampContainer className=" max-sm:mt-[-130px]">
       <button  className="  px-4 py-3 max-sm:ml-[-20px] rounded-full p-2 bg-black" >
        <Link className=" max-sm:mt-[70px]" href="/home"> Press Me Lets Light Up </Link>
      </button>
      <motion.h1
        initial={{ opacity: 0.9, y: 300 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.9,
          duration: 1,
          ease: "easeInOut",
        }}
        className="mt-8 max-sm:mt-[90px] bg-gradient-to-br   font-mono text-xl from-black to-slate-600 py-4 bg-clip-text text-center font-bold   tracking-tight text-transparent md:text-7xl"
      >
     
Thank you
<br/> For  Giving Me This Opportunity..!
      </motion.h1>
    </LampContainer>
    </main>
  );
}
