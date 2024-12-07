import { useEffect, useState } from "react";
import Article from "../../article/Article";
import Navbar from "../../navbar/Navbar";
import stayled from "../home/home.module.css";
import axios from "axios";
import Footer from "../../footer/Footer";
import { Link } from "react-router-dom";
import Spiner from "../../spiner/spinner";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:8000/articles")
      .then((resulte) => {
        setArticles(resulte.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={stayled.homewrapper}>
      <Navbar title="خوش آمدید" />
      <div className="container">
        <h2>مقالات جدید</h2>

        {isloading ? (
          <Spiner />
        ) : (
          <div className={stayled.articles}>
            {articles.map((article) => (
              <Link to={`/ArticlePage/${article.id}`}>
                <Article article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
