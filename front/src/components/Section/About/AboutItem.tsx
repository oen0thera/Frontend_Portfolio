import {
  AboutItemProfileEnum,
  AboutItemProps,
  AboutItemType,
} from "@/type/About/AboutItem.type";

import Image from "next/image";

import styles from "./AboutItem.module.scss";
import Icons from "@/components/Icons/Icons";
import { IconsType } from "@/type/Icons/Icons.type";
import Item from "@/components/Item/Item";
import { useState } from "react";
export default function AboutItem({ item }: { item: AboutItemProps }) {
  const [isHover, setIsHover] = useState(false);
  const [isClick, setIsClick] = useState(false);
  const onHover = (isHover: boolean) => {
    setIsHover(isHover);
  };
  const onClick = () => {
    const click = () => {
      setIsClick(false);
    };
    setIsClick(true);
    setTimeout(click, 60);
  };
  return (
    <Item
      subtitle={item.type}
      content={
        <>
          {item.type === AboutItemType.PROFILE ? (
            <>
              <div
                className={`${styles.profile} ${
                  isHover
                    ? isClick
                      ? styles.click
                      : styles.hover
                    : styles.leave
                }`}
              >
                <div className={styles.profile_image}>
                  <div className={styles.profile_image_wrapper}>
                    {item.image && (
                      <Image
                        fill
                        src={item.image}
                        alt="profile_image"
                        style={{
                          objectFit: "cover",

                          transform: "scale(1.2) ",
                        }}
                      />
                    )}
                  </div>
                </div>
                <div className={styles.profile_content}>
                  {Object.entries(item.content).map(([key, value]) => {
                    return (
                      <div key={key} className={styles.profile_content_item}>
                        <b>
                          <Icons
                            src={IconsType[key as keyof typeof IconsType]}
                          />
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
              <div
                className={`${styles.intro} ${
                  isHover
                    ? isClick
                      ? styles.click
                      : styles.hover
                    : styles.leave
                }`}
              >
                {Object.values(item.content).map((element, idx) => {
                  return <div key={idx}>{element as string}</div>;
                })}
              </div>
            </>
          ) : null}
        </>
      }
      onClick={onClick}
      onHover={onHover}
    />
  );
}
