import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./index.css";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
      <div className = 'm-4 '>
        <Shop />
        <button className='m-9 pl-3 bg-gray-400 rounded-lg md:w-56 border-solid border-4 border-grey-800 p-2 inline-block' onClick={() => setLogin(false)}>
          Выйти
        </button>
        </div>
      </>
    );
  } else {
    return (
      <>
      <div className = ' flex items-center flex-col '>
        <h2 className = ' m-5 text-xl uppercase  text-black font-bold"'>Нужно залогиниться!</h2>
        <button className= 'm-5 bg-gray-400 rounded-lg md:w-56 border-solid border-4 border-grey-800 p-2 inline-block' onClick={() => setLogin(true)}>
          Войти
        </button>
        </div>
             
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));