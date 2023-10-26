import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    // console.warn("apple")
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className="container-fluid bg-dark">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <button className="btn btn-warning fw-bold">
            <span>Blog</span>Hub
          </button>
        </Link>

        {auth ? (
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link
                to="/all"
                className="nav-link active fw-bold"
                aria-current="page"
              >
                Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link fw-bold text-light">
                Add Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog/myblog" className="nav-link fw-bold text-light">
                My Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/signin"
                onClick={logout}
                className="nav-link fw-bold text-light"
              >
                Logout({JSON.parse(auth).name})
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/signup" className="nav-link fw-bold text-light">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link fw-bold text-light">
                Signin
              </Link>
            </li>
          </ul>
        )}
      </header>
    </div>
  );
};

export default NavBar;
