import React from "react";
import './navbar.css'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
   <div>
    <div className="nav">
      <ul>
        <li>
          <Link to="/rent">Rent Car</Link>
        </li>
        <li>
          <Link to="/admin">Overview Cars</Link>
        </li>

      </ul>
    </div>
    </div>
  );
};
export default Navbar;