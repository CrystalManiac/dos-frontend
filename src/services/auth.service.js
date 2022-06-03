//аутентификация
import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/';

//POST {имя пользователя, пароль} и сохранить JWT в локальном хранилище
class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'login', {
        name: user.username,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  //удалить JWT из локального хранилища
  logout() {
    localStorage.removeItem('user');
  }

  //POST {имя пользователя, адрес электронной почты, пароль}
  register(user) {
    return axios.post(API_URL + 'register', {
      name: user.username,
      password: user.password
    });
  }
}

export default new AuthService();