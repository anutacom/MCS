import React, { useState, useEffect } from "react";
import Item from "./Item.js";
export default function Shop() {
  const [items, setItems] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://covid-shop-mcs.herokuapp.com");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoader(true);
      }
    })();
  }, []);

  return (
    <>
    
        <ul className="ui-list">
        <li className="ui-item-list">
          {items.map((item) => (
            <div key={item.id}>
              <Item info={item} />
            </div>
          ))}
        </li>
      </ul>
    </>
  );
}

