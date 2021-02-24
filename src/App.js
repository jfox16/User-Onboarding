
import React, { useState } from 'react';
import './App.css';

import Form from 'components/Form';
import Member from 'components/Member';

import createUser from 'functions/createUser';

const initialMembers = [
  { name: 'Jonathan', email: 'jonathan@mail.com' },
  { name: 'David', email: 'david@mail.com' },
];




function App() {

  const [ members, setMembers ] = useState(initialMembers);

  const addMember = (member) => {
    createUser(member)
      .then(res => {
        console.log('member successfully added! response:', res);
        setMembers([ ...members, member ]);
      })
      .catch(err => console.error(err));
  }

  return ( 
    <div className="App">
      <header className="App-header">
        <h1>Jonathan's User Onboarding App</h1>
      </header>
      <Form addMember={addMember} />
      <div>
        {members?.map((member, i) => <Member member={member} key={i} />)}
      </div>
    </div>
  );
}

export default App;
