import { useState } from 'react';
import basicInput from '../hooks/basic-input';

const BasicForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [firstNameInputTouched, setFirstNameInputTouched] = useState(false);
  const [lastNameInputTouched, setLastNameInputTouched] = useState(false);
  const [emailInputTouched, setEmailInputTouched] = useState(false);

  const isFirstNameValid = firstName.trim().length > 0;
  const isFirstNameInputInvalid = !isFirstNameValid && firstNameInputTouched;

  const isLastNameValid = lastName.trim().length > 0;
  const isLastNameInputInvalid = !isLastNameValid && lastNameInputTouched;

  const isEmailValid = email.includes('@');
  const isEmailInputInvalid = !isEmailValid && emailInputTouched;

  const firstNameHandler = (e) => setFirstName(e.target.value);
  const lastNameHandler = (e) => setLastName(e.target.value);
  const emailNameHandler = (e) => setEmail(e.target.value);

  const firstNameBlurHandler = () => setFirstNameInputTouched(true);
  const lastNameBlurHandler = () => setLastNameInputTouched(true);
  const emailBlurHandler = () => setEmailInputTouched(true);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(isFirstNameInputInvalid);
    console.log(isLastNameInputInvalid);
    console.log(isEmailInputInvalid);

    if (
      isFirstNameInputInvalid ||
      isLastNameInputInvalid ||
      isEmailInputInvalid
    ) {
      return;
    }

    setFirstName('');
    setLastName('');
    setEmail('');

    setFirstNameInputTouched(false);
    setLastNameInputTouched(false);
    setEmailInputTouched(false);
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
      </div>
    </form>
  );
};

export default BasicForm;
