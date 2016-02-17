import React, { Component } from 'react';
import Choice from './choice';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ChoiceList = ({QuesMods, modNum, onUserClick}) => {
	function makeRandoms () {
      while (nums.length !== nums.length+1 && nums.length !== 4) {
        var x = Math.floor(Math.random()*4);
        if (nums.indexOf(x) === -1 && typeof x !== 'undefined') {
          nums.push(x);
        }
      }
    }
    var nums = [];
    makeRandoms();
    var choiceArray = ['A', 'wrong1', 'wrong2', 'wrong3'];
    
    const choicesList = nums.map((number, ind) => {
      return <Choice key={ind} choiceText={QuesMods[modNum][choiceArray[number]]}  onUserClick={onUserClick} />;        
    })

	return (
    <ReactCSSTransitionGroup transitionName="example" 
    transitionEnterTimeout={500} 
    transitionLeaveTimeout={300} 
    transitionAppear={true} 
    transitionAppearTimeout={500}>
		<div>    
			{choicesList}   
		</div>
    </ReactCSSTransitionGroup>
		)
	}


export default ChoiceList;