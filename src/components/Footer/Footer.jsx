import React from "react";
import style from "./Footer.module.css";

function Footer() {
  let dt = new Date();
  let year = dt.getFullYear();
  return (
    <>
      <div className={style.footer}>
        <footer className="text-center text-lg-start text-dark">
          <div className="container px-5 py-2">
            <div className="row">
              <div className="col-lg-12 col-md-12 mb-12 px-5">
                <div
                  className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                  style={{
                    width: "150px",
                    height: "150px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src="../images/footerImg.jpg"
                    height="150"
                    alt=""
                    loading="lazy"
                  />
                </div>

                <p className="text-center">
                  Coffee is a beverage brewed from roasted coffee beans. Darkly
                  colored, bitter, and slightly acidic, coffee has a stimulating
                  effect on humans, primarily due to its caffeine content. It
                  has the highest sales in the world market for hot drinks.
                </p>
              </div>
            </div>
          </div>
          <div
            className="text-center p-3"
            // style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          >
            © {year} Copyright: AppleRocket
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
