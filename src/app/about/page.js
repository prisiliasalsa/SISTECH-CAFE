import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <>
          <Navbar />
          <main className="max-w-3xl mx-auto p-10 min-h-[80vh]">
            <h1 className="font-bold text-pink-500 text-4xl mb-6">
              About Sistech Cafe
            </h1>

            <p>
              Sistech Cafe is a local coffee shop that
              serves high-quality coffee while supporting
              women empowerment and community growth.
            </p>
          </main>
          <Footer/>
        </>
      );
}