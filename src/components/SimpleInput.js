import useInput from '../hooks/use-input';
const SimpleInput = () => {
  // const { name, email, nameInputHandler, emailInputHandler } = useInput();

  const {
    enteredText: name,
    enteredInputHandler: nameInputHandler,
    // inputTouched: nameTouched,
    inputBlurHandler: nameBlurHandler,
    isEnteredTextValid: isNameValid,
    isEnteredInputInvalid: isNameInputInvalid,
    reset: nameReset,
  } = useInput((name) => name.trim().length > 0);

  const {
    enteredText: email,
    enteredInputHandler: emailInputHandler,
    // inputTouched: emailTouched,
    inputBlurHandler: emailBlurHandler,
    isEnteredTextValid: isEmailValid,
    isEnteredInputInvalid: isEmailInputInvalid,
    reset: emailReset,
  } = useInput((email) => email.includes('@'));

  console.log('isNameInputInvalid:', isNameInputInvalid);
  console.log('isEmailInputInvalid:', isEmailInputInvalid);

  const submitHandler = (e) => {
    e.preventDefault();

    if (isNameInputInvalid && isEmailInputInvalid) return;

    nameReset();
    emailReset();
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
        <button disabled={!(isEmailValid && isNameValid)}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
