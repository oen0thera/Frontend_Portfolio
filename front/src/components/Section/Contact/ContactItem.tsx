import useDispatcher from "@/app/utils/Dispatcher";
import select from "@/app/utils/Selector";
import Item from "@/components/Item/Item";
import {
  ContactItemProps,
  ContactItemType,
} from "@/type/Contact/ContactItem.type";
import { useEffect, useState } from "react";

import styles from "./ContactItem.module.scss";
import Icons from "@/components/Icons/Icons";
import { IconsType } from "@/type/Icons/Icons.type";
import { ModalType } from "@/type/Modal/Modal.type";

export default function ContactItem({ item }: { item: ContactItemProps }) {
  const dispatch = useDispatcher();
  const [active, setActive] = useState(false);
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
  const onLink = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  const modalState = select("modalState");
  const openModal = () => {
    dispatch("setModalContent", {
      type: ModalType.EMAIL,
      content: null,
    });
    const setOpenModal = () => {
      dispatch("setOpenModal", true);
    };
    setOpenModal();
    setActive(true);
  };
  useEffect(() => {
    if (!modalState) {
      setActive(false);
    }
  }, [modalState]);
  return (
    <Item
      subtitle={item.type === ContactItemType.LINK ? "Links" : "Contact"}
      content={
        <>
          {item.type === ContactItemType.LINK ? (
            <div className={styles.contact_item_container}>
              <Icons src={IconsType.github} size={30} />
              <h2>Github</h2>
            </div>
          ) : (
            <div className={styles.contact_item_container} onClick={openModal}>
              <Icons src={IconsType.email} size={30} />
              <h2>Email</h2>
            </div>
          )}
        </>
      }
      onHover={onHover}
    />
  );
}
