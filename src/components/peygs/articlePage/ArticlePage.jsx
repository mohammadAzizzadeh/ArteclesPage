import { useParams } from "react-router-dom";
import Footer from "../../footer/Footer";
import Navbar from "../../navbar/Navbar";
import stayle from "./ArticlePage.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Spiner from "../../spiner/spinner";

function ArticlePage() {
  const [article, setArticles] = useState({});
  const [isloading, setIsLoading] = useState(false);
  const params = useParams();
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`http://localhost:8000/articles/${params.id}`)
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
    <div>
      <Navbar title="خوش آمدید" />
      <div className={stayle.ArticlePageWraap}>
        <div className="container">
          {isloading ? (
            <Spiner />
          ) : (
            <>
              <h1>{article.title}</h1>
              <div className={stayle.articleinfo}>
                <span> {article.data}: تاریخ</span>
                <span> {article.athor}</span>
                <span> خواندن {article.redinghTime} دقیقه ای </span>
              </div>
              <img src={"https://cinemavehicles.com/images/F142566123.jpg"} />
              <p>{article.cantent}</p>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ArticlePage;
