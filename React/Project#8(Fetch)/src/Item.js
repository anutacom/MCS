import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
    if (!info) {
      return null;
    }
  }

  return (
    <>
    <div className = 'pl-3 m-4 '>
      <div className = "md:flex">
        <img className = " m-4 rounded-lg md:w-56"src={info.image} alt="" />
        <div className="item-info">
          <h2 className = "m-4 uppercase tracking-wide text-sm text-black font-bold">{info.name}</h2>
          <p className = "m-4 mt-2 text-gray-600">{info.desc}</p>
        
        <div className =' m-10 flex items-center '>
          <button className = 'border-solid border-4 border-grey-800 p-2 inline-block'
            
            disabled={total === 0}
            onClick={handleRemoveClick}
          >
            -
          </button >
          <h3 className = 'p-2 inline-block  uppercase  text-black font-bold'>{total ? total : ""}</h3>
          <button  className = 'border-solid border-4 border-grey-800 p-2 inline-block' onClick={handleAddClick}>
            +
          </button>
          </div>
          </div>
        </div>
     </div>
    </>
  );
}