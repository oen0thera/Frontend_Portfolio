"use client";
import select from "@/app/utils/Selector";
import styles from "./Modal.module.scss";
import useDispatcher from "@/app/utils/Dispatcher";
import Timeline from "@/components/Timeline/Timeline";
import { ModalContent } from "@/type/Modal/Modal.type";
export default function Modal() {
  const modalState = select("modalState") as boolean;
  const modalContent = select("modalContent") as ModalContent;
  const dispatch = useDispatcher();
  const closeModal = () => {
    dispatch("setOpenModal", false);
  };
  return (
    <div
      className={`${styles.modal_background} ${
        modalState ? styles.active : null
      }`}
      onClick={closeModal}
    >
      <div className={styles.modal}>
        <Timeline project={modalContent} />
      </div>
    </div>
  );
}
