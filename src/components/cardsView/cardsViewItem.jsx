import React from "react";

const CardsViewItem = ({name, price, color, img}) => {
  return (
    <div className="card">
      <div className="card-title">
        <h2>{name}</h2>
      </div>
      <div className="card-color">{color}</div>
      <div className="card-product_image">
        <img src={img} alt="card-image"/>
      </div>
      <div className="cta">
        <div className="card-product__price">${price}</div>
        <button className="addto-cart">Add to cart</button>
      </div>
    </div>
  );
};

export default CardsViewItem;