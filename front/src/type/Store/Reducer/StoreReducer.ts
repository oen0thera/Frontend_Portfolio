import { SectionType } from "@/type/Section/Section.type";
import { StoreAction } from "@/type/Store/Action/StoreAction";
export type AppState = {
  selectedSection: SectionType | null;
  currSection: SectionType | null;
  modalState: boolean;
};

export type StateKey = keyof AppState;

const initialState = {
  selectedSection: null,
  currSection: null,
  modalState: false,
};

export const rootReducer = (
  state: AppState = initialState,
  action: StoreAction
) => {
  switch (action.type) {
    case "setScroll":
      return {
        ...state,
        selectedSection: action.payload,
      };
    case "setCurrSection":
      return {
        ...state,
        currSection: action.payload,
      };
    case "setOpenModal":
      return {
        ...state,
        modalState: action.payload,
      };
    default:
      return state;
  }
};
