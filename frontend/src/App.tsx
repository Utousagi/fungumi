import { Routes, Route, useParams } from "react-router-dom";
import "./style/App.scss";
import Header from "@/components/Header";
import Index from "@/router";
import Abstract from "./components/Abstracr";
import Reviews from "./components/Reviews";
import { useState } from "react";
import Character from "./components/Characters";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/subject/:id" element={<Abstract />} />
          <Route path="/subject/:id/Abstract" element={<Abstract />} />
          <Route path="/subject/:id/reviews" element={<Reviews />} />
          <Route path="/subject/:id/character" element={<Character />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
