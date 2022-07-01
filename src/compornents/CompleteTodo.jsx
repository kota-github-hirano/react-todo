import React from "react";

export const CompleteTodo = (props) => {
  const { completeTodos, onClickBuck } = props;
  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBuck(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
