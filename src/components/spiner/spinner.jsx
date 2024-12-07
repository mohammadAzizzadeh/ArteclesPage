import "./spinner.css";

function Spiner() {
  return (
    <div className="loading-page">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default Spiner;
