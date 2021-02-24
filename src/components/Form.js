
import React, { useState } from 'react';

import checkMemberValid from 'functions/checkMemberValid';

const Form = (props) => {

  const { addMember } = props;

  const [ tosAgreed, setTosAgreed ] = useState(false);
  const [ error, setError ] = useState(null);
  const [ formData, setFormData ] = useState({
    name: 'a',
    email: 'a@a.com',
    password: 'a'
  });

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value });
  }

  const handleTosClick = (e) => {
    const value = e.currentTarget.checked;
    setTosAgreed(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (tosAgreed) {
      checkMemberValid(formData)
        .then(res => {
          console.log(res)
          addMember(formData);
          setFormData({});
          setError(null);
        })
        .catch(err => {
          console.log(err.message);
          setError(err.message);
        })
    }
    else {
      setError('Terms of Service must be agreed to.');
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <div>
          <label>
            Name:
            <input type='text' name='name' value={formData.name || ''} onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>
            Email:
            <input type='email' name='email' value={formData.email || ''} onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>
            Password:
            <input type='password' name='password' value={formData.password || ''} onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>
            I agree to the Terms of Service:
            <input type='checkbox' name='tosAgreed' checked={tosAgreed} onChange={handleTosClick} />
          </label>
        </div>

        <button>Submit!</button>
      </form>
      {error && <p style={{color: 'red'}}>{error}</p>}
    </div>
  );
}

export default Form;