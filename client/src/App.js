import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import AllBlog from "./components/blog/AllBlog";
import Home from "./components/Home";
import SingleBlog from "./components/blog/SingleBlog";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import PrivateComponents from "./components/PrivateComponents";
import AddBlog from "./components/blog/AddBlog";
import UpdateBlog from "./components/blog/UpdateBlog";
import MyBlog from "./components/blog/MyBlog";
import PageNotFound from "./components/PageNotFound";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<PageNotFound />} />

          
          <Route element={<PrivateComponents />}>
            <Route path="/all" element={<AllBlog />} />
            <Route path="/add" element={<AddBlog />} />
            <Route path="/blog/single/:id" element={<SingleBlog />} />
            <Route path="/blog/update/:id" element={<UpdateBlog />} />
            <Route path="/blog/myblog" element={<MyBlog />} />
          </Route>

          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
