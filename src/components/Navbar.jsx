import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center p-6 shadow-sm">
      {/* Logo */}
      
      <Link
        href="/"
        className="text-pink-400 font-bold text-2xl hover:text-pink-500"
        >
        SISTECH CAFE
        </Link>

      {/* Menu */}
      <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
        <a href="/menu" className="hover:text-pink-400">
          Menu
        </a>

        <a href="/about" className="hover:text-pink-400">
          About Us
        </a>

        <a href="promo" className="hover:text-pink-400">
          Promo
        </a>

        <button className="bg-pink-400 text-white px-4 py-2 rounded-md hover:scale-105 hover:bg-pink-500 duration-300">
          Login
        </button>
      </div>
    </nav>
  );
}