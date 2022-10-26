import React, { useState } from "react";

const CaptHook = () => {
  const [count, setCount] = useState(0); 
  const [value, setValue] = useState('');

  const handleCountClicked = (param) => () => setCount(param); //extra () => from where it usually is in the onClick attribute

  const onChange = ({ target: {value} }) => setValue(value);

  return (
    <div>
      <h2>Count Value is: {count}</h2>
      <div>
        <button onClick={handleCountClicked(0)}>Reset</button>
        <button onClick={handleCountClicked(count - 1)}>Minus (-)</button>
        <button onClick={handleCountClicked(count + 1)}>Plus (+)</button>
      </div>
      <br /><br /><br />
      <h2>Character Count is: {value.length}</h2>
      <br />
      <input onChange={onChange} type="text" />
      <br />
      <h3>{value}</h3>
    </div>
  )
}

export default CaptHook;