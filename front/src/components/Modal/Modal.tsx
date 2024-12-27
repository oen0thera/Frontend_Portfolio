"use client";
import select from "@/app/utils/Selector";
import styles from "./Modal.module.scss";
import useDispatcher from "@/app/utils/Dispatcher";
import Timeline from "@/components/Timeline/Timeline";
import { ModalContent, ModalType } from "@/type/Modal/Modal.type";
import { useEffect } from "react";
import EmailForm from "@/components/Form/Email/EmailForm";
export default function Modal() {
  const modalState = select("modalState") as boolean;
  const modalContent = select("modalContent") as ModalContent;
  const modalType = modalContent?.type;

  const dispatch = useDispatcher();
  const closeModal = () => {
    dispatch("setOpenModal", false);
  };
  const modalClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (modalState) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modalState]);

  const renderModal = () => {
    switch (modalType) {
      case ModalType.TIMELINE:
        return <Timeline initState={false} />;
      case ModalType.EMAIL:
        return (
          <div className={styles.modal} onClick={modalClick}>
            <EmailForm />
          </div>
        );
    }
  };
  return (
    <div
      className={`${styles.modal_background} ${
        modalState ? styles.active : null
      }`}
      onClick={closeModal}
    >
      <div className={styles.modal_wrapper}>{renderModal()}</div>
    </div>
  );
}
