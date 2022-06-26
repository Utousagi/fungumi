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
import Character from "./components/Characters";
import CharacterPage from "./components/CharacterPage";
import Favourite from "./components/Favourite";

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
          <Route path="/subject/:id/reviews" element={<Reviews />} />
          <Route
            path="subject/:id/character"
            element={<Character type={"character"} />}
          />
          <Route
            path="subject/:id/staff"
            element={<Character type={"staff"} />}
          />
          <Route path="character/:id" element={<CharacterPage />} />
          <Route path="character/:id" element={<CharacterPage />} />
          <Route path="/user/:id" element={<Favourite />} />
          <Route path="/user/:id/favourite" element={<Favourite />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
