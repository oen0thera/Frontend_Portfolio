"use client";
import select from "@/app/utils/Selector";
import styles from "./Modal.module.scss";
import useDispatcher from "@/app/utils/Dispatcher";
export default function Modal() {
  const modalState = select("modalState") as boolean;
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
    ></div>
  );
}
