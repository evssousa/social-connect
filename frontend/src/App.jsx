import { Routes, Route, Navigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Login from "./pages/Login"
import Feed from "./pages/Feed"
import RotaProtegida from "./components/RotaProtegida"

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route 
            path="/feed" 
            element={
              <RotaProtegida>
                <Feed />
              </RotaProtegida>
            } 
          />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
