import { SectionType } from "@/type/Section/Section.type";

export type SetScrollAction = {
  type: "setScroll";
  payload: SectionType;
};

export type DummyAction = {
  type: "dummy";
  payload: number;
};

export const setScroll = (value: SectionType): SetScrollAction => ({
  type: "setScroll",
  payload: value,
});

export const dummy = (value: number): DummyAction => ({
  type: "dummy",
  payload: value,
});

type ActionListType = {
  setScroll: typeof setScroll;
  dummy: typeof dummy;
};

export const ActionList: ActionListType = {
  setScroll: setScroll,
  dummy: dummy,
};

export type ActionKey = keyof typeof ActionList;
export type ActionParam = {
  [K in ActionKey]: Parameters<(typeof ActionList)[K]>[0];
};

export type StoreAction = SetScrollAction | DummyAction;
