import React from "react";
import Header from "../Common Pages/Header";
import Footer from "../Common Pages/Footer";
import profile from "../assets/me.png";
import { Link } from "react-router-dom";
import "../CSS/Home.css"

const Home = () => {
  return (
    <>
      <Header />

      <div className="container-fluid home-container">
        <div className="row align-items-center text-center text-md-start">
          <div className="col-12 col-md-5 mb-5 mb-md-0">
            <div className="d-flex justify-content-center justify-content-md-end">
              <img src={profile} alt="Profile" className="img-fluid profile-img" />
            </div>
          </div>

          <div className="col-12 col-md-7">
            <div className="px-3 px-md-5">
              <h1 className="fw-bold display-1">Hello <span className="fs-5 text-dark">I'm Hetavi Desai</span></h1> 

              <h5 className="fw-bold mb-3">Front-End Developer</h5>
              <p className="mb-4 fw-normal text">
                Passionate about crafting sleek, responsive, and user-friendly
                <br />
                web experiences. With a strong foundation in React and <br />
                Bootstrap, I aim to transform ideas into engaging digital <br />
                realities. Always eager to learn and grow in this fast-paced
                <br />
                world of tech!
              </p>

              <div className="d-flex justify-content-center justify-content-md-start gap-3 flex-wrap">
                <Link to="/resume">
                  <button className="btn btn-circle btn-resume">Resume</button>
                </Link>

                <Link to="/projects">
                  <button className="btn btn-circle btn-projects">Projects</button>
                </Link>

                <Link to="/contact">
                  <button className="btn btn-circle btn-contact">Contact</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
