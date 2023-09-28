import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

export interface IButtonProps {
  to?: string;
  href?: string;
  children: React.ReactNode;
  target?: string;
  primary?: boolean;
  outline?: boolean;
  small?: boolean;
  large?: boolean;
  text?: boolean;
  disable?: boolean;
  rounded?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  to,
  href,
  primary,
  outline,
  small,
  large,
  disable,
  rounded,
  onClick,
  target,
  children,
  text,
  className = "",
  leftIcon,
  rightIcon,
}: IButtonProps) {
  let Comp: React.ElementType = "button";

  if (to) {
    Comp = Link;
  }
  if (href) {
    Comp = "a";
  }
  if (disable) {
    onClick = undefined;
  }

  const classes = cx("wrapper", {
    [className]: className,
    primary,
    outline,
    small,
    large,
    text,
    disable,
    rounded,
  });
  return (
    <Comp
      className={classes}
      onClick={onClick}
      to={to}
      href={href}
      target={target}
    >
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}
