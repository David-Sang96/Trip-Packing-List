import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ item, handleDelete, handleToggle, setItem }) => {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = item;

  if (sortBy === "description")
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = item.slice().sort((a, b) => a.packed - b.packed);

  return (
    <div className="list">
      {!!item.length ? (
        <>
          <ul>
            {sortedItems.map((item) => (
              <Item
                item={item}
                key={item.id}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
              />
            ))}
          </ul>
          <div className="actions">
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="input">Sort by input order</option>
              <option value="description">Sort by description</option>
              <option value="packed">Sort by pack status</option>
            </select>
            <button
              onClick={() => {
                const confirm = window.confirm(
                  "Are you sure you want to delete all items?"
                );
                if (confirm) setItem([]);
              }}
            >
              Clear List
            </button>
          </div>
        </>
      ) : (
        <h2>Create Your List</h2>
      )}
    </div>
  );
};

export default PackingList;
