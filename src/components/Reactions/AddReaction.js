import React, { useState } from 'react';
import TopicContextService from './../../context/TopicContext';
import { Container, Row, Col, Button, Form, Alert } from 'react-bootstrap';

//todo: rerender reactionlist after adding reaction

const AddReaction = (props) => {
  const initialReactionState = {
    content: '',
    topicId: ''
  };

  const [reaction, setReaction] = useState(initialReactionState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const {name, value} = event.target;
    setReaction({...reaction,[name]:value})
  };

  const saveReaction = () => {
    var data = {
    content: reaction.content,
    topic_id: props.topicId
  };

  TopicContextService.createReaction(data)
    .then(response => {
      setReaction({
        content: response.data.content,
        topicId: props.topic_id
      });
      setSubmitted(true);
      console.log(response.data);
    })
    .catch(e =>{
      console.log(e)
    });
  };

  const newReaction = () =>{
    setReaction(initialReactionState);
    setSubmitted(false);
  };

  return submitted ? (
    <div className='submit-form'>
      <Container>
        <Row>
          <Col>
            <Alert variant='success'>
              Reactie toegevoegd
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button onClick={newReaction}>
              Reactie toevoegen
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    <div className='submit-form'>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Label>
                  Reactie
                </Form.Label>
                <Form.Control 
                  type='text'
                  id='content'
                  required
                  defaultValue={reaction.content}
                  onChange={handleInputChange}
                  placeholder='Text'
                  name='content' />
              </Form.Group>              
              <Button variant='primary' onClick={saveReaction}>
                Voeg toe
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddReaction;