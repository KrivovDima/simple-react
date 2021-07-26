import React, {useState} from "react";
import styles from './CustomSelect.module.css';

type optionType = {
  value: number
  title: string
}

type CustomSelectPropsType = {
  options: optionType[]
}

function CustomSelect(props: CustomSelectPropsType) {
  let [collapse, setCollapse] = useState<boolean>(true);
  let [valueTitle, setValueTitle] = useState<string>('none')

  const spreadSelect = () => {
    setCollapse(!collapse);
  }

  const selectionOption = (optionValue: number) => {
    const copyOptions = [...props.options];
    const currentOption = copyOptions.find(option => optionValue === option.value);
    if (currentOption) {
      setValueTitle(currentOption.title);
      setCollapse(true);
    }

  }

  return (
    <div className={styles.customSelect}>
      <SelectTitle spreadSelect={spreadSelect} valueTitle={valueTitle}/>
      {!collapse && <SelectOptions options={props.options} selectionOption={selectionOption}/>}
    </div>
  )
}

export default CustomSelect;

type SelectTitlePropsType = {
  spreadSelect: () => void
  valueTitle: string
}

function SelectTitle(props: SelectTitlePropsType) {
  return (
    <div onClick={() => {
      props.spreadSelect()
    }} className={styles.selectTitle}>
      {props.valueTitle}
    </div>
  )
}

type SelectOptionsPropsType = {
  options: optionType[]
  selectionOption: (optionValue: number) => void
}

function SelectOptions(props: SelectOptionsPropsType) {
  return (
    <div>
      <ul className={styles.list}>
        {props.options.map((option, index) => {
          return (
            <li onClick={() => {props.selectionOption(option.value)}}
                key={index}
                className={styles.item}>
              {option.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}