import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: ["Alexandria"],
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
