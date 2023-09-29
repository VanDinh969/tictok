import * as React from "react";
import Button from "../../Button";

import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

export interface IItem {
  icon: React.ReactNode;
  title: string;
  to?: string;
}

const cx = classNames.bind(styles);

export default function MenuItem({ icon, title, to }: IItem) {
  return (
    <Button text leftIcon={icon} to={to} className={cx("menu-item")}>
      {title}
    </Button>
  );
}
