import { SectionType } from "@/type/Section/Section.type";
import { combineReducers } from "redux";
import { StoreAction } from "@/type/Store/Action/StoreAction";
import { createReducer } from "@reduxjs/toolkit";
export type AppState = {
  selectedSection: SectionType | null;
};

export type StateKey = keyof AppState;

const initialState = {
  selectedSection: null,
};

export const rootReducer = (
  state: AppState = initialState,
  action: StoreAction
) => {
  switch (action.type) {
    case "setScroll":
      console.log(state, action.payload);
      return {
        ...state,
        selectedSection: action.payload,
      };
    default:
      return state;
  }
};
