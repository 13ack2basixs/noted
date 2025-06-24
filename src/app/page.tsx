import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Index() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <h1>Hello, Hong Wei here!</h1>
      <span>Welcome to Noted! I create this app to jot down notes and learning points so I can always refer back in the future. Since you are already here why not take a look?</span>

      <Footer />
    </div>
  );
}
