export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div>
        <label htmlFor="item-name" className = 'font-serif text-base '>Название:  </label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="font-serif text-base font-light text-zinc-500 border border-slate-700"
        />
      </div>
      <div>
        <label htmlFor="item-description"className = 'font-serif text-base '>Описание:  </label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="font-serif text-base font-light text-zinc-500 border border-slate-700"
        />
      </div>
      <div className="form-footer">
        <div className="validation">{props.valid}</div>
        <input type="submit" className=" w-24 h-10  m-12 font-bold border-solid border-2 border-black bg-slate-300 rounded" value="Добавить" />
      </div>
    </form>
  );
}
