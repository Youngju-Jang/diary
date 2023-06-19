import { useState } from "react";
import styles from "./DiaryEditor.module.css";

const DiaryEditor = () => {
  const [state, setState] = useState({ author: "", content: "", emotion: 1 });
  const { author, content, emotion } = state;
  const handleChangeState = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = () => {
    console.log(state);
    alert("저장 성공!");
  };

  return (
    <div className={styles.DiaryEditor}>
      <h2>오늘의 일기</h2>
      <div>
        <input name="author" value={author} onChange={handleChangeState} />
      </div>
      <div>
        <textarea name="content" value={content} onChange={handleChangeState} />
      </div>
      <div>
        <select name="emotion" value={emotion} onChange={handleChangeState}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <button onClick={handleSubmit}>일기 저장하기</button>
    </div>
  );
};

export default DiaryEditor;
