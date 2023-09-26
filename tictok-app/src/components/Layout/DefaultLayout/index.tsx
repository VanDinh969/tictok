import * as React from "react";
import Header from "../components/Header";
import SideBar from "./Sidebar";
import styles from "./DefaultLayout.module.scss";
import className from "classnames/bind";

export interface IDefaultLayoutProps {
  children: React.ReactNode;
}

const cx = className.bind(styles);

export default function DefaultLayout({ children }: IDefaultLayoutProps) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <SideBar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}
