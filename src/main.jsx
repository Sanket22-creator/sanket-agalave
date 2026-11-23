import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import BlogPost from "./pages/BlogPost";
import { LanguageProvider } from "./i18n";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </HashRouter>
    </LanguageProvider>
  </React.StrictMode>
);
