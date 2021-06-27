import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import ReactionEditor from './ReactionEditor';
import TopicContext from './../../context/TopicContext';
import { MyContext } from './../../context/MyContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const textEllipsisStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
}
const ReactionRenderer = (props) => {
  const [edit, setEdit] = useState(false)
  const myContext = useContext(MyContext)
  const isEditable = myContext.rootState.theUser.id === props.userid;

  function toggleEdit(){
    setEdit(!edit);
  }

  function onSave(){
    setEdit(false);
    props.onChange();
  }

  function deleteReaction(){
    TopicContext.deleteReaction(props.reactionid)
      .then(function (){
        props.onChange();
      });
  }

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Subtitle>
            {props.username}
          </Card.Subtitle>
          <Card.Text>
            {
              edit ? (
                <ReactionEditor reactionid={props.reactionid} content={props.content} onSave={onSave}/>
              ) : (
                <span>
                  {props.content}
                </span>
              )
            }
          </Card.Text>
          {
            isEditable ? (
              <div>
                <Container>
                  <Row>
                    <Col xs={6} sm={2}>
                      <Button variant='secondary' onClick={toggleEdit}>
                        Wijzig reactie
                      </Button>
                    </Col>
                    <Col xs={6} sm={2}>
                      <Button  variant='danger' onClick={deleteReaction}>
                        Verwijder reactie
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </div>
            ) : null
          }
        </Card.Body>
      </Card>
    </div>
  );
}

export default ReactionRenderer;