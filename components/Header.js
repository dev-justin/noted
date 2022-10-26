import Link from "next/link";
import { MdNote } from "react-icons/md";

function Header() {
  return (
    <header className="bg-brand-card">
      <nav className="max-w-7xl mx-auto px-4 py-3 text-brand-text">
        <Link href="/">
          <a className="flex items-center gap-2 hover:text-brand-bg transition duration-300 ease-out">
            <MdNote className="text-4xl" />
            <span className="text-3xl font-bold">Noted.</span>
          </a>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
