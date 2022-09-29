import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import { App } from "./components/App";

import Home from './components/routes/Home/Home';
import NotFound from './components/routes/NotFound/NotFound';
import AdoptMe from './components/routes/AdoptMe/AdoptMe';
import Donation from './components/routes/Donation/Donation';
import ContactMe from './components/routes/ContactMe/ContactMe';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Adoption" element={<AdoptMe />} />
        <Route path="Donation" element={<Donation />} />
        <Route path="ContactMe" element={<ContactMe />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
