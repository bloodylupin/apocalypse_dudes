"use client";

import Image from "next/image";

import { motion, AnimatePresence } from "framer-motion";
import { type ReactNode } from "react";
import { usePathname } from "next/navigation";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const location = usePathname();
  return (
    <AnimatePresence>
      <motion.div
        key={location}
        initial={{ filter: "blur(50px)" }}
        animate={{ filter: "blur(0px)" }}
        exit={{ filter: "blur(50px)" }}
        className="col-start-1 row-start-2 grid"
      >
        <div className="hero relative -z-10 col-start-1 row-start-1">
          <div className="hero-overlay relative z-30 bg-opacity-50"></div>
          <Image
            src={`/${location.replace("/", "img-")}.jpg`}
            alt=""
            fill
            priority={true}
            className="max-h-full object-cover object-top"
          />
        </div>
        <main className="col-start-1 row-start-1">
          <div className="prose mx-auto grid h-full place-content-center px-4 py-16 text-center">
            <h1>
              {location.replace("/", "")
                ? location.replace("/", "")
                : "Apocalypse Dudes"}
            </h1>
            {children}
          </div>
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
