import { useState } from 'react'

export default function LoginForm() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        alert('Usuário cadastrado com sucesso!')
        console.log(`
            Email: ${email}
            Senha: ${senha}
        `)
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <form onSubmit={handleSubmit} className='bg-white p-8 rounded-lg shadow-md x-full max-w-sm'>
                <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Social Connect 🚀</h1>
                <input 
                    type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required
                    className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <input 
                    type="password" value={senha} onChange={(e) => setSenha(e.target.value)} placeholder='Senha' required
                    className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                />
                <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-md houver:bg-blue-700 transition'>Entrar</button>
            </form>
        </div>
    )
}