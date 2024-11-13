import AboutItem from "@/components/About/AboutItem";
import styles from "./about.module.scss";
import { AboutItemProps, AboutItemType } from "@/type/About/AboutItem.type";
export default function About() {
  const AboutProfile: AboutItemProps = {
    image: "/icons/favicon.svg",
    type: AboutItemType.PROFILE,
    content: {
      name: "김원진",
      birth: new Date(1996, 10, 15),
      residence: "서울시 동대문구",
      phone: "010-3018-8403",
      email: "wjsj1015@naver.com",
      education: (
        <ul className={styles.about_container_item_ul}>
          국민대학교<li>1전공 : 미디어학과</li>
          <li>2전공 : 소프트웨어학과</li>
        </ul>
      ),
      github: <a href="https://github.com/oen0thera">github.com/oen0thera</a>,
    },
  };
  return (
    <div className={styles.about}>
      <div className={styles.about_title}>
        <div className={styles.title_container}>
          <h1>About</h1>
        </div>
      </div>

      <div className={styles.about_container}>
        <AboutItem item={AboutProfile} />
      </div>
    </div>
  );
}
