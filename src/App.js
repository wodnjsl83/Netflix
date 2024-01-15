import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/containers/Main";
import Login from "./pages/member/Login";
import { Route, Routes } from "react-router-dom";
import JoinPage from "./pages/member/JoinPage";
import MainPage2 from "./pages/MainPage2";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/Mainpage2" element={<MainPage2 />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
