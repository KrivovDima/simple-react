import React, {useState} from "react";
import styles from './UncontrollableOnOf.module.css';

type OnOfPropsType = {
  // check: boolean
}

function UncontrollableOnOf(props: OnOfPropsType) {

  let [on, setOn] = useState(false);

  return (
    <div className={styles.btns}>
      <button onClick={() => {setOn(true)}} className={`${styles.btns__of} ${on && styles.activated}`}>On</button>
      <button onClick={() => {setOn(false)}} className={`${styles.btns__of} ${!on && styles.deactivated}`}>Of</button>
      <span className={`${styles.circle} ${on && styles.activated} ${!on && styles.deactivated}`}></span>
    </div>
  );
}

export default UncontrollableOnOf;
