import React, { useEffect, useState } from "react";
import styles from "./Products.module.css";

// Redux
import { connect } from "react-redux";

import Product from "./Product/Product";

const Products = ({ products }) => {
  const [allProduct, setallProduct] = useState([])
  useEffect( () => {
     fetch('http://localhost:5000/readProductData')
    .then(res => res.json())
    .then(data => {
      setallProduct(data.data)
    })
  },[])
  return (
    <div className={styles.products}>
      {allProduct && allProduct.length > 0 && allProduct.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
