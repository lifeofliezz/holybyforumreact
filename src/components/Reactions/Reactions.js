import React from 'react';
import ReactionsList from './ReactionList';
import AddReaction from './AddReaction';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Reactions(props) {
  const topicid = props.location.search.split('=')[1];

  return(
    <div>
      <Container>
        <Row className='justify-content-md-center'>
          <Col>
            <h1>Topic met reacties</h1>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col>
            <ReactionsList topicid={topicid}/>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col>
            <h3>Voeg een reactie toe</h3>
            <AddReaction topicId={topicid}/>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Button variant='primary' href='/'>
            Terug
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Reactions;