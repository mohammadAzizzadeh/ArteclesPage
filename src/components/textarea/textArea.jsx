import stayle from "./textArea.module.css";

function TextArea(props) {
  return (
    <div className={stayle.TextAreaWrapper}>
      <label htmlFor=""> {props.label} </label>
      <textarea onChange={props.HandelCheng}></textarea>
    </div>
  );
}
export default TextArea;
