import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";
import Button from "@mui/material/Button";

export default function NavBar() {
  const activeLinkStyle = {
    fontWeight: "bold",
    color: "blue",
  };


  return (
    <>
      <div className={styles.navbar}>
        <span>SolveX</span>
        <NavLink
          exact
          to="/"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/admission"
          style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
        >
          Admission Process & Fee
        </NavLink>

        <Link to='/login'>
        <Button variant="contained" className={styles.btn}>
          Login
        </Button>
        </Link>
      
      </div>

    </>
  );
}

