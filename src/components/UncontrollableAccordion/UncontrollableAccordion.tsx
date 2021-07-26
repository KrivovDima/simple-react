import React, {useState} from "react";

type UncontrollableAccordionPropsType = {
  title: string
}

function UncontrollableAccordion(props: UncontrollableAccordionPropsType) {
  let [collapsed, setCollapsed] = useState(false);

  return (
    <div>
      <AccordionTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>
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