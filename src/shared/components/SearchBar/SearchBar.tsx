import { useState } from "react";
import InputField from "../InputField/InputField";
import styles from "./searchbar.module.css";
import searchIcon from "src/shared/assets/icons/Icon-search.svg";

export default function SearchBar() {
  const [searchInputModel, setSearchInputModel] = useState({
    error: "",
    placeHolder: "Search items..",
  });

  return (
    <div className={styles.search_bar_wrapper}>
      <InputField
        type={"text"}
        prefixIcon={searchIcon}
        error={searchInputModel.error}
        placeholder={searchInputModel.placeHolder}
        onInput={() => {}}
      />
    </div>
  );
}
