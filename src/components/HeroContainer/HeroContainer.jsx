import React from "react";


function HeroContainer() {
  return (
    <>
    <div
    style={{marginBottom:"50px"}}
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active"  data-bs-interval="3000">
          <img
            src="../images/Coffee 3.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="../images/Coffee 5.webp"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="../images/Coffee 6.webp"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="../images/Coffee 7.webp"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            src="../images/Coffee 8.webp"
            className="d-block w-100"
            alt="..."
          />
        </div>
        
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    </>
  );
}

export default HeroContainer;
