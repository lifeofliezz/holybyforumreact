import React, { useState, useEffect } from 'react';
import TopicContextService from './../../context/TopicContext';
import TopicRenderer from './TopicRenderer';
import { Container, Row, Col } from 'react-bootstrap';
//todo pagination

//render a list of topics based on page
const TopicList = () => {
  const [topics, setTopics,] = useState([]);
  var page = 1;

  useEffect(() => {
    retrieveTopics();
  }, []);


  const retrieveTopics = () => {
    TopicContextService.getTopics({page})
      .then(response =>{
        setTopics(response.data);
        //console.log(response.data);
      })
      .catch(e =>{
        console.log(e);
      });
  };

  return(
    <div>
      <Container fluid>
        <Row className='justify-content-md-center'>
          <Col xs={12} sm={12}>
            {
              topics.map((topic) => (
                <TopicRenderer key={topic.id} title={topic.title} username ={topic.username} content={topic.content} id={topic.id} />
              ))
            }          
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopicList;