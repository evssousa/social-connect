import { Link, useNavigate, useLocation } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const botaoSairFeed = location.pathname === "/feed"

    function handleLogout() {
        // Remove o "login"
        localStorage.removeItem("usuario_logado")
        navigate("/login")
    }

    return (
        // <div className="bg-white shadow p-4 flex gap-4 text-blue-600 font-semibold">
        //     <Link to={"/"}>Login</Link>
        //     <Link to={"/feed"}>Feed</Link>
        // </div>

        <nav className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <Link to={"/"} className="text-xl font-bold">Social Connect</Link>
            {botaoSairFeed && (
                <button onClick={handleLogout} className="bg-white text-blue-600 font-semibold px-4 py1 rounded hover:bg-gray-200 cursor-pointer">
                    Sair
                </button>
            )}
        </nav>
    )
}