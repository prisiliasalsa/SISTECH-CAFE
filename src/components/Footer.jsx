export default function Footer() {
  return (
    <footer className="bg-pink-400 text-white py-8">
      <div className="flex justify-center gap-6 text-2xl mb-2">
        <img
            src="/instagram.png"
            alt="Instagram"
            className="w-6 h-6 brightness-0 invert contrast-200 hover:scale-125 duration-300"
            />
        <img
            src="/twitter.png"
            alt="twitter"
            className="w-6 h-6 brightness-0 invert contrast-200 hover:scale-125 duration-300"
            />
        <img
            src="/whatsapp.png"
            alt="whatsapp"
            className="w-6 h-6 brightness-0 invert contrast-200 hover:scale-125 duration-300"
            />
      </div>

      <p className="text-center">
        Made with Love by Prisilia Salsabila Loleh
      </p>
    </footer>
  );
}