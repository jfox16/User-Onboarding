
import React from 'react';

const Member = (props) => {

  const { member } = props;

  return (
    <div>
      <h2>{member.name}</h2>
      <p>{member.email}</p>
    </div>
  );
}

export default Member;