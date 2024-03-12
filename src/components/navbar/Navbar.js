import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import App, { UserContext } from "../../App";
import { AppContext } from "../../context/appContext";
export default function Navbar() {
  const { user, setuser } = useContext(UserContext);
  const { cartItems } = useContext(AppContext);
  const values = Object.values(cartItems);
  const total = values.reduce((accumulator, elem) => {
    return accumulator + elem;
  }, 0);
  return (
    <div className="navbar">
      <div className="title">Irish Cafe</div>
      <div className="links">
        <Link to="/coffeeshop/"> Products </Link>
        <Link to="/coffeeshop/cart"> Cart({total}) </Link>
        <Link to="/coffeeshop/" onClick={() => setuser((prev) => null)}>
          Logout{" "}
        </Link>
      </div>
    </div>
  );
}
