import { rootReducer } from "@/type/Store/Reducer/StoreReducer";
import { configureStore } from "@reduxjs/toolkit";
import { useMemo } from "react";

const initializeStore = () => {
  const store = configureStore({ reducer: rootReducer });
  return store;
};

export function useStore() {
  const store = useMemo(() => {
    return initializeStore();
  }, []);
  return store;
}
