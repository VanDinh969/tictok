import * as React from "react";
import Button from "../../Button";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

export interface IItem {
  icon?: React.ReactNode;
  title?: string;
  to?: string;
  child?: ISubMenu;
}

export interface ISubMenu {
  title?: string;
  data?: ILanguage[];
}

export interface ILanguage {
  code: string;
  title: string;
}

export interface IMenuItem {
  onClick?: () => void;
  data: IItem;
  title?: string;
}

const cx = classNames.bind(styles);

export default function MenuItem({ data, onClick }: IMenuItem) {
  return (
    <Button
      text
      leftIcon={data.icon}
      to={data.to}
      className={cx("menu-item")}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
}
