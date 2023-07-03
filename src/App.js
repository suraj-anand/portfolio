import { Routes, Route } from "react-router-dom";
import "./styles/App.css"
import Index from "./pages/Index";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
