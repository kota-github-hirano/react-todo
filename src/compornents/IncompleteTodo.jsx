import React from "react";

export const IncompleteTodo = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              {/* DOMで処理する際に何番目の要素か間違えないように keyを設定する */}
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/* 関数に引数を入れるときは新しくアロー関数[()=>]を定義する。しないと毎回呼び出されてしまう */}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
