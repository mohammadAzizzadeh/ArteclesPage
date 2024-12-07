import staylee from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <div className={staylee.hedearWrapper}>
      <div className="container">
        <div className={staylee.hedear}>
          <h1>{props.title}</h1>

          <ul>
            <li>
              <Link to="/"> لیست مقالات </Link>
            </li>
            <li>
              <Link to={"/Create-Articles"}>مقاله جدید</Link>
            </li>
            <li>
              <Link to="/about"> دربار ما </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
