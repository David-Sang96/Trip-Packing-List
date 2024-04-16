import { useState } from "react";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [item, setItem] = useState([]);

  const handleDelete = (id) => {
    const leftItems = item.filter((item) => item.id !== id);
    setItem(leftItems);
  };

  const handleToggle = (id) => {
    setItem(
      item.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const totalItem = item.length;
  const totalPacked = item.filter((item) => item.packed).length;
  const percentage = Math.round((totalPacked / totalItem) * 100) || 0;

  return (
    <div>
      <h1>🌲 Far Away 💼</h1>
      <Form setItem={setItem} item={item} />
      <PackingList
        item={item}
        handleDelete={handleDelete}
        handleToggle={handleToggle}
        setItem={setItem}
      />
      <Stats item={totalItem} packed={totalPacked} percentage={percentage} />
    </div>
  );
}

export default App;
