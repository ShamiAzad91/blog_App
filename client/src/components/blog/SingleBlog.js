import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";

const SingleBlog = () => {
  const [blog, setBlog] = useState(null);
  const parms = useParams();
  const navigate = useNavigate();

  const auth = JSON.parse(localStorage.getItem("user"))._id;
  console.log(auth);

  useEffect(() => {
    handleSingleBlog();
  }, []);

  const handleSingleBlog = async () => {
    try {
      let result = await fetch(
        `http://localhost:8000/api/blog/single/${parms.id}`
      );
      result = await result.json();
      // console.log(result,'10');
      // console.log(result.blog.author._id, "20");

      setBlog(result.blog);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (blog_id) => {
    try {
      let ans = window.confirm("are you sure want to delete this blog ?");
      if (!ans) {
        return;
      }
      let result = await fetch(
        `http://localhost:8000/api/blog/remove/${blog_id}`,
        {
          method: "delete",
          headers: {
            authorization: `Bearer ${JSON.parse(
              localStorage.getItem("token")
            )}`,
          },
        }
      );
      result = await result.json();

      console.log(result, "41");
      if (result.status === "failed") {
        alert(`${result.message}`);
        return;
      }
      alert(`${result.message}`);

      navigate("/all");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-3">
      <div className="row d-flex justify-content-between">
        <div className="col-md-10">
          <div className="card mb-3" style={{ width: "50%" }}>
            <img
             src="https://media.istockphoto.com/id/913172354/photo/word-blog-of-color-wood.webp?b=1&s=170667a&w=0&k=20&c=NZ4e7vXE7pa-Rz_-39HBbkMvgK488Ru2Cus5FXnDujY="
              className="card-img-top"
              alt="..."
            />

            <div className="card-body">
              <h5 className="card-title">{blog?.title}</h5>
              <p className="card-text">{blog?.description}</p>
              <p className="card-text">
                <strong className="text-body-secondary">
                  author :{blog?.author?.name}
                </strong>
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  posted :{moment(blog?.createdAt).fromNow()}{" "}
                </small>
              </p>
              {auth === blog?.author?._id ? (
                <>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Link to={`/blog/update/${blog._id}`}><button className="btn btn-outline-success">Update</button></Link>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete{" "}
                    </button>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
