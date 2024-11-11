import styles from "./GNB.module.scss";
export default function GNB() {
  const navList = ["About", "Skills", "Projects", "Contact"];
  return (
    <div className={styles.GNB}>
      <div className={styles.GNB_title}>
        <h1>{`Kim WonJin`}</h1>
        <h3>{`@oen0thera`}</h3>
      </div>
      <div className={styles.nav_container}>
        <ul>
          {navList.map((nav, idx) => {
            return <li key={idx}>{`${nav}`}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
