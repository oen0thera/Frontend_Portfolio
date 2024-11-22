"use client";
import { AppState, StateKey } from "@/type/Store/Reducer/StoreReducer";
import { useSelector as useSelect } from "react-redux";

export default function select(key: StateKey) {
  const selector = useSelect<AppState, AppState[StateKey]>((state) => {
    console.log(state);
    return state[key];
  });
  return selector;
}
