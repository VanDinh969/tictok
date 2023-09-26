import * as React from "react";
import Header from "../components/Header";
import SideBar from "./SideBae";

export interface IDefaultLayoutProps {
  children: React.ReactNode;
}

export default function DefaultLayout({ children }: IDefaultLayoutProps) {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
