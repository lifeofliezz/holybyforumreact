import React, { useContext } from 'react';
import { MyContext } from './../context/MyContext';
import { Container, Row, Col } from 'react-bootstrap';

// Importing the Login & Register Component
import Login from './Login';
import Register from './Register';
import Topics from './topics/Topics';

function Home(props) {
  const { rootState } = useContext(MyContext);
  const { isAuth, showLogin } = rootState;

  return isAuth ? (
    <div style={props.style} className='topicField'>
      <Container>
        <Row>
          <Col>
            <Topics/>
          </Col>
        </Row>
      </Container>
    </div>
  ) : showLogin ? (
    <Login/>
  ) : (
    <Register/>
  );
}

export default Home;