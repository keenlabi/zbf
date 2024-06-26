import { useState } from "react";
import IconButton from "../Buttons/IconButton/IconButton";
import styles from "./quantityselector.module.css";

export default function QuantitySelector({ itemsLeft }: { itemsLeft: number }) {
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleIncrement = () => {
    if (itemQuantity < itemsLeft) {
      setItemQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (itemQuantity > 1) {
      setItemQuantity((prev) => prev - 1);
    }
  };
  return (
    <div className={styles.productQuantity}>
      <div className={styles.productQuantityHeading}>Quantity</div>
      <div className={styles.productQuantityitems}>
        <div className={styles.quantityControls}>
          <IconButton extraStyle={styles.quantityButton} label="-" action={handleDecrement} />
          {itemQuantity}
          <IconButton extraStyle={styles.quantityButton} label="+" action={handleIncrement} />
        </div>

        <div className={styles.itemLeft}>
          Only <span className={styles.orangeText}>{itemsLeft} Items</span> Left! Don’t miss it
        </div>
      </div>
    </div>
  );
}
