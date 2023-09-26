import "./GlobalStyles.scss";
import { ReactNode } from "react";

interface IGlobalStyles {
  children: ReactNode;
}

export default function GlobalStyles({ children }: IGlobalStyles) {
  return children;
}
