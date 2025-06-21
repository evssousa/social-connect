export default function UserProfileCard({ nome, usuario, bio }) {
  return (
    <div className="bg-white rounded-lg shadow p-5 max-w-sm mx-auto">
      {/* Parte superior com "foto de perfil" falsa */}
      <div className="flex items-center gap-3 mb-3">
        <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 font-bold text-xl">
          {nome[0]}
        </div>
        <div>
          <p className="font-semibold text-lg">{nome}</p>
          <p className="text-sm text-gray-500">@{usuario}</p>
        </div>
      </div>

      {/* Biografia */}
      <p className="text-gray-700 text-sm mb-4">
        {bio}
      </p>

      {/* Botão de seguir */}
      <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition">
        Seguir
      </button>
    </div>
  )
}
