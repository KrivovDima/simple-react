import React from "react";

type itemType = {
  title: string
  value: any
}

type AccordionPropsType = {
  title: string
  setAccordionCollapsed: () => void
  collapsed: boolean
  items: itemType[]
  clickFn: (value: any, title: string) => void
}

function Accordion(props: AccordionPropsType) {
  return (
    <div>
      <AccordionTitle title={props.title} setCollapsed={props.setAccordionCollapsed}/>
      {!props.collapsed && <AccordionBody items={props.items} clickFn={props.clickFn}/>}
    </div>

  );
}

type AccordionTitlePropsType = {
  title: string
  setCollapsed: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return (
    <h3 onClick={() => {props.setCollapsed()}}>{props.title}</h3>
  );
}

type AccordionBodyPropsType = {
  items: itemType[]
  clickFn: (value: any, title: string) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((item, index) => {
        return (
          <li key={index}
          onClick={() => {props.clickFn(item.value, item.title)}}>{item.title}</li>
        )
      })}
    </ul>
  )
}

export default Accordion;