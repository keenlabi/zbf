import IconButton from "../Buttons/IconButton/IconButton";
import styles from "./pagination.module.css";
import iconLeft from "src/shared/assets/icons/chevron-left.svg";
import iconRight from "src/shared/assets/icons/chevron-right.svg";

const pageNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export default function Pagination() {
  return (
    <div className={styles.paginationContainer}>
      <IconButton extraStyle={styles.previousButton} prefixIcon={<img src={iconLeft} alt="" />} label="Previous" action={() => {}} />

      <div className={styles.pageNumbers}>
        {pageNumbers.map((pageNumber) => (
          <IconButton extraStyle={styles.pageNumber} label={pageNumber} action={() => {}} />
        ))}
      </div>

      <IconButton extraStyle={styles.nextButton} suffixIcon={<img src={iconRight} alt="" />} label="Next" action={() => {}} />
    </div>
  );
}
