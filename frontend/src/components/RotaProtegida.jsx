import { Navigate } from "react-router-dom"

export default function RotaProtegida({ children }) {
    const logado = localStorage.getItem("usuario_logado")

    // Se não estiver logado, redireciona para login
    if (!logado) {
        return <Navigate to={"/login"} />
    }

    // Se estiver logado, mostra a página normalmnete
    return children
}