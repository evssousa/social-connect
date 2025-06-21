import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='bg-white shadow p-4 flex gap-4 text-blue-600 font-semibold'>
            <Link to={'/'}>Login</Link>
            <Link to={'/feed'}>Feed</Link>
            <Link to={'/perfil'}>Perfil</Link>
        </div>
    )
}