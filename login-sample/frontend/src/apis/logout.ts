import axios from 'axios';

axios.defaults.withCredentials = true;

const logout = async() => {
  return await axios.post('http://localhost:8000/logout').then(() => true).catch(() => false);
}

export default logout;