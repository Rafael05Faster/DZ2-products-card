import React from "react";
import CardsViewItem from "./cardsViewItem";

const CardsView = ({items}) => {
  return <div className="products-wrapper">
    {items.map((item, index) => (
    <CardsViewItem
      key={index}
      {...item}
    />
    ))}
  </div>
};

export default CardsView;