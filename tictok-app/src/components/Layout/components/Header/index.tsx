import styles from "./Header.module.scss";
import classNames from "classnames/bind";

export interface IHeaderProps {}

const cx = classNames.bind(styles);

export default function Header(props: IHeaderProps) {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* Logo */}
        {/* Search */}
      </div>
    </header>
  );
}
