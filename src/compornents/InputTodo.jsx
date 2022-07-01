import React from "react";

export const InputTodo = (props) => {
  //propsで受け渡した引数を分割代入[投げた時の変数名で引く]
  const { TodoText, onChange, onClick } = props;
  return (
    <div className="input-area">
      {/* Reactの場合はclassではなくclassName */}
      <input
        placeholder="TODOを入力"
        value={TodoText}
        onChange={onChange}
        //onChange={onCangeTotoText}
      />
      {/* onChangeで変更を反映する */}
      <button onClick={onClick} /*onClick={onClickAdd}*/>追加</button>
    </div>
  );
};
