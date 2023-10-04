import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const LoginBody = (props) => {
  const {type, name, label, placeholder, textButton, buttonType, onSubmit} = props;
  const inputUsername = useRef(null);

  useEffect(() => {
    inputUsername.current.focus();
  }, [])

  return (
    <>
      <Form onSubmit={onSubmit}>
        <label htmlFor={name.username}>{label.username}</label>
        <Form.Control type={type.username} name={name.username} id={name.username} placeholder={placeholder.username} autoComplete='off' ref={inputUsername} />

        <label htmlFor={name.password} className='mt-3'>{label.password}</label>
        <Form.Control type={type.password} name={name.password} id={name.password} placeholder={placeholder.password} autoComplete='off' />

        <Button className='mt-3 text-center w-100' type={buttonType}>{textButton}</Button>

        <p className="text-center mt-3">Belum punya akun? <Link to="/regist">Daftar</Link></p>
      </Form>
    </>
  )
}

export default LoginBody;