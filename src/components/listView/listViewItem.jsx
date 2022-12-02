import React from "react";

const ListViewItem = ({name, price, color, img}) => {
  return (
    <div className="card_view">
      <div className="card-product__view">
        <img src={img} alt="card image" />
      </div>
      <div className="card-title_view">
        <h2>{name}</h2>
      </div>
      <div className="card-color">{color}</div>
      <div className="card-product__price">${price}</div>
      <button className="addto-cart">Add to cart</button>
    </div>
  );
};

export default ListViewItem;