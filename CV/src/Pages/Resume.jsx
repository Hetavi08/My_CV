import React from "react";
import Header from "../Common Pages/Header";
import Footer from "../Common Pages/Footer";



const Resume = () => {
  return (
    <>
      <Header />

      <div className="container-fluid p-4 p-md-5 bg-light">
        <div className="container">
          {/* Resume Title */}
          <div className="row mb-4 align-items-center">
            <div className="col-12 col-md-6">
              <h1 className="fw-bolder text-center text-md-start">Resume</h1>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end mt-3 mt-md-0">
              <a
               href="/CV_HETAVI.pdf" target="_blank" download rel="noopener noreferrer"
              >
                <i className="bi bi-download me-2"></i>Download Resume
              </a>
            </div>
          </div>

          {/* Work Experience */}
          <div className="row mt-4">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <h4 className="fw-bold text-center text-md-start">
                Work <br className="d-none d-md-block" /> Experience
              </h4>
            </div>

            <div className="col-12 col-md-6">
              <div className="mb-4">
                <p className="mb-1">Feb 2025 to Sep 2025</p>
                <h5 className="fw-bold">Front-End Developer Trainee</h5>
                <h6 className="text-muted">Amar Infotech</h6>
                <p className="text-muted text-wrap">
                  Worked on developing responsive and interactive web pages
                  using HTML, CSS, Bootstrap, and JavaScript. Gained hands-on
                  experience with React for building dynamic UI components and
                  enhancing user experience.
                </p>
              </div>
            </div>
          </div>

          <hr className="my-5" />

          {/* Education */}
          <div className="row mt-4">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <h4 className="fw-bold text-center text-md-start">Education</h4>
            </div>

            <div className="col-12 col-md-6">
              {/* Diploma */}
              <div className="mb-4">
                <p className="mb-1">2021 - 2024</p>
                <h5 className="fw-bold">Diploma in Information Technology</h5>
                <h6 className="text-muted">
                  Government Polytechnic for Girls (GTU)
                </h6>
                <p className="text-muted text-wrap mb-0">
                  Studied core subjects including Data Structures, Web
                  Development, Software Engineering, and Database Management.
                  Participated in various technical events and completed
                  multiple academic projects using modern web technologies.
                </p>
                <p className="text-muted mb-0">
                  <strong>Aggregate:</strong> CPI - 6.81 | CGPA - 7.18
                </p>
              </div>

              {/* SSC */}
              <div className="mb-4 pt-3">
                <p className="mb-1">SSC - 2021</p>
                <h5 className="fw-bold">Hebron High School</h5>
                <p className="text-muted mb-0">
                  <strong>Aggregate:</strong> 72%
                </p>
              </div>
            </div>
          </div>

          <hr className="my-5" />

          {/* Skills */}
          <div className="row mt-4">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <h4 className="fw-bold text-center text-md-start">
                Skills <br /> & Expertise
              </h4>
            </div>

            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>JavaScript</li>
                    <li>Tailwind</li>
                    <li>React JS</li>
                    <li>Photoshop</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul className="list-unstyled">
                    <li>GitHub</li>
                    <li>Communication</li>
                    <li>Problem-Solving</li>
                    <li>Teamwork & Collaboration</li>
                    <li>Time Management</li>
                    <li>Organization</li>
                    <li>Adaptability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Resume;
