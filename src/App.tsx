import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from "./components/Rating/Rating";
import {Clock} from "./components/Clock/Clock";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [collapsed, setCollapsed] = useState<boolean>(true);
  let [on, setOn] = useState(false);

  return (
    <div className="App">
      <Clock/>
    </div>
  );
}

export default App;
