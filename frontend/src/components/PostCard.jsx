export default function PostCard({ nome, usuario, conteudo, data }) {
  return (
    <div className="bg-white rounded-lg shadow p-4 mb-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center text-blue-700 font-bold">
          {nome[0]}
        </div>
        <div>
          <p className="font-semibold">{nome}</p>
          <p className="text-sm text-gray-500">@{usuario} • {data}</p>
        </div>
      </div>

      <p className="text-gray-800">{conteudo}</p>
    </div>
  )
}
