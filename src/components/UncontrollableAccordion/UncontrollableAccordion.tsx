import React, {useReducer, useState} from "react";

type UncontrollableAccordionPropsType = {
  title: string
}

type actionType = {
  type: string
}

const reducer = (state: boolean, action: actionType) => {
  if (action.type === 'TOGGLE-COLLAPSED') {
    return !state;
  }
  return state;
}

function UncontrollableAccordion(props: UncontrollableAccordionPropsType) {
  let [collapsed, dispatch] = useReducer(reducer, false);
  return (
    <div>
      <AccordionTitle title={props.title} onClick={() => {dispatch({type: 'TOGGLE-COLLAPSED'})}}/>
      {!collapsed && <AccordionBody/> }
    </div>


  );


}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={() => {props.onClick()}}>{props.title}</h3>
  );
}

function AccordionBody() {
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  )
}

export default UncontrollableAccordion;