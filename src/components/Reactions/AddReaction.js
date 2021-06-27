import React, { useState } from 'react';
import TopicContextService from './../../context/TopicContext';

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

  const saveReaction = () =>{
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

  return (
    <div className='submit-form'>
      {submitted ? (
      <div>
        <h5>Succesful submitted</h5>
        <button className='btn btn-success' onClick={newReaction}>
          Add
        </button>
      </div>
      ) : (
      <div className='form-group'>
        <input
          type='text'
          className='form-control'
          id='content'
          required
          value = {reaction.content}
          onChange={handleInputChange}
          name='content' />
        <button onClick={saveReaction} className='btn btn-success'>
          Voeg toe
        </button>
      </div>
      )}
    </div>
  );
};

export default AddReaction;