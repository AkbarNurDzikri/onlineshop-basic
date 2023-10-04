import { login } from "../../../services/auth.service";
import FailedLoginHandler from "./FailedLoginHandler";

const LoginHandler = async (e) => {
  e.preventDefault();

  const data = {
    username: e.target.username.value,
    password: e.target.password.value
  }

  try {
    const response = await login(data);
    if(response.data.token) {
      localStorage.setItem('token', response.data.token);
      window.location.href = '/products';
    }
  } catch(err) {
    const error = err.message;
    FailedLoginHandler({error})
  }
}

export default LoginHandler;