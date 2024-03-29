import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { login } from '../redux/apiCalls';
import { mobile } from '../responsive';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://images.pexels.com/photos/972804/pexels-photo-972804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
      center no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({ width: '75%' })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 10px 0px;
  &:disabled {
    color: green;
    cursor: not-allowed;
  }
  ${mobile({ padding: '20px' })}
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input
            placeholder='username'
            onChange={(e) => setUserName(e.target.value)}
          />

          <Input
            placeholder='password'
            type='password'
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button onClick={handleLogin} disabled={isFetching}>
            Login
          </Button>
          {error && <Error> Something Went Wrong..</Error>}
          <Link>FORGOT YOUR PASSWORD? </Link>
          <Link>CREATE AN ACCOUNT </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
