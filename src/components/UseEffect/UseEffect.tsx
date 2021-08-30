import React, {useEffect, useState} from "react";

function UseEffect() {
  let [counter, setCounter] = useState(1)

  useEffect(() => {
    console.log('useEffect')
  })

  return (
    <div>
      Hello {counter}
      <div>
        <button onClick={() => {
          setCounter(counter + 1)
        }}>
          count
        </button>
      </div>
    </div>
  )
}

export default UseEffect;