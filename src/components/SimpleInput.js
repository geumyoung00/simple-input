import { useState } from 'react';
import useInput from '../hooks/use-input';
const SimpleInput = () => {
  // const { name, email, nameInputHandler, emailInputHandler } = useInput();
  const { enteredText: name, enteredInputHandler: nameInputHandler } =
    useInput();
  const { enteredText: email, enteredInputHandler: emailInputHandler } =
    useInput();

  const [nameTouched, setNameTouched] = useState(false); //touched : true
  const [emailTouched, setEmailTouched] = useState(false);

  const isNameValid = name.trim().length > 0; // .trim() !== ''
  // 재평가가 너무 많아지지 않게, 그냥 변수로 준다.
  const isNameInValid = !isNameValid && nameTouched;
  // isNameValid(입력값이 없을 때) , nameTouched(false, ) : 입력값이 없고 (false), 입력창을 touch 햇음 (ture)
  const isEmailValid = email.includes('@');
  const isEmailInValid = !isEmailValid && emailTouched;
  // isEmailValid의 입력값이 없고(false), 입력창을 touch했음 (true)

  const nameBlurHandler = (e) => setNameTouched(true);

  const emailBlurHandler = (e) => setEmailTouched(true);

  const submitHandler = (e) => {
    e.preventDefault();

    setNameTouched(true);
    setEmailTouched(true);

    if (!isNameValid || !isEmailValid) {
      return;
    }

    // setName('');
    // setEmail('');
    setNameTouched(false);
    setEmailTouched(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${isNameInValid ? 'invalid' : ''}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameInputHandler}
          onBlur={nameBlurHandler}
        />
        {isNameInValid && <p className="error-text">이름을 입력하세요.</p>}
      </div>

      <div className={`form-control ${isEmailInValid ? 'invalid' : ''}`}>
        <label htmlFor="name">E-mail</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
        />
        {isEmailInValid && (
          <p className="error-text">이메일을 정확히 입력해주세요.</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!isNameValid || !isEmailValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
