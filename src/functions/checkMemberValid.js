
import * as yup from 'yup';

const memberSchema = yup.object().shape({
  name: yup.string()
    .required('No name provided.'),
  email: yup.string()
    .required('No email provided')
    .email('Email is not formatted correctly.'),
  password: yup.string()
    .required('No password provided.')
    .min(8, 'Password must be at least 8 characters long.')
    .matches(/^[a-zA-Z]*$/, 'Password can only contain Latin letters.')
});

const checkMemberValid = (member) => {
  return memberSchema.validate(member);
}

export default checkMemberValid;