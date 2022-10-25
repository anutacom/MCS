import { useState, useEffect } from "react";
import ItemsList from "./ItemsList";
import AddItem from "./AddItem";
import uuid from "react-uuid";

export default function Shop() {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");
  useEffect(() => {
    if (items) {
      console.log(items);
    }
    fetch("https://covid-shop-mcs.herokuapp.com", {
      method: "POST",
      body: JSON.stringify({ name: "name", desc: "desc" }),
      headers: { "Content-type": "application/json" }
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, [items]);

  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValid("Введите название");
      return;
    }
    if (!desc) {
      setValid("Введите описание ");
      return;
    }
    setItems([
      ...items,
      {
        id: uuid(),
        name: name,
        desc: desc
      }
    ]);

    setName("");
    setDesc("");
    setValid("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
    <div className ='flex items-center flex-col '>
      <div className = 'm-4'>
      <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
            />
      </div>
      <div className = ' uppercase  font-serif font-family:"Times New Roman" text-lg'>{items.length === 0 && <p >Добавьте первый товар</p>}</div>
      <div >
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
      </div>
      </div>
    </>
  );
}
