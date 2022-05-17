import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [incompleteTodos, setincompleteTodos] = useState([
    "aaaaa",
    "iiiiiiiii"
  ]);
  const [completeTodos, setcompleteTodos] = useState(["uuuu", "eeeeee"]);
  return (
    <>
      <div className="input-area">
        {/* Reactの場合はclassではなくclassName */}
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                {/* DOMで処理する際に何番目の要素か間違えないように keyを設定する */}
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
