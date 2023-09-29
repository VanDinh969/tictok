import Tippy, { TippyProps } from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import styles from "./Menu.module.scss";
import { Wrapper as PopperWrapper } from "../../Popper";
import { ReactElement, useState } from "react";
import MenuItem, { IItem } from "./MenuItem";
import MenuHeader from "./MenuHeader";

export interface IMenuProps {
  children: ReactElement;
  items: IItem[];
  onChange: (data: any) => void;
}

const cx = classNames.bind(styles);

const defaultFn = () => {};

export default function Menu({
  children,
  items,
  onChange = defaultFn,
}: IMenuProps) {
  const [history, setHistory] = useState<any>([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item: any, index: any) => {
      const isParent = !!item.child;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev: any) => [...prev, item.child]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
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
            {history.length > 1 && (
              <MenuHeader
                title={"Language"}
                onBack={() => {
                  setHistory((prev: any) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
}
