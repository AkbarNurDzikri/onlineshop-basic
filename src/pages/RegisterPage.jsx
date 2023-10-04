import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import LoginHeader from '../components/headers/auth/LoginHeader';
import RegisterBody from '../components/bodies/auth/RegisterBody';
import { useRef } from 'react';

function RegisterPage() {
  const inputFullName = useRef(null);
  const label = {
    fullName: 'Full Name',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Konfirmasi Password'
  }

  const placeholder = {
    fullName: 'Budi',
    email: 'example.com',
    password: '******'
  }

  const type = {
    email: 'email',
    fullName: 'text',
    password: 'password',
    confirmPassword: 'password'
  }

  const name = {
    email: 'email',
    fullName: 'fullName',
    password: 'password',
    confirmPassword: 'confirmPassword'
  }

  return (
    <Container className='d-flex align-items-center justify-content-center vh-100'>
      <Row>
        <Col>
          <LoginHeader title='Register' description='Welcome, Please enter yor details' />
          <RegisterBody inputFullName={inputFullName} type={type} name={name} label={label} placeholder={placeholder} textButton='Regist Now' />
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterPage;
