"use client";

import CollectionBox from "./components/CollectionBox";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Collection() {
  const location = usePathname();

  return (
    // <motion.div
    //   initial={{ opacity: 0, y: 100 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 0.7 }}
    // >
    <CollectionBox />
    // </motion.div>
  );
}
