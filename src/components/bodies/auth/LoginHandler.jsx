const LoginHandler = (e) => {
  e.preventDefault();
  
  localStorage.setItem('email', e.target.email.value);
  localStorage.setItem('password', e.target.password.value);

  window.location.href = '/products';
}

export default LoginHandler;