import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {
  const [email, setEmail] = useState("shami@test.com");
  const [password, setPassword] = useState("123456");
  const navigate = useNavigate();
  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate("/")
    }

  },[])

const handleSubmit = async(e)=>{
  e.preventDefault();
  try {
    console.log(email,password);
    if( !email || !password){
      alert('plz include all the fields');
    return 
    }

    let result = await fetch(`http://localhost:8000/api/signin`,{
      method:'post',
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
      }
    });

    result = await result.json();
    if(result.status === 'failed'){
      alert(`${result.message}`)
      return 
    }
  //  console.log("hi signup",result.user);
  // result = result.user
  alert(`Hello ${result.user.name},you Signin successfully`);
  localStorage.setItem("user",JSON.stringify(result.user));
  localStorage.setItem("token",JSON.stringify(result.auth));
navigate("/all")

    
  } catch (err) {
    console.log(err);
    
  }
}

  return (
    <div className="container d-flex justify-content-center ">
    <div className="row justify-content-evenly signup">
      <div className="col">
        <h1>Signin Here</h1>
        <br />
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
         
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="enter a email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
           
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="enter a password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
             
            />
          </div>

          <button type="submit" className="btn btn-primary mb-3">
            Sign in
          </button>
        <h6>Donot have an Account?<Link to="/signup">Signup here</Link></h6>

        </form>
      </div>
    </div>
  </div>
  )
}

export default Signin