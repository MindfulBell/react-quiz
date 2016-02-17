import React from 'react';
import {render} from 'react-dom';
import Question from './question';
import Choice from './choice';
import ChoiceList from './choice_list';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

var QsAndAs = [{
  'Q': 'Who was Emperor Palpatine\'s master?',
  'A' : 'Darth Plagueis',
  'wrong1': 'Babe, Pig in the City',
  'wrong2': 'Terry Crews',
  'wrong3': 'Mace Windu',
  'used' : false
},{
  'Q': 'What does Anakin Skywalker hate most?',
  'A' : 'Sand',
  'wrong1': 'Younglings',
  'wrong2': 'Acting',
  'wrong3': 'Being a slave',
  'used' : false
},{
  'Q' : 'What color is Mace Windu\'s lightsaber?',
  'A' : 'Purple, motha****!',
  'wrong1': 'Royale w/cheese',
  'wrong2': 'Pink',
  'wrong3': 'Blue',
  'used' : false
},{
  'Q' : 'Who is the best starfighter in the galaxy?',
  'A' : 'Porkins',
  'wrong1': 'Darth Vader',
  'wrong2': 'Luke Skywalker',
  'wrong3': 'Shaft',
  'used' : false
},{
  'Q' : 'Which of these is not a ship flown in the Star Wars universe?',
  'A' : 'Unicorn',
  'wrong1': 'X-Wing',
  'wrong2': 'Y-Wing',
  'wrong3': 'TIE-Fighter',
  'used' : false
},{
  'Q' : 'Death Stars are cool!',
  'A' : 'Imperial, get him!',
  'wrong1': 'Nice',
  'wrong2': 'Test',
  'wrong3': 'Oh yeaaaa',
  'used' : false
},{
  'Q' : 'Who would win in a fight?',
  'A' : 'BB-8',
  'wrong1': 'Chewbacca',
  'wrong2': 'R2-D2',
  'wrong3': 'Darth Maul',
  'used' : false
},{
  'Q' : 'What actor played Finn?',
  'A' : 'John Boyega',
  'wrong1': 'Humphrey Bogart',
  'wrong2': 'Terry Crews',
  'wrong3': 'Frankie Muniz',
  'used' : false
},{
  'Q' : 'What startup company was headed up by Kylo Ren?',
  'A' : 'Knights of Ren',
  'wrong1': 'Facebook',
  'wrong2': 'Hooli',
  'wrong3': 'Uber',
  'used' : false
},{
  'Q' : 'So, is Emperor Snoke actually Jar Jar Binks?',
  'A' : 'YES!',
  'wrong1': 'Maybe',
  'wrong2': 'Nah, Jar Jar is too powerful',
  'wrong3': 'No, just, no.',
  'used' : false
}];

//Where I left off: Keeping track of used questions, moving onto next one!
class GameHolder extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			score: 0,
			QandA: Math.floor(Math.random()*10),
			usedItems: [],
      finished: false
		}
	}

	processAnswer(userChoice) {
		//updating usedItems Array
		var oldUsedQuestion = this.state.QandA;
		var oldUsedItems = this.state.usedItems;
		oldUsedItems.push(oldUsedQuestion);
		this.setState({ usedItems: oldUsedItems });

		//checking for correct answer,  updating score
		if (userChoice === QsAndAs[this.state.QandA].A) {
			this.setState({ score: this.state.score+1 });
		}
    if (this.state.usedItems.length === 10) {
      this.setState({ finished: true });
    }
    else if (this.state.finished === false && this.state.usedItems.length < 10) {
    //getting a new non-used number for a new Question group
    var newQuestionNum = Math.floor(Math.random()*10);
    while (this.state.usedItems.indexOf(newQuestionNum) !== -1) {
      newQuestionNum = Math.floor(Math.random()*10);
    }
    this.setState({QandA: newQuestionNum});
    }		


	}

	render() {
    const endGameDiv = this.state.usedItems.length === 8 ? <div className='endGame'>Thanks for playing! Your score is {this.state.score}!</div> : null;
		const QandA = this.state.QandA;//getting QandA from state, good.
		const processAnswer = (userChoice, QandA) => {this.processAnswer(userChoice)};
		function makeRandoms () {
			while (nums.length !== nums.length+1 && nums.length !== 4) {
				var x = Math.floor(Math.random()*4);
				if (nums.indexOf(x) === -1 && typeof x !== 'undefined') {
					nums.push(x);
				}
			}
		}    	
    	return (
    		<div className='holder container-fluid'>
    			<h1 className='title'>The Quiz Awakens</h1>
            {endGameDiv}  
            <ReactCSSTransitionGroup transitionName="example" 
    transitionEnterTimeout={500} 
    transitionLeaveTimeout={300} 
    transitionAppear={true} 
    transitionAppearTimeout={500}>
                
		        <Question modNum={QandA} QuesMods={QsAndAs} />
		        <ChoiceList modNum={QandA} QuesMods={QsAndAs} onUserClick={processAnswer} />
            </ReactCSSTransitionGroup>
        </div>
      );  
	}
}

render(<GameHolder />, document.getElementById('app'));
