import React, { Component } from 'react';

const Question = (props) => {
	var myQuestion = props.QuesMods[props.modNum].Q;
	return <div className='question'>{myQuestion}</div>;
}

export default Question;