import { Route, Routes } from "react-router-dom";
import "./style/App.scss";
import Header from "@/components/Header";
import Index from "@/router/Index";
import Abstract from "./components/Abstract";
import Reviews from "./components/Reviews";
import Search from "@/router/Search";
import SearchIndex from "@/router/search/SearchIndex";
import SearchTag from "@/router/search/SearchTag";
import SearchTag$Tag from "@/router/search/SearchTag$Tag";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search">
            {["anime", "novel", "music", "game"].map((type) => (
              <Route path={`${type}`} element={<Search category={type} />}>
                <Route path="" element={<SearchIndex />} />
                <Route path="tag" element={<SearchTag />} />
                <Route path="tag/:tag" element={<SearchTag$Tag />} />
              </Route>
            ))}
          </Route>
          <Route path="/subject/:id" element={<Abstract />} />
          <Route path="/subject/:id/Abstract" element={<Abstract />} />
          <Route path="/subject/:id/reviews" element={<Reviews page={1} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
