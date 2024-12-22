"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function ManBehindJazbaa() {
  return (
    <>
      <LampContainer className="max-w-full p-4 overflow-hidden border border-gray-300 relative">
    <h1 className="text-center text-3xl font-bold mt-8 mb-4">
          Man Behind Jazbaa
        </h1>
        
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-red-300 to-red-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          <div className="flex flex-col items-center">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D03AQFXmcHM9qcV2A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1684676554457?e=1740614400&v=beta&t=Uaz9qwE6XabzwetzybbchZxUdhnpRfrZfBQm476MNOE"
              alt="Lamp Image"
              width={100}
              height={100}
              className="my-4"
            />
            <span className="text-2xl">Vimal Daga</span>
          </div>
        </motion.h1>
        {/* <div className="border h-20 w-20 z-50"></div> */}
      </LampContainer>
    </>
  );
}