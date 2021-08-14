import React, {useMemo, useState} from "react";
import CustomSelect, {cityOptions} from "../CustomSelect/CustomSelect";


export function UseMemo() {
  let [count, setCount] = useState(0)

  const countIncr = () => {
    setCount(count + 1)
  }

  const countries: cityOptions[] = [
    {value: 1, country: 'Russia', title: 'Moscow', headcount: 10000000},
    {value: 2, country: 'Russia', title: 'Astrakhan', headcount: 700000},
    {value: 3, country: 'Russia', title: 'Sochi', headcount: 360000},
    {value: 4, country: 'Belarus', title: 'Minsk', headcount: 2000000},
    {value: 5, country: 'Belarus', title: 'Brest', headcount: 340000},
    {value: 6, country: 'Belarus', title: 'Grodno', headcount: 350000},
  ]

  const cityWord = useMemo(() => {
    return countries.filter(c => c.title.indexOf('o') !== -1)
  }, [countries])

  const cityLittlePopulation = useMemo(() => {
    return countries.filter(c => c.headcount < 1000000)
  }, [countries])

  return (
    <div>
      <button onClick={countIncr}>plus</button>
      {count}
      <CustomSelect options={countries}/>
      <CustomSelect options={cityWord}/>
      <CustomSelect options={cityLittlePopulation}/>
    </div>
  )
}

