import { Routes, Route } from "react-router-dom";
import "./style/App.scss";
import Header from "@/components/Header";
import Index from "@/router";
import { useState } from "react";
import AuthModal from "@/components/AuthModal";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
