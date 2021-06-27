import React, { useContext } from 'react'
import { MyContext } from './../../context/MyContext';
import { Row, Col } from 'react-bootstrap';

function MyProfileInformation () {
  const { rootState } = useContext(MyContext);
  const { isAuth, theUser } = rootState;

  return (isAuth) ? (
    <div>
      <Row>
        <Col>
          Gebruikersnaam
        </Col>
        <Col>
          {theUser.username}
        </Col>
      </Row>
      <Row>
        <Col>
          Email
        </Col>
        <Col>
          {theUser.email}
        </Col>
      </Row>
      <Row>
        <Col>
          Status
        </Col>
        <Col>
          {theUser.status}
        </Col>
      </Row>
      <Row>
        <Col>
          Lid sinds
        </Col>
        <Col>
          {theUser.created_at.split('T')[0]}
        </Col>
      </Row>
    </div>
  ) :
  (
    <div>
      <Row>
        <Col>
          Geen gebruiker gevonden
        </Col>
      </Row>
    </div>
  );
}

export default MyProfileInformation;