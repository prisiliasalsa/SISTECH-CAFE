import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function MenuPage() {
  return (
      <>
        <Navbar />
            <main className="p-10 min-h-[80vh]">
              <h1 className="text-4xl font-bold text-pink-500 text-center mb-10">
                Our Menu
              </h1>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Card Cappuccino */}
                <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition ">
                  <div className="flex justify-between items-center">
                   <div>
                      <h2 className="font-bold text-xl">
                        Cappuccino
                      </h2>

                      <p>
                        Rich espresso with milk foam.
                      </p>

                      <p className="text-pink-500 font-bold mt-3">
                        Rp23.000
                      </p>
                    </div>

                    <img
                      src="/cappucino.png"
                      alt="cappuccino"
                      className="w-32 h-32 object-cover rounded-lg"
                    />

                  </div>
                </div>

                {/* Card Matcha */}
                <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition ">
                  <div className="flex justify-between items-center">
                   <div>
                      <h2 className="font-bold text-xl">
                        Matcha Latte
                      </h2>

                      <p>
                        A perfect balance of premium matcha and fresh milk.
                      </p>

                      <p className="text-pink-500 font-bold mt-3">
                        Rp25.000
                      </p>
                    </div>

                    <img
                      src="/matcha-latte.png"
                      alt="matcha"
                      className="w-32 h-32 object-contain rounded-lg"
                    />
                  </div>
                </div>

                {/* Card Cookie */}
                <div className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition ">
                  <div className="flex justify-between items-center">
                   <div>
                      <h2 className="font-bold text-xl">
                        Chocolate Cookie
                      </h2>

                      <p>
                        Chocolate Cookie
                      </p>

                      <p className="text-pink-500 font-bold mt-3">
                        Rp15.000
                      </p>
                    </div>

                    <img
                      src="/chocolate-cookie.png"
                      alt="chocolate cookie"
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>

                
              </div>
            </main>
        <Footer/>
      </>
    );
}