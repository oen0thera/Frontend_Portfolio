import { ItemProps } from "@/type/Item/Item.type";
import styles from "./Item.module.scss";
import { useEffect, useState } from "react";
import React from "react";

export default function Item({
  subtitle,
  content,
  onClick,
  onHover,
}: ItemProps) {
  return (
    <div
      className={styles.item_container}
      onClick={onClick}
      onMouseEnter={() => {
        onHover(true);
      }}
      onMouseLeave={() => {
        onHover(false);
      }}
    >
      <h1 className={styles.item_subtitle}>{subtitle}</h1>
      {content}
    </div>
  );
}
