"use client";
import { useStore } from "@/store/useStore";
import { Provider } from "react-redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = useStore();
  return <Provider store={store}>{children}</Provider>;
}
