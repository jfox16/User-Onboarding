
import axios from 'axios';

const BASE_URL = 'https://reqres.in/api/users';

const createUser = (userData) => {
  return axios.post(BASE_URL, userData);
}

export default createUser;