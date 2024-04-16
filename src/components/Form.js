import React, { useState } from "react";

const Form = ({ setItem, item }) => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      return;
    }
    const newItem = { description, quantity, packed: false, id: Date.now() };
    setItem([...item, newItem]);
    setQuantity(1);
    setDescription("");
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🥰 trip?</h3>
      <select
        value={quantity}
        onChange={(e, v) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <input
        value={description}
        type="text"
        placeholder="Item..."
        onChange={(e) => setDescription(e.target.value)}
      />
      <button> Add</button>
    </form>
  );
};

export default Form;
