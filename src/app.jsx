import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Error from "./pages/error";
import Apropos from "./pages/apropos";
import Logement from "./pages/logement";
import Footer from "./components/footer";
import Header from "./components/header";


const App = () => {
  return (
    <BrowserRouter>
      <section className="principale">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} errorElement={<Error />} />
          <Route path="*" element={<Error />} />
          <Route path="/apropos" element={<Apropos />} />

          <Route path="/logement/:id" element={<Logement />} />

        </Routes>
        <Footer />
      </section>

    </BrowserRouter>
  );
};

export default App;
