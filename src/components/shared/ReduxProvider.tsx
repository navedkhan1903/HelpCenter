"use client";

import { store } from "@/store/index";
import { Provider } from "react-redux";

export default function ReduxProvider({ children }: { children: JSX.Element }) {
  return <Provider store={store}>{children}</Provider>;
}
