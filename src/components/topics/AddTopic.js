import React, { useState } from 'react';
import TopicContextService from './../../context/TopicContext';

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
    setTopic({...topic,[name]:value})
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

  return(
    <div className='submit-form'>
      {
        submitted ? (
          <div>
            <h4>Succesful submitted</h4>
            <button className='btn btn-success' onClick={newTopic}>
              Add
            </button>
          </div>
        ) : (
          <div className='form-group'>
            <label htmlFor='title'>Titel</label>
            <input
              type='text'
              className='form-control'
              id='title'
              required
              value = {topic.title}
              onChange={handleInputChange}
              name='title' />
            <label htmlFor='content'>Content</label>
            <input
              type='text'
              className='form-control'
              id='content'
              required
              value = {topic.content}
              onChange={handleInputChange}
              name='content' />
            <button onClick={saveTopic} className='btn btn-success'>
              Submit
            </button>
          </div>
        )
      }
    </div>
  );
};

export default AddTopic;