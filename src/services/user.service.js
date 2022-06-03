//доступ к данным
import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://127.0.0.1:5000/';

class UserService {
  getUserBoard() {
    return axios.get(API_URL + 'books', { headers: authHeader() });
  }
  getBooks() {
    return axios.get(API_URL + 'books', { headers: authHeader() });
  }
}

export default new UserService();