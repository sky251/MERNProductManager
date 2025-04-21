import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CreatePage from "./pages/CreatePage";
import HomePage from "./pages/Homepage";
import { Toaster } from 'react-hot-toast'

function App() {
  

  return (
    <div className="w-[1140px] h-screen bg-gray-100 mx-auto">
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/create" element={<CreatePage/>} />
      </Routes>
    </div>
  );
}

export default App;
