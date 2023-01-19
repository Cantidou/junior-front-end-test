import React from "react";
import styles from "./Card.module.scss";

const Card = ({
  productName,
  productQuantity,
  mouses,
  sub,
  productWeight,
  discription,
  status,
}) => {
  const [selected, setSelected] = React.useState(false);
  const [unhovered, setUnhovered] = React.useState("Сказочное заморское яство");

  const toggleClass = () => {
    setSelected(!selected);
    setUnhovered("Сказочное заморское яство");
  };

  return (
    <div
      onClick={toggleClass}
      onMouseLeave={(event) => {
        event.target.parentElement.className.includes("selected") &&
          setUnhovered("Котэ не одобряет?");
      }}
      className={`${status ? "" : selected ? styles.selected : ""} ${
        status === "disabled" ? styles.disabled : ""
      }`}
    >
      <div className={styles.content}>
        <p
          className={
            selected && unhovered === "Котэ не одобряет?" ? styles.redText : ""
          }
        >
          {unhovered}
        </p>
        <h2>Нямушка</h2>
        <span>{productName}</span>
        <div className={styles.quantity}>
          <p>
            <span>{productQuantity}</span> порций
          </p>
          <p>
            <span>{mouses}</span> в подарок
          </p>
          {sub && <p>{sub}</p>}
        </div>
        <div className={styles.weight}>
          <p>
            {productWeight}
            <br />
            <span>кг</span>
          </p>
        </div>
      </div>
      <div
        className={`${styles.bottomText} ${status ? styles.disabledText : ""}`}
      >
        {status ? (
          `Печалька ${productName} закочился.`
        ) : selected ? (
          discription
        ) : (
          <p>
            Чего сидишь? Порадуй котэ, <span onClick={toggleClass}> купи.</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
