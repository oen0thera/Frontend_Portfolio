"use client";
import Image from "next/image";
import styles from "./page.module.scss";
import Canvas from "@/components/Canvas/Canvas";

export default function Home() {
  return <div className={styles.page_container}>{<Canvas />}</div>;
}
