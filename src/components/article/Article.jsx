import stayl from "./article.module.css";
import img from "./../../assets/imgs/جاوا-اسکریپت.png";
function Article(props) {
  return (
    <div className={stayl.articleWrapper}>
      <img src={props.article.imgUrl} />
      <h3> {props.article.title} </h3>
      <p>خواندن {props.article.redinghTime} دقیقه ای</p>
    </div>
  );
}
export default Article;
