import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import "./styles/tailwind.css";
import { useState, useEffect } from "react";
import About from "./pages/About";
import Footer from "./components/common/Footer";
import Navigation from "./components/common/Navigation";
import Latest from "./pages/Latest";
import Contact from "./pages/Contact";
function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-heading">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-primary"
          style={{ width: `${scrollProgress}%`, transition: "width 0.2s ease" }}
        ></div>
      </div>
      <Router>
        <main className="relative z-10 pb-[29rem]">
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/latest" element={<Latest />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Navigation />
          </div>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
