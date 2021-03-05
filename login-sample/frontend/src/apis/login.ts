import axios from 'axios';

axios.defaults.withCredentials = true;

const login = async(id: string, password: string) => {
  return await axios.post('http://localhost:8000/login',{
    id: id,
    password: password
  }).then(() => true).catch(() => console.log("IDかパスワードが違う"));
}

export default login;