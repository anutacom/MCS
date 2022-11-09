import { useState, useEffect } from "react";
import Item from "./Item.js";
import useFetch from './useFetch.js'

export default function Shop() {
  const [items, setItems] = useState([]);
  const {getData,loader} = useFetch()

  useEffect(()=>{
    
    getData('https://covid-shop-mcs.herokuapp.com')
    .then (data=>{
      setItems(data)
         console.log(data)})
    .catch(error=>console.error(error))
      },[getData])

    return (
    <div className="shop">
      {loader? 'Идёт загрузка...':''}
      {items.map((item) => (
        <Item key={item.id} info={item} />
              ))}
    </div>
  );
}
  

  