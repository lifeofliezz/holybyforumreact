import React, { useContext, useState } from 'react';
import { MyContext } from './../context/MyContext';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function Login() {
  const { loginUser, isLoggedIn } = useContext(MyContext);

  const initialState = {
    userInfo:{
      username: '',
      password: '',
    },
    errorMsg: ''
  }

  const [state,setState] = useState(initialState);

  // On change input value (email & password)
  const onChangeValue = (e) => {
    setState({
      ...state,
      userInfo:{
        ...state.userInfo,
        [e.target.name]:e.target.value
      }
    });
  }

  // On Submit Login From
  const submitForm = async (event) => {
    event.preventDefault();
    const data = await loginUser(state.userInfo);
    if (data.message === 'success' && data.token) {
      setState({
        ...initialState,
      });
      localStorage.setItem('loginToken', data.token);
      await isLoggedIn();
    } else {
      setState({
        ...state,
        successMsg:'',
        errorMsg:data.message
      });
    }
  }

  // Show Message on Error

  let errorMsg = '';
  if (state.errorMsg) {
    errorMsg = <div className='error-msg'>{state.errorMsg}</div>;
  }


  return(
    <div className='_loginRegister'>
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs='6' lg='6'>
            <h1>Login</h1>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col xs='6' lg='6'>
            <Form onSubmit={submitForm} noValidate>
              <Form.Group className='mb-3' controlId='username'>
                <Form.Label>Username</Form.Label>
                <Form.Control 
                  type='text' 
                  placeholder='Enter username' 
                  required
                  name='username'
                  defaultValue={state.userInfo.username} 
                  onChange={onChangeValue} />
              </Form.Group>

              <Form.Group className='mb-3' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type='password' 
                  placeholder='Password'
                  required
                  name='password'
                  defaultValue={state.userInfo.username} 
                  onChange={onChangeValue} />                                    
                <Form.Control.Feedback>
                  {errorMsg}
                </Form.Control.Feedback>
              </Form.Group>
              <Button variant='primary' type='submit'>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;