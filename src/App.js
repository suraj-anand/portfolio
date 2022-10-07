import { Routes, Route, Navigate } from "react-router-dom";

import "./styles/App.css"
import INDEX from "./pages/INDEX";
import axios from "axios";
import Favicon from "react-favicon";
import PAGENOTFOUND from "./pages/PAGENOTFOUND";
import ADMIN from "./pages/ADMIN";


function App() {
  axios.defaults.withCredentials = true;
  return (
    <Routes>
      <Route path="/" element={<INDEX />} />
      <Route path="/admin" element={<ADMIN />} />
      <Route path="*" element={<PAGENOTFOUND />} />
    </Routes>
  );
}

export default App;
