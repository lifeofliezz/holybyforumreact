import React, { useState, useEffect } from 'react';
import TopicContextService from './../../context/TopicContext';
import TopicRenderer from './TopicRenderer';
//todo: pagination

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
      })
      .catch(e =>{
        console.log(e);
      });
  };

  return(
  <>
    <div>
    {
      topics.map((topic) => (
        <TopicRenderer key={topic.id} title={topic.title} username ={topic.username} content={topic.content} id={topic.id} />
      ))
    }
    </div>
  </>
  );
};

export default TopicList;