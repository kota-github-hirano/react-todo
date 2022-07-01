import React from "react";

//キャメルケース＋文字列に変換+,区切り
const style = {
  backroundColor: "#c1ffff",
  width: "400px" /*横幅*/,
  height: "30px" /*縦幅*/,
  padding: "8px" /*内側の余白[上下左右8px]*/,
  margin: "8px" /*外側の余白*/,
  borderRadius: "8px" /*角丸*/
};

export const InputTodo = (props) => {
  //propsで受け渡した引数を分割代入[投げた時の変数名で引く]
  const { TodoText, onChange, onClick } = props;
  return (
    //<div className="input-area">
    <div style={style}>
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
