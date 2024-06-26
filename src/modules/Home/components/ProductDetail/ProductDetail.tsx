import CategoryChain from "src/shared/components/CategoryChain/CategoryChain";
import styles from "./productdetail.module.css";
import productImage from "src/shared/assets/images/shoes.png";
import star from "src/shared/assets/icons/Icon-star.svg";
import IconButton from "src/shared/components/Buttons/IconButton/IconButton";
import { useState } from "react";
import SuggestedProducts from "src/shared/components/SuggestedProducts";

const productObject = {
  name: "Nike S43",
  description:
    "Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low '77 Vintage returns with its low-profile style and heritage b-ball looks.",
  image: productImage,
  auxImages: [productImage, productImage, productImage, productImage],
  rating: 5,
  price: "190.20",
  colors: ["red", "blue", "yellow", "brown", "green"],
  sizes: ["37", "38", "39", "41", "42", "43", "44"],
  itemsLeft: 12,
};

export default function ProductDetail() {
  const { name, description, image, auxImages, rating, price, colors, sizes, itemsLeft } = productObject;
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
    <div className={styles.productDetailContainer}>
      <CategoryChain />

      <section className={styles.productDetail}>
        <div className={styles.productImages}>
          <img className={styles.mainImage} src={image} alt="" />

          <div className={styles.auxilliaryImageGroup}>
            <img className={styles.auxilliaryImage} src={auxImages[0]} alt="" />
            <img className={styles.auxilliaryImage} src={auxImages[1]} alt="" />
            <img className={styles.auxilliaryImage} src={auxImages[2]} alt="" />
            <img className={styles.auxilliaryImage} src={auxImages[3]} alt="" />
          </div>
        </div>

        <div className={styles.productInfo}>
          <div className={styles.productHeader}>
            <div className={styles.productDetailHeading}>{name}</div>
            <div className={styles.productDetailDescription}>{description}</div>
            <div className={styles.productDetailRating}>
              {Array.from({ length: rating }).map((_, index) => (
                <img key={index} src={star} alt="star" />
              ))}
            </div>
          </div>
          <div className={styles.productDetailPrice}>
            <div>${price}</div>
          </div>

          <div className={styles.productDetailColors}>
            <div className={styles.colorHeading}>Choose a Color</div>
            <div className={styles.colorGroup}>
              {colors.map((color) => (
                <button className={styles.productColor} style={{ backgroundColor: color }}></button>
              ))}
            </div>
          </div>

          <div className={styles.productDetailSizes}>
            <div className={styles.sizesHeading}>Select Size</div>
            <div className={styles.sizeGroup}>
              {sizes.map((size) => (
                <button className={styles.productSize}>{size}</button>
              ))}
            </div>
          </div>

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

          <div className={styles.productInfoButtonGroup}>
            <IconButton extraStyle={styles.buyButton} label="Buy now" action={() => {}} />
            <IconButton extraStyle={styles.cartButton} label="Add to Cart" action={() => {}} />
          </div>
        </div>
      </section>

      <SuggestedProducts />
    </div>
  );
}
