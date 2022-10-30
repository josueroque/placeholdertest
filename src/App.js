import Comment from "./components/Comment";
import Menu from "./components/Menu";
import Photos from "./components/Photos";
import Modal from "./components/Modal";
import { Routes, BrowserRouter, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/comment" element={<Comment />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/photos/:id" element={<Modal />} />
          <Route path="/" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
