import React from "react";

const Stats = ({ item, packed, percentage }) => {
  if (!item) {
    return (
      <div className="stats">
        <em>Start adding some items to your packing list 💼👜</em>
      </div>
    );
  }

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got everything!Ready to go ✈️</em>
      ) : (
        <em>
          💼 You have {item} items on your list, and you already packed {packed}{" "}
          ({percentage}%)
        </em>
      )}
    </footer>
  );
};

export default Stats;
