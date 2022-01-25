import React, { useEffect, useState } from "react";
import styles from "./CartItem.module.css";

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);
  const [productData, setProductData] = useState();


  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  useEffect(() => {
    fetchData()
  },[item])

  const fetchData = () => {
    fetch(`http://localhost:5000/singleProduct/${item.product_id ? item.product_id : item.id }`)
    .then(res => res.json())
    .then(data => {
      if(data){
        setProductData(data.data)
      }
    })
  }

  return (
    <>
    {
      productData?.name &&
      <div className={styles.cartItem}>
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{productData?.name}</p>
        <p className={styles.details__desc}>{productData?.description}</p>
        {/* <p className={styles.details__price}>$ {item.price}</p> */}
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className={styles.actions__deleteItemBtn}
        >
         delete
        </button>
      </div>
    </div>}
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
