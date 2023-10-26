import moment from 'moment';
import React, { useEffect, useState } from 'react';


const MyBlog = () => {
const [blogs,setBlogs] = useState([]);


useEffect(()=>{
    getmyBlogs();
},[])


const getmyBlogs = async()=>{
    try {
        let result = await fetch(`http://localhost:8000/api/blog/myblog`,{
            headers:{
                authorization:`Bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result = await result.json();
        console.log(result,'22222');
        setBlogs(result.blog)
        
    } catch (err) {
        console.log(err);
        
    }

}

  return (
    <div className='container mb-5'>
<div className="row row-cols-1 row-cols-md-3 g-4">
  
 {blogs?.map((item,index)=>{
    return(
        <div className="col" key={item._id}>
        <div className="card">
          <img src='https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=600' className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title"> {item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className='card-text'><small className='text-muted'>created : {moment(item?.createdAt).fromNow()}</small></p>
          </div>
        </div>
      </div>
    )
 })}
</div>

    </div>
  )
}

export default MyBlog