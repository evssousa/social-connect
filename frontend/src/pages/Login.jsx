import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    senha: ""
  })

  const [mensagem, setMensagem] = useState("")
  const [erro, setErro] = useState("")

  // Atualiza os campos do formulário
  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // Envia os dados para o backend
  async function handleSubmit(e) {
    e.preventDefault()
    setMensagem("")
    setErro("")

    try {
      const resposta = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })

      const dados = await resposta.json()

      if (resposta.ok) {
        setMensagem(dados.mensagem) // Login aceito
        
        // Salvando no localStorage (mantém mesmo após recarregar a página)
        localStorage.setItem("usuario_logado", "true")
        
        // Redireciona após login bem-sucedido (2segs)
        setTimeout(() => {
          navigate("/feed") 
        }, 2000)
      } else {
        setErro(dados.mensagem || "Erro desconhecido") // Login recusado
      }
    } catch (err) {
      setErro("Erro de conexão com o servidor.")
      console.error(err)
    }

    // ================================================================
    // Validação simples
    if (!form.email || !form.senha) {
      setErro("Preencha todos os campos.")
      return
    }

    // // Validação de email
    if (!form.email.includes("@") || !form.email.endsWith(".com")) {
      setErro("Formato de email inválido.")
      return
    }

    // // Validação de senha
    if (form.senha.length < 6) {
      setErro("A senha deve ter no mínimo 6 caracteres.")
      return
    }


    // ================================================================
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded p-6 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-4 text-blue-600 text-center">
          Acessar Social Connect
        </h2>

        <label className="block mb-2 text-sm font-semibold">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          placeholder="seu@email.com"
        />

        <label className="block mb-2 text-sm font-semibold">Senha</label>
        <input
          type="password"
          name="senha"
          value={form.senha}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 mb-4"
          placeholder="••••••••"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Entrar
        </button>

        {erro && (
          <p className="mt-4 text-center text-sm text-red-600">{erro}</p>
        )}
        {mensagem && (
          <p className="mt-4 text-center text-sm text-green-600">{mensagem}</p>
        )}
      </form>
    </div>
  )
}
