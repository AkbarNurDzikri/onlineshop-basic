const LogOutHandler = () => {
  localStorage.removeItem('email');
  localStorage.removeItem('password');
}

export default LogOutHandler;