import React, { useState, useEffect } from 'react';
import TopicContextService from '../../context/TopicContext';
import TopicRenderer from '../topics/TopicRenderer';
import ReactionRenderer from './ReactionRenderer';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

//render a topic and a list of reactions
const ReactionsList = (props) => {
  const [reactions, setReactions] = useState([]);
  const [topics, setTopics ] = useState([])

  useEffect(() => {
    retrieveReactions();
    retrieveTopics();
  }, [props.topicid]);

  function onChange() {
    retrieveReactions();
  }

  const retrieveReactions = () => {
    TopicContextService.getTopicReactions(props.topicid)
      .then(response =>{
        setReactions(response);
        console.log(response);
      })
      .catch(e =>{
        console.log(e);
      })
  };


  const retrieveTopics = () => {
    TopicContextService.getTopicById(props.topicid)
      .then(response =>{
        setTopics(response);
        console.log(response);
      })
      .catch(e =>{
        console.log(e);
      })
  };

  return(
    <div>
      <Container>
        <Row>
          <Col>
            <h4>Topic</h4>
          </Col>
        </Row>
        {
          topics.map((topic) => (
            <div>
              <Row>
                <Col>
                  <span>Titel: {topic.title}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>Auteur: {topic.username}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span>tekst: {topic.content}</span>
                </Col>
              </Row>
            </div>            
          ))
        }

        <Row>
          <Col>
            <h4>Reacties</h4>
          </Col>
        </Row>
        <Row className='justify-content-md-center'>
          <Col xs={12} sm={12}>
            {
              reactions.map((reaction) => (
                <ReactionRenderer 
                  key={reaction.id} 
                  username={reaction.username} 
                  userid={reaction.user_id} 
                  content={reaction.content} 
                  reactionid={reaction.id} 
                  onChange={onChange} />
              ))
            }
          </Col>
        </Row>        
      </Container>
    </div>
  );
};

export default ReactionsList;