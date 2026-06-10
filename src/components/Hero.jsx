export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] text-center">
      <h1 className="text-5xl md:text-7xl font-bold text-pink-400 mb-2">
        SISTECH CAFE
      </h1>

      <p className="text-gray-700 mb-6">
        Local Coffee brewed by Extraordinary Women in Indonesia
      </p>

      <a href="/menu" className="bg-pink-400 text-white px-6 py-3 rounded-md hover:bg-pink-500 hover:scale-105  transition inline-block">
          See our Menu
        </a>
    </section>
  );
}