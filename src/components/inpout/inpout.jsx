import stayle from "./inpuot.module.css";

function Input(props) {
  return (
    <div className={stayle.inputWwraper}>
      <label htmlFor="">{props.label}</label>
      <input name={props.name} type="text" onChange={props.HandelCheng} />
    </div>
  );
}
export default Input;
