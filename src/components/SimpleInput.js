import useInput from '../hooks/use-input';
const SimpleInput = () => {
  // const { name, email, nameInputHandler, emailInputHandler } = useInput();
  const {
    enteredText: name,
    enteredInputHandler: nameInputHandler,
    inputTouched: nameTouched,
    inputBlurHandler: nameBlurHandler,
    isTextValid: isNameValid,
  } = useInput();

  const {
    enteredText: email,
    enteredInputHandler: emailInputHandler,
    inputTouched: emailTouched,
    inputBlurHandler: emailBlurHandler,
    isTextValid: isEmailValid,
  } = useInput();

  // const isNameValid = name.trim().length > 0; // .trim() !== ''
  // 재평가가 너무 많아지지 않게, 그냥 변수로 준다.

  const isNameInvalid = !isNameValid && nameTouched;
  // isNameValid(입력값이 없을 때) , nameTouched(false, ) : 입력값이 없고 (false), 입력창을 touch 햇음 (ture)

  // const isEmailValid = email.includes('@');
  const isEmailInvalid = !isEmailValid && emailTouched;
  // isEmailValid의 입력값이 없고(false), 입력창을 touch했음 (true)

  console.log('isNameValid:', isNameValid);
  console.log('isEmailValid:', isEmailValid);

  const submitHandler = (e) => {
    e.preventDefault();
    // setNameTouched(true);
    // setEmailTouched(true);

    // if (!isNameValid || !isEmailValid) {
    //   return;
    // }

    // setName('');
    // setEmail('');

    // setNameTouched(false);
    // setEmailTouched(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={`form-control ${isNameInvalid ? 'invalid' : ''}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameInputHandler}
          onBlur={nameBlurHandler}
        />
        {isNameValid ? null : <p className="error-text">이름을 입력하세요.</p>}
      </div>

      <div className={`form-control ${isEmailInvalid ? 'invalid' : ''}`}>
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
        <button>Submit</button>
        {/* <button disabled={!isNameValid || !isEmailValid}>Submit</button> */}
      </div>
    </form>
  );
};

export default SimpleInput;
