import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Index() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <h1>Noted — Jot it down. Make it stick.</h1>
      <Footer />
    </div>
  );
}
