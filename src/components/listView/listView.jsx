import React from "react";
import ListViewItem from "./listViewItem";

const ListView = ({items}) => {
  return(
    <div className="products-wrapper__view-mode">
      {items.map((item, index) => (
      <ListViewItem key={index}{...item} />
      ))
    }
  </div>
  )
};

export default ListView;