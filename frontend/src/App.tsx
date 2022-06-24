import { Routes, Route, useParams } from "react-router-dom";
import "./style/App.scss";
import Header from "@/components/Header";
import Index from "@/router";
import Abstarct from "./components/Abstracr";
import Reviews from "./components/reviews";

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
