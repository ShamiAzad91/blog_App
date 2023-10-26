import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      let result = await fetch(`http://localhost:8000/api/blog/all`);
      result = await result.json();
      // console.log('result is',result)
      result = result.blog;
      setBlogs(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-3 mb-3 pb-2 border-solid">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {blogs.map((item, index) => {
          return (
            <div className="col" key={item._id}>
              <div className="card">
                <img
                  // src={`${blogs.image}`}
                  src="https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=600"
                  className="card-img-top"
                  alt="default.jpg"
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <p className="card-text"><small className="text-muted">PostedBy : {item.author.name}</small></p>

                  <Link to={`/blog/single/${item._id}`} className="btn btn-primary">
                    View Blog
                  </Link>
                </div>
              </div>
            </div>
          );
        })}

      
      </div>
    </div>
  );
};

export default AllBlog;
