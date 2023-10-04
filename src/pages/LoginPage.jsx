import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
import LoginHeader from '../components/headers/auth/LoginHeader';
import LoginBody from '../components/bodies/auth/LoginBody';
import LoginHandler from '../components/bodies/auth/LoginHandler';

function LoginPage() {
  const label = {
    username: 'Username',
    password: 'Password'
  }

  const type = {
    username: 'text',
    'password': 'password'
  }

  const placeholder = {
    username: 'super-admin',
    password: '******'
  }

  const name = {
    username: 'username',
    password: 'password'
  }

  return (
    <Container className='d-flex align-items-center justify-content-center vh-100'>
      <Row>
        <Col>
          <LoginHeader title='Login' description='Welcome, Please enter yor details' />
          <LoginBody type={type} name={name} label={label} placeholder={placeholder} textButton='Login' buttonType = 'submit' onSubmit={LoginHandler} />
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage;
