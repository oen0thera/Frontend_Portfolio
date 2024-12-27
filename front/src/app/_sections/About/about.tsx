import AboutItem from "@/components/Section/About/AboutItem";
import styles from "./about.module.scss";
import { AboutItemProps, AboutItemType } from "@/type/About/AboutItem.type";
export default function About() {
  const AboutProfile: AboutItemProps = {
    image: "/icons/profile.jpg",
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
  const AboutIntroduction: AboutItemProps = {
    type: AboutItemType.INTRO,
    content: {
      intro: `안녕하세요 항상 정진하는 프론트엔드 개발자 김원진입니다.\n미디어전공에서 복수전공으로 소프트웨어 전공을 이수하면서 프론트엔드에 관심을 갖게 되었고\n현재까지 이어져 개발 커리어를 이어가고 있습니다.\n항상 '부족해도 노력하자'는 마음가짐으로 주변 동료의 배울 점을 찾으며,\n부족한 점은 채우고 상호 존중과 협력을 추구하는 팀 지향 개발자가 되기 위해 항상 노력하고 있습니다.`,
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
        <AboutItem item={AboutIntroduction} />
      </div>
    </div>
  );
}
