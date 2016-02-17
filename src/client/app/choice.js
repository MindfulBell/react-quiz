import React, { Component } from 'react';

const choiceArray = ['A', 'wrong1', 'wrong2', 'wrong3'];

const Choice = (props) => {
  return (
    <div className='col-md-6'>
      <div className='choice' onClick={event => userSelection(event.target.innerHTML)}>
        {props.choiceText}
      </div>
    </div>
    )

  function userSelection(userChoice) {
    props.onUserClick(userChoice);
  }
}

export default Choice;