import { useState } from 'react';

const useInput = () => {
  //공통 state만들기
  const [enteredText, setEnteredText] = useState('');
  const [inputTouched, setInputTouched] = useState(false); //touched : true
  let [isTextInputInvalid, setIsTextInputInvalid] = useState(false);

  // 공통 input handler 만들기
  const inputBlurHandler = (e) => {
    setInputTouched(true);
  };

  const validator = (text, id) => {
    let isNameValid = text.trim().length > 0;
    let isEmailValid = text.includes('@');

    console.log('inputTouched___', inputTouched);

    if (id === 'name') {
      !isNameValid && inputTouched
        ? setIsTextInputInvalid(true)
        : setIsTextInputInvalid(false);
    } else {
      !isEmailValid && inputTouched
        ? setIsTextInputInvalid(true)
        : setIsTextInputInvalid(false);
    }

    // const isInputInvalid = !isInputValid && inputTouched;

    // if (id === 'email') {
    //   text.includes('@') ? setIsTextValid(true) : setIsTextValid(false);
    // } else {
    //   text.trim().length > 0 ? setIsTextValid(true) : setIsTextValid(false);
    // }

    // console.log(text);
    // if (text.trim().length > 0) {
    //   setIsTextValid(true);
    // } else {
    //   setIsTextValid(false);
    // }
  };

  const enteredInputHandler = (e) => {
    const text = e.target.value;
    const id = e.target.id;
    setEnteredText(text);
    validator(text, id);
  };

  console.log('isTextInputInvalid___', isTextInputInvalid);

  return {
    enteredText,
    enteredInputHandler,
    inputTouched,
    inputBlurHandler,
    validator,
    isTextInputInvalid,
  };
};

export default useInput;
