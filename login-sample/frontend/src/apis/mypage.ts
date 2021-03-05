import axios from 'axios';

axios.defaults.withCredentials = true;

const mypage = async() => {
  return await axios.get('http://localhost:8000/mypage').then((res) => res.data).catch(() => "ログインしていない");
}

export default mypage;