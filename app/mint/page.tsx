"use client";

import MintBox from "./components/MintBox";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Mint() {
  const location = usePathname();

  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 100 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.7 }}
    // >
    <MintBox />
    // </motion.div>
  );
}
