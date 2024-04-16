import React from "react";

const Item = ({ item, handleDelete, handleToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
};

export default Item;
