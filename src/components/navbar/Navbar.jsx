import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h3 style={{ color: "red", marginLeft: "2rem" }}>Exersearch</h3>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#exercise">exercises</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
