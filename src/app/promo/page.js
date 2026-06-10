import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function promoPage() {
  return (
    <>
      <Navbar />
        <main className="p-10 min-h-[80vh]">
          <h1 className="text-4xl font-bold text-pink-500 text-center mb-10">
            Current Promotions
          </h1>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-pink-100 p-6 rounded-xl shadow-lg">
              <h2 className="font-bold">
                Buy 1 Get 1
              </h2>
            </div>

            <div className="bg-pink-100 p-6 rounded-xl shadow-lg">
              <h2 className="font-bold">
                20% Discount
              </h2>
            </div>

            <div className="bg-pink-100 p-6 rounded-xl shadow-lg">
              <h2 className="font-bold">
                Free Cookie
              </h2>
            </div>
          </div>
      </main>
      <Footer/>
    </>
  );
}