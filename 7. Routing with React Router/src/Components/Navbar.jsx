import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <Link to="/">Home</Link>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <Link to="/about">About</Link>
          </li>
          <li style={{ display: "inline", marginRight: "10px" }}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
