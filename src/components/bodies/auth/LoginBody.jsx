import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

const LoginBody = (props) => {
  const {type, name, label, placeholder, textButton, buttonType, onSubmit} = props;
  const inputEmail = useRef(null);
  useEffect(() => {
    inputEmail.current.focus();
  }, [])
  return (
    <>
      <Form onSubmit={onSubmit}>
        <label htmlFor={name.email}>{label.email}</label>
        <Form.Control type={type.email} name={name.email} id={name.email} placeholder={placeholder.email} autoComplete='off' ref={inputEmail} />

        <label htmlFor={name.password} className='mt-3'>{label.password}</label>
        <Form.Control type={type.password} name={name.password} id={name.password} placeholder={placeholder.password} autoComplete='off' />

        <Button className='mt-3 text-center w-100' type={buttonType}>{textButton}</Button>

        <p className="text-center mt-3">Belum punya akun? <Link to="/regist">Daftar</Link></p>
      </Form>
    </>
  )
}

export default LoginBody;