import classNames from "classnames/bind";
import styles from "./Popper.module.scss";

export interface IWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const cx = classNames.bind(styles);

export default function Wrapper({ children, className }: IWrapperProps) {
  return <div className={cx("wrapper", className)}>{children}</div>;
}
