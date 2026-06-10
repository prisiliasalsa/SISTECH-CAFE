import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-300">
      {/* Logo */}
      
      <Link
        href="/"
        className="text-pink-400 font-bold text-xl hover:text-pink-500"
        >
        SISTECH CAFE
        </Link>

      {/* Menu */}
      <div className="flex items-center gap-6">
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