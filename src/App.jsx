import React, { useState } from "react";
import "./styles.css";
//作成したコンポーネントの読込
import { InputTodo } from "./compornents/InputTodo";
import { IncompleteTodo } from "./compornents/IncompleteTodo";
import { CompleteTodo } from "./compornents/CompleteTodo";

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
      {/* propsで引数渡し。変数も関数も可能 */}
      {/* 子での宣言={親での宣言} */}
      <InputTodo
        TodoText={TodoText}
        onChange={onCangeTotoText}
        onClick={onClickAdd}
      />
      <IncompleteTodo
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo completeTodos={completeTodos} onClickBuck={onClickBuck} />
    </>
  );
};
