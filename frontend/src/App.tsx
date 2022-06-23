import { Routes, Route } from "react-router-dom";
import "./style/App.scss";
import Header from "@/components/Header";
import Index from "@/router/Index";
import Search from "@/router/Search";
import Index from "@/router/Index";
import Abstarct from "@/components/Abstracr";
import Reviews from "@/components/reviews";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search">
            {["anime", "novel", "music", "game"].map((type) => (
              <Route path={`${type}`}>
                <Route path="" element={<Search category={type} />} />
                <Route path="tag/:tag" element={<Search category={type} />} />
              </Route>
            ))}
          </Route>
          <Route path='/subject/:id' element={<Abstarct />}/>
          <Route path="/subject/:id/Abstract" element={<Abstarct />} />
          <Route path="/subject/:id/reviews" element={<Reviews />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
