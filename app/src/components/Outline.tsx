import { FC } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Nav: FC = () => {
  return (
    <>
      <div className="header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/test">Test</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>

      <Outlet />

      <Footer />
    </>
  );
};
