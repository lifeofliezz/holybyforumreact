import MyProfileInformation from './MyProfileInformation';
import { MyContext } from '../../context/MyContext';
import { useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Profile(){
  const { rootState } = useContext(MyContext);
  const { theUser } = rootState;

  return (
    <div>
      <Container fluid>
        <Row className='justify-content-md-center'>
          <Col xs='6' lg='3' style={{ textAlign: 'center' }}>            
            <h2>profiel van {theUser.username}</h2>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col xs='6' lg='3'>            
            <MyProfileInformation/>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col xs='6' lg='3'>
            <Button variant='primary' href='/' style={{ width: '100%' }}>
              Terug
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;