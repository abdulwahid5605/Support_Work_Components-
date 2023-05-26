import React, { Fragment } from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import DropdownComponent from "./DropdownComponent.js";

import Times from "./Times.js";

import Time from "./Time.js";

const BookNow = (props) => {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  const onChange = (date) => {
    setDate(date);
  };

  const options = ["Service Details", "Discovery Phone Call", "Free"];
  // const defaultOption = options[0];

  return (
    <Fragment>
      <div className="m-10 p-28">
        <button className="hover:cursor-pointer  bg-white  text-black w-full flex align-center mb-10 ">
          <i class="bi bi-chevron-left"></i> <span className="ml-2">Back</span>
        </button>
        <div className="mb-20">
          <h1 className="text-4xl">Discovery Phone Call</h1>
          <p className="mt-10 font-thin">
            Check out our availability and book the date and time that works for
            you
          </p>
        </div>
        <div>
          <h2 className="text-2xl">Select a Date and Time</h2>
          <hr className="my-4" />
        </div>

        <div className="mt-10 grid gap-4 grid-cols-3 ">
          <div>
            <Calendar
              activeStartDate={new Date(2023, 0, 5)}
              // defaultView={Views.year}
              // formatDay={(locale, date) => formatDate(date, "d")}
              onChange={onChange}
              value={date}
              onClickDay={() => setShowTime(true)}
            />
            {console.log(date)}
          </div>

          <div className="ml-10 ">
            {date.length > 0 ? (
              <p>
                <span>Start:</span> {date[0].toDateString()}
                &nbsp; to &nbsp;
                <span>End:</span> {date[1].toDateString()}
              </p>
            ) : (
              <p>
                <span>Default selected date:</span> {date.toDateString()}
              </p>
            )}
            <p>No availability</p>

            <Time showTime={showTime} date={date} />

            <button className="hover:cursor-pointer mt-10 bg-gray-400 px-10 py-2 text-white">
              Check Next Availability
            </button>
          </div>

          <div>
            <button className="hover:cursor-pointer  bg-white  text-black w-full flex align-center justify-between">
              <span>Service Details</span> <i class="bi bi-chevron-down"></i>
            </button>
            <div>{props.info} </div>
            <hr className="my-4" />;
            <button className="hover:cursor-pointer  bg-gray-400 px-32 py-2 text-white">
              Next
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BookNow;
