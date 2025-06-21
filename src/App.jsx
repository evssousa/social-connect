import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Feed from "./pages/Feed"
import Perfil from "./pages/Perfil"

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>  
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
