import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src="https://media.istockphoto.com/id/1130150680/photo/blog-and-information-website-concept-workplace-background-with-text.webp?b=1&s=170667a&w=0&k=20&c=EzGuwxXxfKXFsQZmwfjTRlbczUd_z614kgP_yishwdE=" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3" style={{fontFamily:'cursive'}}>Share Your Thought here !</h1>
      <p className="lead fw-400">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <Link to="/all"><button type="button" className="btn btn-success btn-lg px-4 me-md-2">Explore More</button></Link>
        <Link to="/all"><button type="button" className="btn btn-outline-dark btn-lg px-4">All Blogs</button></Link>

      </div>
    </div>
  </div>
</div>



    </>
  )
}

export default Home