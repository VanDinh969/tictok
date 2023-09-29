import Tippy, { TippyProps } from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";
import { ReactElement } from "react";
import MenuItem, { IItem } from "./MenuItem";

export interface IMenuProps {
  children: ReactElement;
  items: IItem[];
}

const cx = classNames.bind(styles);

export default function Menu({ children, items }: IMenuProps) {
  const renderItems = () => {
    return items.map((item, index) => <MenuItem key={index} {...item} />);
  };

  return (
    <Tippy
      delay={[0, 700]}
      placement="bottom-end"
      arrow
      interactive
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex={-1} {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}
