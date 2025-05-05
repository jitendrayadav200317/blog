import react from "react";
import login from '../pages/Login'
import createPost from '../pages/CreatePost'
import author from '../pages/Author'
import Hero from "./Hero"
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Header = ()=>{
    return (
        <nav class="navbar">
        <div class="logo">
        <h1>BLOG APP</h1>
        </div>
        <ul class="nav-links">
            <li><a href="Hero">Aman</a></li>
            <li><a href="createPost">Create Post</a></li>
            <li><a href="author">Authors</a></li>
            <li><a href="#">Logout</a></li>
            <li><a href="login">login</a></li>
        </ul>
        {/* <div class="menu-toggle">&#9776;</div> */}
    </nav>
    )
}
export default Header;