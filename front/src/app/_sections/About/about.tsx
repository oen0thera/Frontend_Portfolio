"use client";
import styles from "./about.module.scss";
import Image from "next/image";
import sectionStyles from "@/components/Section/Section/section.module.scss";

export default function About() {
  return (
    <div className={styles.about}>
      <div className={styles.about_hero}>
        <div
          className={`${styles.profile_image_wrapper} ${sectionStyles.reveal}`}
        >
          <Image
            fill
            src="/icons/profile.jpg"
            alt="profile_image"
            style={{ objectFit: "cover" }}
          />
        </div>
        <h1 className={`${styles.hero_title} ${sectionStyles.reveal}`}>
          Kim WonJin
        </h1>
        <p className={`${styles.hero_subtitle} ${sectionStyles.reveal}`}>
          Frontend Developer @oen0thera
        </p>
        <p className={`${styles.hero_intro} ${sectionStyles.reveal}`}>
          {`안녕하세요 항상 정진하는 개발자 김원진입니다.\n미디어전공에서 복수전공으로 소프트웨어 전공을 이수하면서 개발에 관심을 갖게 되었고,\n현재까지 이어져 개발 커리어를 이어가고 있습니다.`}
        </p>
      </div>

      <div className={styles.scroll_indicator}>
        <span>Scroll to explore</span>
        <div className={styles.arrow} />
      </div>
    </div>
  );
}
