import { useState } from "react";
import Navbar from "../../navbar/Navbar";
import stayle from ".././createArticles/CreateArticles.module.css";
import Input from "../../inpout/inpout";
import TextArea from "../../textarea/textArea";
import axios from "axios";
function CreateArticles() {
  const [Article, setArticle] = useState({
    title: "",
    date: "",
    message: "",
    redinghTime: "",
    athor: "",
    imageURL: "",
  });
  const HandrlChenghArticle = (ewente) => {
    setArticle((PrevState) => ({
      ...PrevState,
      [ewente.target.name]: ewente.target.value,
    }));
  };
  const handelChengmasseg = (ewente) => {
    setArticle((PrevState) => ({
      ...PrevState,
      message: ewente.target.value,
    }));
  };
  const HandelNewArticles = () => {
    axios.post("http://localhost:8000/articles", {
      id: 1,
      title: Article.title,
      athor: Article.athor,
      redinghTime: Article.redinghTime,
      message: Article.message,
      imageURL: Article.imageURL,
      date: Article.date,
    });
  };
  return (
    <>
      <Navbar />
      <div className={stayle.CreateArticlespage}>
        <div className="container">
          <h1>ساخت مقاله </h1>
          <Input label="عنوان" name="title" HandelCheng={HandrlChenghArticle} />
          <Input label="تاریخ" name="date" HandelCheng={HandrlChenghArticle} />
          <Input
            label=" مدت زمان خواندن"
            name="redinghTime"
            HandelCheng={HandrlChenghArticle}
          />
          <Input
            label="نویسنده"
            name="athor"
            HandelCheng={HandrlChenghArticle}
          />
          <Input
            label="عکس"
            name="imageURL"
            tyoe="text"
            HandelCheng={HandrlChenghArticle}
          />
          <TextArea HandelCheng={handelChengmasseg} label="متن" />
          <div className={stayle.DivBottun}>
            <button className={stayle.button} onClick={HandelNewArticles}>
              ارسال
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateArticles;
