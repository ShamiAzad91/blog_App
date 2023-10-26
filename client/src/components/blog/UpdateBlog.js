import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const params = useParams();


  useEffect(() => {
    handleSingleBlog();
  }, []);

  const handleSingleBlog = async () => {
    try {
      let result = await fetch(
        `http://localhost:8000/api/blog/single/${params.id}`
      );
      result = await result.json();
      console.log(result,'10');
    //   console.log(result.blog.author._id, "20");
 result = result.blog;
 setTitle(result.title);
 setDescription(result.description);
 setImage(result.image);

    //   setBlog(result.blog);
    } catch (err) {
      console.log(err);
    }
  };



const handleUpdateBlog = async(e)=>{
  e.preventDefault();
  try {
   
 
 let myToken = JSON.parse(localStorage.getItem('token'));
 console.log(`my token is ${myToken}`);

    

    let result = await fetch(`http://localhost:8000/api/blog/update/${params.id}`,{
      method:'put',
      body:JSON.stringify({title,description,image}),
      headers:{
        'Content-Type':'application/json',
        authorization:`Bearer ${myToken}`
      }
    });

    result = await result.json();
    console.log("hi product",result);
    if(result.status === 'failed'){
      alert(`${result.message}`)
      return 
    }
   alert(`${result.message}`);
   navigate("/all");
// navigate("/")

    
  } catch (err) {
    console.log(err);
    
  }
}

  return (
    <div className="container d-flex justify-content-center ">
    <div className="row justify-content-evenly signup">
      <div className="col">
        <h1>Add BLog Here</h1>
        <br />
        <form onSubmit={handleUpdateBlog}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              title
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="enter a title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
         
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
             Description
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="enter a description"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
           
            />
         
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Image
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="enter a image url"
              value={image}
              onChange={(e)=>setImage(e.target.value)}
             
            />
          </div>

          <button type="submit" className="btn btn-primary mb-3">
            update Blog
          </button>

        </form>
      </div>
    </div>
  </div>
  )
}

export default UpdateBlog