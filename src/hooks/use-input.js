import { useState } from 'react';

const useInput = () => {
  //공통 state만들기
  const [enteredText, setEnteredText] = useState('');

  // 공통 input handler 만들기
  const enteredInputHandler = (e) => {
    setEnteredText(e.target.value);
    console.log('enteredText___', enteredText);
  };

  return { enteredText, enteredInputHandler };
};

export default useInput;
