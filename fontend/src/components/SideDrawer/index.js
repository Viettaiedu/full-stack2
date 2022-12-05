import { Link } from "react-router-dom";

import "./SideDrawer.css";

function SideDrawer({ show, click }) {
  const sideDrawerClass = ["sidedrawer"];
  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")} onClick={click}>
      <ul className="sidedrawer__list">
      <li className="sidedrawer__item">
          <Link className="sidedrawer__link" to="/">Home</Link>
        </li>
        <li className="sidedrawer__item">
          <Link className="sidedrawer__link" to="/cart">
             <i className="fa-solid fa-cart-shopping"></i>
                 Cart
            <span >0</span>
          </Link>
        </li>
       
      </ul>
    </div>
  );
}

export default SideDrawer;
