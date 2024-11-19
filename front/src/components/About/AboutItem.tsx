import {
  AboutItemProfileEnum,
  AboutItemProps,
  AboutItemType,
} from "@/type/About/AboutItem.type";

import Image from "next/image";

import styles from "./AboutItem.module.scss";

export default function AboutItem({ item }: { item: AboutItemProps }) {
  return (
    <div className={styles.item_container}>
      <h1 className={styles.item_subtitle}>{`${item.type}`}</h1>
      {item.type === AboutItemType.PROFILE ? (
        <>
          <div className={styles.profile}>
            <div className={styles.profile_image}>
              <div className={styles.profile_image_wrapper}>
                {item.image && (
                  <Image fill src={item.image} alt="profile_image" />
                )}
              </div>
            </div>
            <div className={styles.profile_content}>
              {Object.entries(item.content).map(([key, value]) => {
                return (
                  <div className={styles.profile_content_item}>
                    <b>
                      {
                        AboutItemProfileEnum[
                          key as keyof typeof AboutItemProfileEnum
                        ]
                      }
                    </b>
                    <div>
                      {value instanceof Date
                        ? `${value.getFullYear()}.${value.getMonth()}.${value.getDate()}`
                        : value instanceof String
                        ? value.toString()
                        : value}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      ) : item.type === AboutItemType.INTRO ? (
        <>
          <div className={styles.intro}>
            {Object.values(item.content).map((element, idx) => {
              return <div key={idx}>{element as string}</div>;
            })}
          </div>
        </>
      ) : null}
    </div>
  );
}
