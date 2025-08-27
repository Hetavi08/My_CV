import React from "react";
import Header from "../Common Pages/Header";
import Footer from "../Common Pages/Footer";
import { projectData } from "../Data/Projectdata";

const Project = () => {
  return (
    <>
      <Header />

      <div className="container-fluid bg-light py-5">
        <div className="container px-3 px-md-4">
          {/* Title */}
          <div className="row mb-4">
            <div className="col-12">
              <h1 className="fw-bold text-center text-md-start">Projects</h1>
            </div>
          </div>

          {/* Project Items */}
          {projectData.map((v, i) => (
            <div
              className="row align-items-center pt-5 pb-5 gy-4"
              key={i}
            >
          
              <div
                className={`col-12 col-md-6 ${i % 2 === 0 ? "order-2 order-md-1" : "order-1"}`}
              >
                <h5 className="fw-bold">{v.title}</h5>
                <p className="text-muted">{v.description}</p>
                <p className="text-muted mb-0">
                  <strong>Languages:</strong> {v.tech}
                </p>
              </div>

              <div
                className={`col-12 col-md-6 ${i % 2 === 0 ? "order-1 order-md-2" : "order-2"}`}
              >
                <img
                  src={v.image}
                  alt={`${v.title} Preview`}
                  className="img-fluid rounded shadow-sm"
                  style={{
                    height: "auto",
                    maxHeight: "400px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Project;
