import { useState } from 'react';

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

  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
