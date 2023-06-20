import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "hippo",
    content: "hi 1",
    emotion: 5,
    create_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "abc",
    content: "hi 2",
    emotion: 4,
    create_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "mojo",
    content: "hi 3",
    emotion: 2,
    create_date: new Date().getTime(),
  },
];
function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
