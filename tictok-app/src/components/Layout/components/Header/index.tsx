import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSpinner,
  faMagnifyingGlass,
  faSignIn,
  faSign,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import Button from "../../../Button";
import { Wrapper as PopperWrapper } from "../../../../components/Popper";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import AccountItem from "../../../AccountItem";
import { faReadme } from "@fortawesome/free-brands-svg-icons";

export interface IHeaderProps {}

const cx = classNames.bind(styles);

export default function Header(props: IHeaderProps) {
  const [searchResult, setSearchResult] = useState<any[]>([]);
  useEffect(() => {
    setTimeout(() => {
      setSearchResult([]);
    }, 0);
  }, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        {/* Logo */}
        <img src={images.logo} alt="TikTok" />

        {/* Search */}
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex={-1} {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
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
        </Tippy>

        {/* features */}
        <div className={cx("actions")}>
          <Button text>Upload</Button>
          <Button
            primary
            // leftIcon={<FontAwesomeIcon icon={faSignIn} />}
            // rightIcon={<FontAwesomeIcon icon={faRegistered} />}
          >
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}
