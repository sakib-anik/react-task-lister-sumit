import { useState } from "react";
export default function Menu() {
  const [selectId, setSelectId] = useState(null);
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Asus",
    },
    {
      id: 2,
      name: "HP",
    },
    {
      id: 3,
      name: "Lenovo",
    },
  ]);

  const handleChange = (itemId, e) => {
    setItems(
      items.map((item) => {
        if (item.id == itemId)
          return {
            ...item,
            name: e.target.value,
          };
        return item;
      })
    );
  };

  const handleSelect = (id) => {
    setSelectId(id);
  };

  return (
    <div className="man">
      {items.map((item) => (
        <div key={item.id} className="">
          <input
            type="text"
            onChange={(e) => handleChange(item.id, e)}
            value={item.name}
            className="border-2"
          />{" "}
          <button
            className="border-2"
            type="button"
            onClick={(e) => handleSelect(item.id)}
          >
            Select
          </button>
        </div>
      ))}
      <div className="">
        Name : {items.find((item) => item.id === selectId)?.name}
      </div>
    </div>
  );
}
