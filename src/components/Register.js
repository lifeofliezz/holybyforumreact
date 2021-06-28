import React, { useContext, useState } from 'react'
import { MyContext } from './../context/MyContext'
import { Container, Row, Col, Form, Button} from 'react-bootstrap';

function Register() {
  const { toggleNav, registerUser } = useContext(MyContext);
  const initialState = {
    userInfo:{
      username:'',
      email:'',
      password:''
    },
    errorMsg:'',
    successMsg:'',
  };
  const [state,setState] = useState(initialState);

  // On Submit the Registration Form
  const submitForm = async (event) => {
    event.preventDefault();
    const data = await registerUser(state.userInfo);
    if(data.success){
      setState({
        ...initialState,
        successMsg:data.message,
      });
    }
    else{
      setState({
        ...state,
        successMsg:'',
        errorMsg:data.message
      });
    }
  }

  // On change the Input Value (username, email, password)
  const onChangeValue = (e) => {
    setState({
      ...state,
      userInfo:{
        ...state.userInfo,
        [e.target.name]:e.target.value
      }
    });
  }

  // Show Message on Success or Error
  let successMsg = '';
  let errorMsg = '';
  if (state.errorMsg) {
    errorMsg = <div className='error-msg'>{state.errorMsg}</div>;
  }
  if (state.successMsg) {
    successMsg = <div className='success-msg'>{state.successMsg}</div>;
  }

  return (
    <div className='_loginRegister'>
      <Container>
        <Row className='justify-content-md-center'>
          <Col xs='6' lg='6'>
            <h1>Sign up</h1>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col xs='6' lg='6'>
            <Form onSubmit={submitForm} noValidat>
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
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                  type='email' 
                  placeholder='Email address'
                  required
                  name='email'
                  defaultValue={state.userInfo.email} 
                  onChange={onChangeValue} />
              </Form.Group>

              <Form.Group className='mb-3' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type='password' 
                  placeholder='Password'
                  required
                  name='password'
                  defaultValue={state.userInfo.password} 
                  onChange={onChangeValue} />
              </Form.Group>
              {errorMsg}
              {successMsg}
              <Button variant='primary' type='submit'>
                Sign Up
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Register;