import styles from "./Sidebar.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);
export interface ISideBarProps {}

export default function SideBar(props: ISideBarProps) {
  return (
    <aside className={cx("wrapper")}>
      <h2>Sidebar</h2>
    </aside>
  );
}
