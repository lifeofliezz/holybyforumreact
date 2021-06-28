import React, { useContext, useState } from 'react';
import TopicList from './TopicsList';
import AddTopic from './AddTopic';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Topics() {
  const [newTopic, setNewTopic] = useState(false);

  function toggleNewTopic() {
    setNewTopic(!newTopic)
  }



  return(
    <div>
      <Container fluid>
        <Row>
          <Col>          
            <h1>Topics</h1>
          </Col>
        </Row>
      </Container>

      <Row >
        <Col>
          <Button onClick={toggleNewTopic} class="btn btn-outline-primary float-left">
            Nieuw topic
          </Button>
        </Col>
      </Row>
        {
            newTopic? (
                <AddTopic />
            ) : (null)
        }
      <Row>
        <Col>
          <TopicList/>
        </Col>
      </Row>
    </div>
  );
}

export default Topics;