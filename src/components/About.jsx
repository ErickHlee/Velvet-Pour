import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">- </span>
              from uddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obssession with
              detail - from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">
                More than +12000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt1.png" alt="grid-img1" />
        </div>

        <div className="md:col-span-6">
          {/* <div className="noisy" /> */}
          <img src="/images/abt2.png" alt="grid-img2" />
        </div>

        <div className="md:col-span-3">
          <div className="noisy" />
          <img src="/images/abt5.png" alt="grid-img5" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src="/images/abt3.png" alt="grid-img3" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <img src="/images/abt4.png" alt="grid-img4" />
        </div>
      </div>
    </div>
  );
};

export default About;
