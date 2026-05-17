"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function TopLoadingBar() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce) {
      setVisible(false);
      return;
    }

    const t1 = setTimeout(() => setProgress(100), 50);
    const t2 = setTimeout(() => setVisible(false), 700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [shouldReduce]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed top-0 left-0 z-[9999] h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500"
          initial={{ width: "0%", opacity: 1 }}
          animate={{ width: `${progress}%` }}
          exit={{ opacity: 0 }}
          transition={{
            width: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
            opacity: { duration: 0.3, delay: 0.1 },
          }}
        />
      )}
    </AnimatePresence>
  );
}
