import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrollableRating from "./components/UncontrollableRating/UncontrollableRating";
import Accordion from "./components/Accordion/Accordion";
import OnOf from "./components/OnOf/OnOf";
import UncontrollableInput from "./components/UncontrollableInput/UncontrollableInput";
import CustomSelect from "./components/CustomSelect/CustomSelect";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [collapsed, setCollapsed] = useState<boolean>(true);
  let [on, setOn] = useState(false);

  return (
    <div className="App">
      {/*<Rating onClick={setRatingValue} ratingValue={ratingValue}/>*/}
      {/*<UncontrollableRating/>*/}
      {/*<OnOf setOn={setOn} on={on}/>*/}
      {/*<UncontrollableInput/>*/}
      {/*<Accordion title={'Menu'}*/}
      {/*           setAccordionCollapsed={() => {*/}
      {/*             setCollapsed(!collapsed)*/}
      {/*           }}*/}
      {/*           collapsed={collapsed}*/}
      {/*           items={*/}
      {/*             [*/}
      {/*               {title: 'Dima', value: 1},*/}
      {/*               {title: 'Aliya', value: 2},*/}
      {/*               {title: 'Dasha', value: 3},*/}
      {/*               {title: 'Masha', value: 4},*/}
      {/*             ]*/}
      {/*           }*/}
      {/*           clickFn={(value, title) => {*/}
      {/*             alert(`${value} ${title}`);*/}
      {/*           }*/}
      {/*           }/>*/}
      <CustomSelect options={
        [
          {value: 1, title: 'Dima'},
          {value: 2, title: 'Aliya'},
          {value: 3, title: 'Dasha'},
          {value: 4, title: 'Masha'},
        ]
      }/>
    </div>
  );
}

export default App;
