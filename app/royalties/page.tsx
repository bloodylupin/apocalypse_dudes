"use client";

import RoyaltiesBox from "./components/RoyaltiesBox";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Royalties() {
  const location = usePathname();

  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 100 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.7 }}
    // >
    <RoyaltiesBox />
    // </motion.div>
  );
}
