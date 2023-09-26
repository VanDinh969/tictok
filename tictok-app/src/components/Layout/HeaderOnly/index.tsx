import * as React from "react";
import Header from "../components/Header";
// import Header from "./Header";

export interface IHeaderOnly {
  children: React.ReactNode;
}

export default function HeaderOnly({ children }: IHeaderOnly) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
