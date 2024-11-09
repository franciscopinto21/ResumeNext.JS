export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex flex-grow flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">
          Bem-vindo ao meu Blog!
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Aqui você vai encontrar informações sobre minha carreira, projetos e
          muito mais.
        </p>
      </main>
    </div>
  );
}
