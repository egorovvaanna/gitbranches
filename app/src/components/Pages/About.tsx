import { FC } from "react";
import { Outlet } from "react-router";

export const About:FC=()=>{
    return(
        <div className="foo">
            About Page
            <Outlet/>
        </div>
    )
}