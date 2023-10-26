import React from "react";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-evenly bg-dark text-white pt-2 pb-5">
        <div className="col-md-3 pt-4">
          <h5 className="pb-2">Tech Azad</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit <br />
            . Optio tempore ipsa ipsam corrupti quae cupiditate ullam <br />
            tempora illum, eum fugiat?
          </p>
        </div>
        <div className="col-md-3 pt-4">
          <h5 className="pb-2">important Links</h5>
          <p className="link-light text-decoration-none">Home</p>
          <p className="link-light text-decoration-none">ABout </p>
          <p className="link-light text-decoration-none">Contact</p>
        </div>
        <div className="col-md-3 pt-4">
          <h5>Contact Us</h5>
          <p>
            kokar <br />
            Ranchi,Jharkhand <br />
            Rims <br />
            834008
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
