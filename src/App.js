import { useState, useRef } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import LifeCycle from "./Lifecycle";

// const dummyList = [
//   {
//     id: 1,
//     author: "hippo",
//     content: "hi 1",
//     emotion: 5,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 2,
//     author: "abc",
//     content: "hi 2",
//     emotion: 4,
//     create_date: new Date().getTime(),
//   },
//   {
//     id: 3,
//     author: "mojo",
//     content: "hi 3",
//     emotion: 2,
//     create_date: new Date().getTime(),
//   },
// ];
function App() {
  const [data, setData] = useState([]); // editor, list 에서 함께 쓸 data
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(data.map((it) => (it.id == targetId ? { ...it, content: newContent } : it)));
  };
  return (
    <div className="App">
      <LifeCycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
