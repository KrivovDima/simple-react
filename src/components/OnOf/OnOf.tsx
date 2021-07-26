import React, {useState} from "react";
import styles from './OnOf.module.css';

type OnOfPropsType = {
  setOn: (value: boolean) => void
  on: boolean
}

function OnOf(props: OnOfPropsType) {



  return (
    <div className={styles.btns}>
      <button onClick={() => {props.setOn(true)}} className={`${styles.btns__of} ${props.on && styles.activated}`}>On</button>
      <button onClick={() => {props.setOn(false)}} className={`${styles.btns__of} ${!props.on && styles.deactivated}`}>Of</button>
      <span className={`${styles.circle} ${props.on && styles.activated} ${!props.on && styles.deactivated}`}></span>
    </div>
  );
}

export default OnOf;
