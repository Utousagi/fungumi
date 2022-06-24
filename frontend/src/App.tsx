import { Routes, Route, useParams } from "react-router-dom";
import "./style/App.scss";
import Header from "@/components/Header";
import Index from "@/router";
<<<<<<< HEAD
import Abstarct from "./components/Abstracr";
import Reviews from "./components/reviews";
=======
import { useState } from "react";
import AuthModal from "@/components/AuthModal";
>>>>>>> 1082f95382ec26dcf1ac518c899dbe0b40079cbc

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path='/subject/:id' element={<Abstarct />}/>
          <Route path="/subject/:id/Abstract" element={<Abstarct />} />
          <Route path="/subject/:id/reviews" element={<Reviews />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
