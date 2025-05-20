'use client';
import { motion } from "framer-motion";
import React from "react";

export default function MotionSection(props: React.ComponentProps<typeof motion.section>) {
  return <motion.section {...props}>{props.children}</motion.section>;
}