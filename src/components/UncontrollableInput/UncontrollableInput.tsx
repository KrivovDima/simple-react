import React, {useState} from 'react';

const UncontrollableInput: React.FC = () => {
  let [value, setValue] = useState('')

  return (
    <div>
      <input onChange={(event) => {
        const inputValue = event.currentTarget.value;
        setValue(inputValue);
      }} type="text"/> -- {value}

      <UncontrollableInputWithBtn/>
    </div>

  )
};

export default UncontrollableInput;

const UncontrollableInputWithBtn: React.FC = () => {
  let [value, setValue] = useState('')
  const inputRef = React.useRef<HTMLInputElement>(null);

  const save = () => {
    const inputElement = inputRef.current as HTMLInputElement;
    setValue(inputElement.value);
  }

  return (
    <div>
      <input ref={inputRef} type={'text'}/>
      <button onClick={save}>Save value</button>
      actual value -- {value}
    </div>
  )
};
