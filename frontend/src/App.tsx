import { Route, Routes } from "react-router-dom";
import "@/style/App.scss";
import Header from "@/components/Header";
import Index from "@/router/Index";
import SubjectAbstract from "@/router/subject/SubjectAbstract";
import SubjectReview from "@/router/subject/SubjectReview";
import Search from "@/router/Search";
import SearchIndex from "@/router/search/SearchIndex";
import SearchTag from "@/router/search/SearchTag";
import SearchTag$Tag from "@/router/search/SearchTag$Tag";
import CharacterPage from "./components/CharacterPage";
import Favourite from "./components/UserFavourite";
import Likes from "./components/UserLike";
import Review from "./components/UserReview";
import User from "./components/User";
import Info from "./components/UserInfo";
import Subject from "./router/Subject";
import SubjectCharacter from "./router/subject/SubjectCharacter";


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/search">
            {["anime", "novel", "music", "game"].map((type) => (
              <Route
                key={type}
                path={`${type}`}
                element={<Search category={type} />}
              >
                <Route path="" element={<SearchIndex />} />
                <Route path="tag" element={<SearchTag />} />
                <Route path="tag/:tag" element={<SearchTag$Tag />} />
              </Route>
            ))}
          </Route>
          <Route path="/subject/:id" element={<Subject />}>
            <Route path="abstract" element={<SubjectAbstract />} />
            <Route path="review" element={<SubjectReview />} />
            <Route path="character" element={<SubjectCharacter />} />
            <Route path="staff" element={<SubjectCharacter />} />
          </Route>
          <Route path="character/:id" element={<CharacterPage />} />
          <Route path="/user/:id" element={<User />}>
            <Route path="" element={<Info />} />

            <Route path="favourite" element={<Favourite />} />
            <Route path="Like" element={<Likes />} />
            <Route path="review" element={<Review />} />
            <Route path="info" element={<Info/>} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
