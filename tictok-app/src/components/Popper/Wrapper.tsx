import classNames from "classnames/bind";
import styles from "./Popper.module.scss";

export interface IWrapperProps {
  children: React.ReactNode;
}

const cx = classNames.bind(styles);

export default function Wrapper({ children }: IWrapperProps) {
  return <div className={cx("wrapper")}>{children}</div>;
}
