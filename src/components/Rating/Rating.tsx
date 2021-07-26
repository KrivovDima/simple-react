import React from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
  onClick: (value: RatingValueType) => void
  ratingValue: RatingValueType
}

function Rating(props: RatingPropsType) {
  return (
    <div>
      <Star selected={props.ratingValue > 0} onClick={props.onClick} value={1}/>
      <Star selected={props.ratingValue > 1} onClick={props.onClick} value={2}/>
      <Star selected={props.ratingValue > 2} onClick={props.onClick} value={3}/>
      <Star selected={props.ratingValue > 3} onClick={props.onClick} value={4}/>
      <Star selected={props.ratingValue > 4} onClick={props.onClick} value={5}/>
    </div>
  );
}

export default Rating;

type StarPropsType = {
  selected: boolean
  onClick: (value: RatingValueType) => void
  value: RatingValueType
}

function Star(props: StarPropsType) {
  return <span onClick={() => {props.onClick(props.value)}}> {props.selected ? <b>Star </b> : 'Star '} </span>
}