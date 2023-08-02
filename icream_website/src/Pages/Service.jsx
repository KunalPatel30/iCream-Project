import React from "react";
import { Helmet } from "react-helmet";

function Service() {
  return (
    <div>
      {/* Header Start */}
      <div className="jumbotron jumbotron-fluid page-header" style={{ marginBottom: 90 }} >
        <div className="container text-center py-5">
          <h1 className="text-white display-3 mt-lg-5">Service</h1>
          <div className="d-inline-flex align-items-center text-white">
            <p className="m-0">
              <a className="text-white" href> Home </a>
            </p>
            <i className="fa fa-circle px-3" />
            <p className="m-0">Service</p>
          </div>
        </div>
      </div>
      {/* Header End */}

      {/* Services Start */}
      <div className="container-fluid py-3">
        <div className="container py-3">
          <div className="row">
            <div className="col-lg-6">
              <h1 className="section-title position-relative mb-5">Best Services We Provide For Our Clients</h1>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 pb-5 pb-lg-0" /></div>
          <div className="row">
            <div className="col-12">
              <div className="owl-carousel service-carousel">
                <div className="service-item">
                  <div className="service-img mx-auto">
                    <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-1.jpg" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: "-75px" }} >
                    <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5"> Quality Maintain </h5>
                    <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolorkasd lorem duo stet kasd justo</p>
                    <a href className="border-bottom border-secondary text-decoration-none text-secondary" >Learn More</a>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-img mx-auto">
                    <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-2.jpg" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: "-75px" }} >
                    <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Individual Approach</h5>
                    <p>Dolor nonumy sed eos sed lorem diam amet eos magna. Dolorkasd lorem duo stet kasd justo</p>
                    <a href className="border-bottom border-secondary text-decoration-none text-secondary">Learn More</a>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-img mx-auto">
                    <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-3.jpg" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: "-75px" }} >
                    <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Celebration Ice Cream</h5>
                    <p> Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor kasd lorem duo stet kasd justo </p>
                    <a href className="border-bottom border-secondary text-decoration-none text-secondary" >Learn More</a>
                  </div>
                </div>
                <div className="service-item">
                  <div className="service-img mx-auto">
                    <img className="rounded-circle w-100 h-100 bg-light p-3" src="img/service-4.jpg" style={{ objectFit: "cover" }} />
                  </div>
                  <div className="position-relative text-center bg-light rounded p-4 pb-5" style={{ marginTop: "-75px" }} >
                    <h5 className="font-weight-semi-bold mt-5 mb-3 pt-5">Delivery To Any Point</h5>
                    <p>
                      Dolor nonumy sed eos sed lorem diam amet eos magna. Dolor
                      kasd lorem duo stet kasd justo
                    </p>
                    <a href className="border-bottom border-secondary text-decoration-none text-secondary" >Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Services End */}

      {/* Testimonial Start */}
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h1 className="section-title position-relative text-center mb-5">
                Clients Say About Our Famous Ice Cream
              </h1>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="owl-carousel testimonial-carousel">
                <div className="text-center">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                  <h4 className="font-weight-light mb-4">
                    Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                    elitr dolore et eos labore, stet justo sed est sed. Diam sed
                    sed dolor stet amet eirmod eos labore diam
                  </h4>
                  <img className="img-fluid mx-auto mb-3" src="img/testimonial-1.jpg" alt />
                  <h5 className="font-weight-bold m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="text-center">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                  <h4 className="font-weight-light mb-4">
                    Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                    elitr dolore et eos labore, stet justo sed est sed. Diam sed
                    sed dolor stet amet eirmod eos labore diam
                  </h4>
                  <img className="img-fluid mx-auto mb-3" src="img/testimonial-2.jpg" alt />
                  <h5 className="font-weight-bold m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
                <div className="text-center">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4" />
                  <h4 className="font-weight-light mb-4">
                    Dolor eirmod diam stet kasd sed. Aliqu rebum est eos. Rebum
                    elitr dolore et eos labore, stet justo sed est sed. Diam sed
                    sed dolor stet amet eirmod eos labore diam
                  </h4>
                  <img className="img-fluid mx-auto mb-3" src="img/testimonial-3.jpg" alt />
                  <h5 className="font-weight-bold m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      <Helmet>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></script>
        <script src="lib/easing/easing.min.js"></script>
        <script src="lib/waypoints/waypoints.min.js"></script>
        <script src="lib/owlcarousel/owl.carousel.min.js"></script>
        <script src="lib/isotope/isotope.pkgd.min.js"></script>
        <script src="lib/lightbox/js/lightbox.min.js"></script>
        <script src="mail/jqBootstrapValidation.min.js"></script>
        <script src="mail/contact.js"></script>
        <script src="js/main.js"></script>
      </Helmet>

    </div>
  );
}

export default Service;
