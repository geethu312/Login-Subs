import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar/NavBar";
import Subscription from "./Pages/Subscription/Subscription";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
