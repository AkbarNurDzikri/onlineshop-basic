import { useEffect } from 'react';
import {Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterBody = (props) => {
  const {type, name, label, textButton, placeholder, inputFullName} = props;
  useEffect(() => {
    inputFullName.current.focus();
  }, [])

  return (
    <>
      <Form>
        <label htmlFor={name.fullName}>{label.fullName}</label>
        <Form.Control ref={inputFullName} type={type.fullName} name={name.fullName} id={name.fullName} placeholder={placeholder.fullName} autoComplete='off' />
        
        <label htmlFor={name.email} className='mt-3'>{label.email}</label>
        <Form.Control type={type.email} name={name.email} id={name.email} placeholder={placeholder.email} autoComplete='off' />

        <label htmlFor={name.password} className='mt-3'>{label.password}</label>
        <Form.Control type={type.password} name={name.password} id={name.password} placeholder={placeholder.password} autoComplete='off' />

        <label htmlFor={name.confirmPassword} className='mt-3'>{label.confirmPassword}</label>
        <Form.Control type={type.confirmPassword} name={name.confirmPassword} id={name.confirmPassword} placeholder={placeholder.password} autoComplete='off' />

        <Button className='mt-3 text-center w-100'>{textButton}</Button>

        <p className="text-center mt-3">Sudah punya akun? <Link to="/login">Login</Link></p>
      </Form>
    </>
  )
}

export default RegisterBody;