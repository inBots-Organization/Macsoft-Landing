import { Routes, Route} from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Navigation from "./components/Navbar";
import Home from "./pages/Home";
import BookDemo from "./pages/BookDemo";
import BuildAI from "./pages/BuildAI";

// Scroll to top on route change component
const ScrollToTop = () => {

  // In a real app, use layout effect, but this suffices for demo
  if (typeof window !== "undefined") window.scrollTo(0, 0);

  return null;
};

export default function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Update document direction based on language
    const dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <main className="dark text-foreground bg-background min-h-screen">
      <ScrollToTop />
      <Navigation />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<BookDemo />} path="/book-demo" />
        <Route element={<BuildAI />} path="/build-ai" />
      </Routes>
    </main>
  );
}
