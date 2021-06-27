import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';

const textEllipsisStyle = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};

const TopicRenderer = (props) => {
  return (
    <div>
      <Card style={{paddingBottom: 5}}>
        <Card.Body>
          <Card.Title>
            {props.title}
          </Card.Title>
          <Card.Subtitle>
            Auteur: {props.username}
          </Card.Subtitle>
          <Card.Text>
            {props.content}
          </Card.Text>
          <Card.Link href={'/topicreactions?topicid=' + props.id}>
            Bekijken
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TopicRenderer;