import React from "react"
import "../styles/Navbar.css";
const Navbar = (): JSX.Element => {
  return (
    <nav className="nav">
      <ul className="nav-item">
        <li className="nav-link">home</li>
        <li className="nav-link">skills</li>
        <li className="nav-link">project</li>
        <li className="nav-link">CONTACT me</li>
      </ul>
    </nav>
  )
}
export default Navbar