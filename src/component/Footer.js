import React from "react";
import { Link } from "react-router-dom";
// import "./Footer.css"

const Footer = () => {
  return (
    <div className="main-container bg-gray-900 text-slate-200  text-xs w-full h-80 flex items-center flex-col justify-center">
      <div className="italic">
        <p>
          Through wisdom a house is built, and by understanding it is
          established; By knowledge the rooms are filled with all precious and
        </p>
        <p className="flex items-center justify-center">pleasant riches.</p>
        <p className="flex items-center justify-center">Proverbs 24: 3-4</p>
      </div>

      <div className="flex items-center flex-row justify-around w-full my-10">
        <div>
          <Link to="/clientportal">Client Portal</Link>
          <Link to="/legal">Legal</Link>
        </div>

        <div className="flex items-center flex-row justify-around w-1/2">
          <Link to="/faqs">FAQ'S</Link>
          <Link to="/testimonials">TESTIMONIALS</Link>
          <Link to="/reviewus">REVIEW US</Link>
        </div>

        <div className=" flex items-center flex-col justify-center ">
          <div className="flex items-center flex-col justify-center">
            <p>Casa Vilora Interiors</p>
            <p>Katy TX 77494</p>
          </div>
          <div className="flex items-center flex-col justify-center my-2">
            <p>281-751-7552</p>
            <Link to="/email">info@casavilorainteriors.com</Link>
          </div>
        </div>
      </div>

      <div className=" tracking-widest">
        <p>ALL RIGHTS RESERVED © 2019 BY CASA VILORA INTERIORS</p>
      </div>
    </div>
  );
};

export default Footer;
