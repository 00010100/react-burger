import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-burger-d99c2.firebaseio.com'
})

export default instance;