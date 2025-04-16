import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Author from "./pages/Author";
import AuthorPosts from "./pages/AuthorPosts";
import CategoryPost from "./pages/CategoryPost";
import CreatePost from "./pages/CreatePost";
import Dashboard from "./pages/Dashboard";

import EditPost from "./pages/EditPost";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserProfile from "./pages/UserProfile";
import PageNotFound from "./components/PageNotFound";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      {/* Add this route to handle 404 errors */}
      <Route path="*" element={<PageNotFound />} />

      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreatePost />} />
      <Route path="/authors" element={<Author />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile/:id" element={<UserProfile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/posts/:id" element={<PostDetail />} />
      <Route path="/posts/categories/:category" element={<CategoryPost />} />
      <Route path="/posts/users/:id" element={<AuthorPosts />} />
      <Route path="/myposts/:id" element={<Dashboard />} />
      <Route path="/posts/:id/edit" element={<EditPost />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
