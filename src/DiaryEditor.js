import React, { useEffect, useState, useRef } from "react";
import styles from "./DiaryEditor.module.css";

const DiaryEditor = ({ onCreate }) => {
  useEffect(() => {
    console.log("update");
  });
  const [state, setState] = useState({ author: "", content: "", emotion: 1 });
  const { author, content, emotion } = state;
  const authorInput = useRef();
  const contentInput = useRef();

  const handleChangeState = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = () => {
    if (author.length < 1) {
      alert("작성자 1글자 이상 작성");
      authorInput.current.focus();
      return;
    }
    if (content.length < 5) {
      alert("내용 5글자 이상 작성");
      contentInput.current.focus();
      return;
    }
    onCreate(author, content, emotion);
    alert("저장 성공!");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className={styles.DiaryEditor}>
      <h2>오늘의 일기</h2>
      <div>
        <input ref={authorInput} name="author" value={author} onChange={handleChangeState} />
      </div>
      <div>
        <textarea ref={contentInput} name="content" value={content} onChange={handleChangeState} />
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

export default React.memo(DiaryEditor);
