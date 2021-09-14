import React, {useEffect, useState} from 'react';
import styles from './Clock.module.css'

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
      <div>
        <span>{refactorFormatElementClock(date.getHours())}</span>
        :
        <span>{refactorFormatElementClock(date.getMinutes())}</span>
        :
        <span>{refactorFormatElementClock(date.getSeconds())}</span>
      </div>

      <div className={styles.analogClock}>
        <div className={styles.secondArrow}
             style={{transform: `translateX(-50%) rotate(${date.getSeconds() * 6}deg)`}}></div>
        <div className={styles.hourArrow}
             style={{transform: `translateX(-50%) rotate(${date.getHours() * 30}deg)`}}></div>
        <div className={styles.minuteArrow}
             style={{transform: `translateX(-50%) rotate(${date.getMinutes() * 6}deg)`}}></div>
      </div>
    </div>

  )
}

