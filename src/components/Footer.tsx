export default function Footer() {
  return (
    <footer className="mt-10 bg-gray-800 p-6 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center">
        <p className="text-sm">
          © 2024 Meu Blog. Todos os direitos reservados.
        </p>
        <div className="mt-4">
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:meuemail@dominio.com" className="hover:underline">
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
