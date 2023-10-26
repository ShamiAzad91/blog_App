import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const [title, setTitle] = useState("world cup");
  const [description, setDescription] = useState("Awesome blog website on the internet ");
  const [image, setImage] = useState("shdhjdjkkslsj");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(!auth){
        navigate("/signin")
    }
    
  },[])
 

const handleAddBlog = async(e)=>{
  e.preventDefault();
  try {
    console.log(title,description,image);
    if(!title || !description || !image){
      alert('plz include all the fields');
    return 
    }
    let myauth = JSON.parse(localStorage.getItem('user'))._id;
     console.log('hheee',myauth);
 let myToken = JSON.parse(localStorage.getItem('token'));
 console.log(`my token is ${myToken}`);

    

    let result = await fetch(`http://localhost:8000/api/blog/add`,{
      method:'post',
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
        <form onSubmit={handleAddBlog}>
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
            Add Blog
          </button>

        </form>
      </div>
    </div>
  </div>
  )
}

export default AddBlog