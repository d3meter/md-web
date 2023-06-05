import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Home isLoading={isLoading} />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
        </Route>
      </Routes>
      <ScrollToTop />
    </Router>
  );
}

export default App;
