import AboutUs from "./components/peygs/abuotUs/AbotUs";
import ArticlePage from "./components/peygs/articlePage/ArticlePage";
import CreateArticles from "./components/peygs/createArticles/CreateArticles";
import Home from "./components/peygs/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="ArticlePage/:id" element={<ArticlePage />} />
        <Route path="/Create-Articles" element={<CreateArticles />} />
      </Routes>
    </div>
  );
}

export default App;
