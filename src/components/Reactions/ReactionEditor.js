import { useState } from 'react';
import TopicContext from './../../context/TopicContext';
import { Container, Row, Col, Form, Button, FloatingLabel } from 'react-bootstrap';

function ReactionEditor(props) {
  const [content, setContent] = useState(props.content);

  function onChangeValue(event) {
    setContent(event.target.value);
  }

  function onSave() {
    TopicContext.updateReaction(props.reactionid, {content:content})
      .then(function() {
        props.onSave();
    });
  }

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  placeholder="reactie"
                  defaultValue={content}
                  style={{ height: '100px' }} 
                  onChange={onChangeValue} />
              </Form.Group>              
              <Button onClick={onSave}>
                Opslaan
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
    // <>
    //   <textarea onChange={onChangeValue} >
    //     {content}
    //   </textarea>
    //   <button onClick={onSave}>
    //     save
    //   </button>
    // </>
  );
}

export default ReactionEditor;