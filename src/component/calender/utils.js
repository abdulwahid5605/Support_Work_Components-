import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
  const year = dayjs().year();
  // the line below represents the first day of the month
  // .day will tell us the day i.e sunday=0 , saturday=1
  const getFirstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();

  let currentMonthCount = 0 - getFirstDayOfTheMonth;

  // where rows=5 and columns=7, fill is used to fill up the array
  const dayMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount));
    });
  });
  return dayMatrix;
}
