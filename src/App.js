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
import DetailPage1 from './pages/detailPages/DetailPage1';
import DetailPage2 from './pages/detailPages/DetailPage2';
import DetailPage3 from './pages/detailPages/DetailPage3';
import DetailPage4 from './pages/detailPages/DetailPage4';
import DetailPage5 from './pages/detailPages/DetailPage5';
import DetailPage6 from './pages/detailPages/DetailPage6';
import DetailPage7 from './pages/detailPages/DetailPage7';
import DetailPage8 from './pages/detailPages/DetailPage8';
import DetailPage9 from './pages/detailPages/DetailPage9';
import DetailPage10 from './pages/detailPages/DetailPage10';
import DetailPage11 from './pages/detailPages/DetailPage11';
import DetailPage12 from './pages/detailPages/DetailPage12';
import DetailPage13 from './pages/detailPages/DetailPage13';
import DetailPage14 from './pages/detailPages/DetailPage14';
import DetailPage15 from './pages/detailPages/DetailPage15';

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
      <div className="fixed top-0 left-0 w-full h-2  z-50">
        <div
          className="h-full bg-primary"
          style={{ width: `${scrollProgress}%`, transition: "width 0.2s ease" }}
        ></div>
      </div>
      <Router>
        <main className="relative z-10 lg:pb-[29rem] md:pb-[25rem] pb-[65rem]">
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/latest" element={<Latest />} />
              <Route path="/contact" element={<Contact />} />

              <Route path="/latest" element={<Latest />} />
              <Route path="/latest/1" element={<DetailPage1 />} />
              <Route path="/latest/2" element={<DetailPage2 />} />
              <Route path="/latest/3" element={<DetailPage3 />} />
              <Route path="/latest/4" element={<DetailPage4 />} />
              <Route path="/latest/5" element={<DetailPage5 />} />
              <Route path="/latest/6" element={<DetailPage6 />} />
              <Route path="/latest/7" element={<DetailPage7 />} />
              <Route path="/latest/8" element={<DetailPage8 />} />
              <Route path="/latest/9" element={<DetailPage9 />} />
              <Route path="/latest/10" element={<DetailPage10 />} />
              <Route path="/latest/11" element={<DetailPage11 />} />
              <Route path="/latest/12" element={<DetailPage12 />} />
              <Route path="/latest/13" element={<DetailPage13 />} />
              <Route path="/latest/14" element={<DetailPage14 />} />
              <Route path="/latest/15" element={<DetailPage15 />} />
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
