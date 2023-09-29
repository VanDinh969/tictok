import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { ReactElement } from "react";
import MenuItem, { IItem } from "./MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export interface IMenuHeader {
  title: string;
  onBack: () => void;
}

const cx = classNames.bind(styles);

export default function MenuHeader({ title, onBack }: IMenuHeader) {
  return (
    <header className={cx("header")}>
      <button className={cx("back-btn")} onClick={onBack}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <h4 className={cx("header-title")}>{title}</h4>
    </header>
  );
}
