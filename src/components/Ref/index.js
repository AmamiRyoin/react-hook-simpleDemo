import React,{useRef} from 'react'
function TextInputWithFocusButton() {
    const inputEl = useRef();
    const iEl = useRef();
    console.log(inputEl)
    console.log(iEl)
    const onButtonClick = () => {
      // `current` points to the mounted text input element
      inputEl.current.focus();
      iEl.current.style.height='80px';
    };
    return (
      <div>
        <h2>Ref</h2>
        <input ref={inputEl} type="text" />
        <input ref={iEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </div>
    );
  }
  export default TextInputWithFocusButton