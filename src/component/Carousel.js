import { useState } from "react";
import React from "react";
import { Carouseltem } from "./Carouseltem";

// import "./Carousel.css";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const item = [
    {
      description:
        '"Our house turned out better than what we expected. Veronica created an environment that is cozy, beautiful and most importantly, safe for our toddler. We can’t wait to work with her again ."',
      name: "—  Julie D.",
      color: "blue",
    },

    {
      description:
        '"I was completely blown away on install day. I am kicking myself for not finding Casa Vilora Interiors 2.5 years ago when we first moved. Your taste is impeccable!" ',

      name: "—  Erin G.",
      color: "green",
    },

    {
      description:
        '"Thank you Veronica for all your hard work you put into our home over the last year. I am blessed to know you and I recommend you to everyone."',
      name: "—  Rani C.",
      color: "pink",
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= item.length) {
      newIndex = item.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className="carousel overflow-hidden">
      <div
        className="inner whitespace-nowrap"
        style={{ transform: `translate(-${activeIndex * 100}%) ` }}
      >
        {item.map((item) => {
          return <Carouseltem item={item} />;
        })}
      </div>

      <div className="carousel-buttons p-2.5 h-14 w-screen flex justify-between cursor-pointer bg-slate-800">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
          className="button-arrow bg-none border-none relative bottom-80 text-white"
        >
          <span className="material-symbols-outlined text-5xl">arrow_back_ios</span>
        </button>

        <div className="indicators w-5 flex justify-between items-center mt-5">
          {item.map((item, index) => {
            return (
              <button
                onClick={() => {
                  updateIndex(index);
                }}
                className="indicator-buttons border-none cursor-pointer w-20 m-px bg-none text-white"
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex? "text-white": "text-black"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
          className="button-arrow bg-none border-none relative bottom-80 text-white"
        >
          <span class="material-symbols-outlined text-5xl">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
