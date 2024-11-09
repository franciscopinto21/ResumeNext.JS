import Link from "next/link"; // Importando a tag Link do Next.js

export default function Navbar() {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link href="/" className="text-xl text-white">
            Home
          </Link>
        </li>
        <li>
          <Link href="/resume" className="text-xl text-white">
            Resume
          </Link>
        </li>
        <li>
          <Link href="/projects" className="text-xl text-white">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/demos" className="text-xl text-white">
            Demos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
