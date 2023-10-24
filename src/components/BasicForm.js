import useBasicInput from '../hooks/use-basic';

const BasicForm = () => {
  const {
    enteredText: firstName,
    inputHandler: firstNameHandler,
    inputBlurHandler: firstNameBlurHandler,
    isInputInvalid: isFirstNameInputInvalid,
    reset: resetFirstName,
    isEntredTextValid: isFirstNameValid,
  } = useBasicInput((firstName) => firstName.trim().length > 0);

  const {
    enteredText: lastName,
    inputHandler: lastNameHandler,
    inputBlurHandler: lastNameBlurHandler,
    isInputInvalid: isLastNameInputInvalid,
    reset: resetLastName,
    isEntredTextValid: isLastNameValid,
  } = useBasicInput((lastName) => lastName.trim().length > 0);

  const {
    enteredText: email,
    inputHandler: emailNameHandler,
    inputBlurHandler: emailBlurHandler,
    isInputInvalid: isEmailInputInvalid,
    reset: resetEmail,
    isEntredTextValid: isEmailValid,
  } = useBasicInput((email) => email.includes('@'));

  console.log('isFirstNameInputInvalid__', isFirstNameInputInvalid);
  console.log('isLastNameInputInvalid__', isLastNameInputInvalid);
  console.log('isEmailInputInvalid__', isEmailInputInvalid);

  const isDisabledValid = !(
    isFirstNameValid &&
    isLastNameValid &&
    isEmailValid
  );

  const submitHandler = (e) => {
    e.preventDefault();

    if (
      isFirstNameInputInvalid ||
      isLastNameInputInvalid ||
      isEmailInputInvalid
    )
      return;

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        {/* <div className="form-control"> */}
        <div
          className={`form-control ${isFirstNameInputInvalid ? 'invalid' : ''}`}
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstName}
            onChange={firstNameHandler}
            onBlur={firstNameBlurHandler}
          />
          {isFirstNameInputInvalid && (
            <p className="error-text">이름을 꼭 입력해주세요.</p>
          )}
        </div>
        {/* <div className="form-control"> */}
        <div
          className={`form-control ${isLastNameInputInvalid ? 'invalid' : ''}`}
        >
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameHandler}
            onBlur={lastNameBlurHandler}
          />
          {isLastNameInputInvalid && (
            <p className="error-text">성을 꼭 입력해주세요.</p>
          )}
        </div>
      </div>
      {/* <div className="form-control"> */}
      <div className={`form-control ${isEmailInputInvalid ? 'invalid' : ''}`}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={email}
          onChange={emailNameHandler}
          onBlur={emailBlurHandler}
        />
        {isEmailInputInvalid && (
          <p className="error-text">
            '@'를 포함한 전체 이메일 주소를 입력하세요.
          </p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
        {/* <button disabled={isDisabledValid ? 'disabled' : ''}>Submit</button> */}
      </div>
    </form>
  );
};

export default BasicForm;
