import { ReactNode } from "react";
import styles from "./gridlist.module.css";

interface IGridList {
  columnCount: number;
  children: ReactNode|ReactNode[]
}

export default function GridList({ columnCount, children }:IGridList) {
  return (
    <div 
      className={styles.grid_list}
      style={{ gridTemplateColumns: `repeat(${columnCount}, 1fr)` }}
    >
      { children }
    </div>
  );
}
