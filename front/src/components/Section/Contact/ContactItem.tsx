"use client";
import useDispatcher from "@/app/utils/Dispatcher";
import styles from "./ContactItem.module.scss";
import Icons from "@/components/Icons/Icons";
import { IconsType } from "@/type/Icons/Icons.type";
import { ModalType } from "@/type/Modal/Modal.type";
import { useRouter } from "next/navigation";

interface ContactItemProps {
  type: "github" | "email";
}

export default function ContactItem({ type }: ContactItemProps) {
  const dispatch = useDispatcher();
  const router = useRouter();

  const openModal = () => {
    dispatch("setModalContent", {
      type: ModalType.EMAIL,
      content: null,
    });
    dispatch("setOpenModal", true);
  };

  if (type === "github") {
    return (
      <button
        className={styles.contact_button}
        onClick={() => router.push("https://github.com/oen0thera")}
      >
        <Icons src={IconsType.github} size={28} />
        <span className={styles.contact_label}>Github</span>
        <span className={styles.contact_meta}>github.com/oen0thera</span>
      </button>
    );
  }

  return (
    <button className={styles.contact_button} onClick={openModal}>
      <Icons src={IconsType.email} size={28} />
      <span className={styles.contact_label}>Email</span>
      <span className={styles.contact_meta}>wjsj1015@naver.com</span>
    </button>
  );
}
