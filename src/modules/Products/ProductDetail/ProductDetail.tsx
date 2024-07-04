import CategoryChain from "src/shared/components/CategoryChain/CategoryChain";
import styles from "./productdetail.module.css";
import productImage from "src/shared/assets/images/shoes.png";
import star from "src/shared/assets/icons/Icon-star.svg";
import IconButton from "src/shared/components/Buttons/IconButton/IconButton";
import SuggestedProducts from "src/shared/components/SuggestedProducts";
import QuantitySelector from "src/shared/components/QuantitySelector";

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

export default function ProductDetails() {
  const { name, description, image, auxImages, rating, price, colors, sizes, itemsLeft } = productObject;

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

          <QuantitySelector itemsLeft={itemsLeft} />

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
