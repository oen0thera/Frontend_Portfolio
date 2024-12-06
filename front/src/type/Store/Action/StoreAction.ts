import { ModalContent } from "@/type/Modal/Modal.type";
import { SectionType } from "@/type/Section/Section.type";

export type SetScrollAction = {
  type: "setScroll";
  payload: SectionType;
};

export type SetCurrSectionAction = {
  type: "setCurrSection";
  payload: SectionType;
};

export type SetOpenModal = {
  type: "setOpenModal";
  payload: boolean;
};

export type SetModalContent = {
  type: "setModalContent";
  payload: ModalContent;
};

export const setScroll = (value: SectionType): SetScrollAction => ({
  type: "setScroll",
  payload: value,
});

export const setCurrSection = (value: SectionType): SetCurrSectionAction => ({
  type: "setCurrSection",
  payload: value,
});

export const setOpenModal = (value: boolean): SetOpenModal => ({
  type: "setOpenModal",
  payload: value,
});

export const setModalContent = (value: ModalContent): SetModalContent => ({
  type: "setModalContent",
  payload: value,
});

type ActionListType = {
  setScroll: typeof setScroll;
  setCurrSection: typeof setCurrSection;
  setOpenModal: typeof setOpenModal;
  setModalContent: typeof setModalContent;
};

export const ActionList: ActionListType = {
  setScroll: setScroll,
  setCurrSection: setCurrSection,
  setOpenModal: setOpenModal,
  setModalContent: setModalContent,
};

export type ActionKey = keyof typeof ActionList;
export type ActionParam = {
  [K in ActionKey]: Parameters<(typeof ActionList)[K]>[0];
};

export type StoreAction =
  | SetScrollAction
  | SetCurrSectionAction
  | SetOpenModal
  | SetModalContent;
