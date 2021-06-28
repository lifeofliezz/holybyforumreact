import React, { useState } from 'react';
import TopicContextService from './../../context/TopicContext';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

//todo: rerender topiclist after adding topic

const AddTopic = () => {
  const initialTopicState = {
    title: '',
    content: ''
  };

  const [topic, setTopic] = useState(initialTopicState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const {name, value} = event.target;
    setTopic({...topic, [name]:value})
  };

  const saveTopic = () => {
    var data = {
      title: topic.title,
      content: topic.content
    };

    TopicContextService.createTopic(data)
      .then(response => {
        setTopic({
          title: response.data.title,
          content: response.data.content
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e =>{
        console.log(e)
      });
  };

  const newTopic = () =>{
    setTopic(initialTopicState);
    setSubmitted(false);
  };

  return submitted ? (
    <div className='submit-form'>
      <Container>
        <Row>
          <Col>
            <Alert varient='success'>
              Topic toegevoegd
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant='primary' onClick={newTopic}>
              Topic toevoegen
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
                <Form.Label>Titel</Form.Label>
                <Form.Control 
                  type='text'
                  placeholder='Topictitel'
                  id='title'
                  required
                  defaultValue={topic.title}
                  onChange={handleInputChange}
                  name='title' 
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Inhoud</Form.Label>
                <Form.Control 
                  type='text'
                  placeholder='Inhoud'
                  id='content'
                  required
                  defaultValue={topic.content}
                  onChange={handleInputChange}
                  name='content' 
                />
              </Form.Group>
              <Button variant='primary' onClick={saveTopic}>
                Toevoegen
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddTopic;