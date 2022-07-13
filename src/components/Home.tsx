import React from "react";
import { Outlet } from "react-router"
import { Link } from "react-router-dom";
import { ProductModel } from "../models/Product";
import "./Home.css"

export default class Home extends React.Component {




   render() {

      return (<>
         <h1>Welcome to My Site</h1>
         {/* <nav className="nav">
    <Link to={""}>home-page</Link>
    <Link to={"/login"}>login</Link>
    <Link to={"/products"}>products list</Link>
    <Link to={"/about"}>about site</Link>
    <Link to={"/manager"}>manager</Link>
    </nav> */}
         <nav className="nav nav-pills nav-justified">
            <Link className="nav-link" to={""} >home-page</Link>
            <Link className="nav-link" to={"/login"}>login</Link>
            <Link className="nav-link"  to={"/products"}>products list</Link>
            <Link className="nav-link"to={"/about"}>about site</Link>
            <Link className="nav-link" to={"/manager"}>manager</Link>
         </nav>
         <Outlet />
      </>)
   }
}