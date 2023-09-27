import styles from "./Header.module.scss";
import classNames from "classnames/bind";
import images from "../../../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

export interface IHeaderProps {}

const cx = classNames.bind(styles);
console.log("image: ", images.logo);

export default function Header(props: IHeaderProps) {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* Logo */}
        <img src={images.logo} alt="TikTok" />

        {/* Search */}
        <div className={cx("search-container")}>
          <input
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
          />
          {/* btn clears */}
          <button className={cx("clear-btn")}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>

          {/* loading */}
          <button className={cx("loading")}>
            <FontAwesomeIcon icon={faSpinner} />
          </button>

          {/* btn search */}
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>

        {/* features */}
        <div className={cx("features-container")}></div>
      </div>
    </header>
  );
}
