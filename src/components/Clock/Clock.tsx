import React, {useEffect, useState} from "react";

type ClockPropsType = {}

const refactorFormatElementClock = (element: number) => element < 10 ? `0${element}` : element


export const Clock: React.FC<ClockPropsType> = () => {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalClockID = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalClockID);
    }
  })

  return (
    <div>
      <span>{refactorFormatElementClock(date.getHours())}</span>
      :
      <span>{refactorFormatElementClock(date.getMinutes())}</span>
      :
      <span>{refactorFormatElementClock(date.getSeconds())}</span>
    </div>
  )
}

