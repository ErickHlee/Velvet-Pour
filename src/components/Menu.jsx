import React, { useRef, useState } from "react";
import { sliderLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const contentRef = useRef();
  const directionRef = useRef(1);
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    const fromX = directionRef.current === 1 ? -100 : 100;

    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 1 });
    gsap.fromTo(
      ".details",
      { opacity: 0 },
      { opacity: 1, duration: 0.5, delay: 0.25 },
    );
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, xPercent: fromX },
      { xPercent: 0, opacity: 1, duration: 1, ease: "power1.inOut" },
    );
  }, [currentIndex]);

  const totalCockTails = sliderLists.length;

  const goToSlide = (index) => {
    const newIndex = (index + totalCockTails) % totalCockTails;

    setCurrentIndex(newIndex);
  };

  const goToPrev = () => {
    directionRef.current = -1;
    goToSlide(currentIndex - 1);
  };

  const goToNext = () => {
    directionRef.current = 1;
    goToSlide(currentIndex + 1);
  };

  const getCocktailAt = (indexOffSet) => {
    return sliderLists[
      (currentIndex + indexOffSet + totalCockTails) % totalCockTails
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCockTail = getCocktailAt(1);

  return (
    <div id="menu" area-labelledby="menu-heading">
      <img
        src="/images/slider-left-leaf.png"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.png"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      <nav className="cocktail-tabs" area-label="Cocktail Navigation">
        {sliderLists.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => {
                if (index !== currentIndex) {
                  directionRef.current = index > currentIndex ? 1 : -1;
                }
                goToSlide(index);
              }}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button className="text-left" onClick={goToPrev}>
            <span>{prevCocktail.name}</span>
            <img
              src="/images/right-arrow.png"
              alt="right arrow"
              aria-hidden="true"
            />
          </button>

          <button className="text-left" onClick={goToNext}>
            <span>{nextCockTail.name}</span>
            <img
              src="/images/left-arrow.png"
              alt="left arrow"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
