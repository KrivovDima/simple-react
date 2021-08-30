import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrollableRating from "./components/UncontrollableRating/UncontrollableRating";
import Accordion from "./components/Accordion/Accordion";
import OnOf from "./components/OnOf/OnOf";
import UncontrollableInput from "./components/UncontrollableInput/UncontrollableInput";
import CustomSelect from "./components/CustomSelect/CustomSelect";
import UncontrollableAccordion from "./components/UncontrollableAccordion/UncontrollableAccordion";
import {Example1} from "./components/ReactMemo/ReactMemo";
import {UseMemo} from "./components/UseMemo/UseMemo";
import UseEffect from "./components/UseEffect/UseEffect";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [collapsed, setCollapsed] = useState<boolean>(true);
  let [on, setOn] = useState(false);

  return (
    <div className="App">
      <UseEffect/>
    </div>
  );
}

export default App;
