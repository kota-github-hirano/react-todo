import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [TodoText, setTodoText] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState([
    //"aaaaa",
    //"iiiiiiiii"
  ]);
  const [completeTodos, setcompleteTodos] = useState([]);
  //const [completeTodos, setcompleteTodos] = useState(["uuuu", "eeeeee"]);

  const onCangeTotoText = (event) => setTodoText(event.target.value);
  /** 変数eventのevent.target.valueに値は保持される*/
  const onClickAdd = () => {
    if (TodoText === "") return; //1行なら{}もいらないのでreturnで返る用にする
    //alert(TodoText);
    const newTodos = [...incompleteTodos, TodoText];
    setincompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    //指定したindexから1つを削除
    newTodos.splice(index, 1);
    //上書き
    setincompleteTodos(newTodos);
    //alert(newTodos);
  };

  const onClickComplete = (index) => {
    const newTodos2 = [...incompleteTodos];
    //alert("完了")
    //完了のTODOに追加
    const newConpleteTodos = [...completeTodos, incompleteTodos[index]];
    setcompleteTodos(newConpleteTodos);
    //未完了のTODOから削除
    newTodos2.splice(index, 1);
    setincompleteTodos(newTodos2);
  };

  const onClickBuck = (index) => {
    const newConpleteTodos2 = [...completeTodos];
    newConpleteTodos2.splice(index, 1);
    setcompleteTodos(newConpleteTodos2);

    const newTodos3 = [...incompleteTodos, completeTodos[index]];
    setincompleteTodos(newTodos3);
  };

  return (
    <>
      <div className="input-area">
        {/* Reactの場合はclassではなくclassName */}
        <input
          placeholder="TODOを入力"
          value={TodoText}
          onChange={onCangeTotoText}
        />
        {/* onChangeで変更を反映する */}
        <button onClick={onClickAdd}>追加</button>
      </div>
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
    </>
  );
};
