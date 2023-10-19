import { useState } from 'react';

const useInput = () => {
  //공통 state만들기
  const [enterText, setEnterText] = useState({
    name: '',
    email: '',
  });
  // 공통 input handler 만들기

  const enteredInputHandler = (e) => {
    const { id, value } = e.target;
    // e.target에서 id, value 값을 그대로  추출
    setEnterText({
      ...enterText,
      [id]: value,
    });
    console.log('enterText___', enterText);
  };

  return { enterText, enteredInputHandler };

  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');

  //   const nameInputHandler = (e) => {
  //     setName(e.target.value);
  //   };
  //   const emailInputHandler = (e) => setEmail(e.target.value);

  //   return { name, email, emailInputHandler, nameInputHandler };
};

export default useInput;
