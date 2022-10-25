import { useState } from "react";

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
  }

  if (!info) {
    return null;
  }

  return (
    <>
    
       
          <h2 className = "uppercase tracking-wide text-lg text-black font-bold">{info.name}</h2>
          <p className = "mt-2 text-black text-sm" >{info.desc}</p>
        
        
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
          
          
       
     </>
  );
}