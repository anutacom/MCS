import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul >
      {props.items.map((item) => (
        <li key={item.id}>
          <Item info={item} />         
          <button
            className=" w-24 h-10 m-12 font-bold border-solid border-2 border-black bg-slate-300 rounded" 
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
          
        </li>
      ))}
    </ul>
  );
}
