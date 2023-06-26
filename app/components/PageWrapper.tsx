import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

import LayoutClient from "./LayoutClient";

export default function PageWrapper({ children }: { children: ReactNode }) {
  const location = usePathname();
  return (
    <LayoutClient>
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, filter: "blur(50px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          className="hero fixed inset-0 -z-10"
        >
          <div className="hero-overlay bg-opacity-50 opacity-[.99]"></div>
          <Image
            src={`/${location.replace("/", "img-")}.jpg`}
            alt=""
            width={853}
            height={1280}
            priority={true}
            className="w-full object-cover object-center"
          />
        </motion.div>
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ scale: 10 }}
          key={location}
          //   className="col-start-1 row-start-2"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </LayoutClient>
  );
}
