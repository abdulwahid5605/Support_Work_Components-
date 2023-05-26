import React, { Fragment, useState, useContext, useEffect } from "react";
import Month from "./Month";
import CalenderHeader from "./CalenderHeader";
import SiderBar from "./SiderBar";
import { getMonth } from "./utils";
import GlobalContext from "../context/GlobalContext";

export default function Calender() {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <Fragment>
      <div className="h-screen flex flex-col">
        <CalenderHeader />
        <div className="flex flex-1">
          <SiderBar />
          <Month month={currentMonth} />
        </div>
      </div>
    </Fragment>
  );
}
