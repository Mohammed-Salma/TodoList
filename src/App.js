import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#191b1f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        direction: "rtl",
      }}
    >
      <TodoList />
    </div>
  );
}

export default App;
