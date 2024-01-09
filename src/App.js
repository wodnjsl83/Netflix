import "./App.css";
import Header from "./components/Header";
import Main from "./pages/containers/Main";
import Login from "./pages/member/Login";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
