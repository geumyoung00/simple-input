import useInput from '../hooks/use-input';
const SimpleInput = () => {
  // const { name, email, nameInputHandler, emailInputHandler } = useInput();

  const {
    enteredText: name,
    enteredInputHandler: nameInputHandler,
    // inputTouched: nameTouched,
    inputBlurHandler: nameBlurHandler,
    // isTextValid: isNameValid,
    isEnteredInputInvalid: isNameInputInvalid,
    reset: nameReset,
  } = useInput((name) => name.trim().length > 0);

  const {
    enteredText: email,
    enteredInputHandler: emailInputHandler,
    // inputTouched: emailTouched,
    inputBlurHandler: emailBlurHandler,
    // isTextValid: isEmailValid,
    isEnteredInputInvalid: isEmailInputInvalid,
    reset: emailReset,
  } = useInput((email) => email.includes('@'));

  const submitHandler = (e) => {
    e.preventDefault();
    nameReset();
    emailReset();
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
      <div className={`form-control ${isNameInputInvalid ? 'invalid' : ''}`}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameInputHandler}
          onBlur={nameBlurHandler}
        />
        {isNameInputInvalid && <p className="error-text">이름을 입력하세요.</p>}
      </div>

      <div className={`form-control ${isEmailInputInvalid ? 'invalid' : ''}`}>
        <label htmlFor="name">E-mail</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailInputHandler}
          onBlur={emailBlurHandler}
        />
        {isEmailInputInvalid && (
          <p className="error-text">이메일을 정확히 입력해주세요.</p>
        )}
      </div>

      <div className="form-actions">
        {/* <button>Submit</button> */}
        <button disabled={!isEmailInputInvalid || !isNameInputInvalid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
