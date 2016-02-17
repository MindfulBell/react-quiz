import React, { Component } from 'react';
import {render} from 'react-dom';
import Question from './question';
import Choice from './choice';

//./node_modules/.bin/webpack -d --watch
//WHERE I LEFT OFF: Trying to get the click event on choice.js to trigger the 
//function below to check Answers...hmmmm

//Other things: Rejigger how I display the 4 choices, can easily do that with
//an Array...randomly place the 4 options in an array and map them  out?

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
  'wrong2': 'Nah, Jar Jar is too powerful for that nonsense',
  'wrong3': 'No, just, no.',
  'used' : false
}];

class GameHolder extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      score: 0
    }
  }

  processAnswer(userChoice) {
      alert('test');
      if (userChoice === QsAndAs[QandA].A) {
        console.log('CORRECT!')
      }
    }      

  render() {

    function makeRandoms () {
      while (nums.length !== nums.length+1 && nums.length !== 4) {
        var x = Math.floor(Math.random()*4);
        if (nums.indexOf(x) === -1 && typeof x !== 'undefined') {
          nums.push(x);
        }
      }
    }

    var QandA = Math.floor(Math.random()*10);
    var ran1, ran2, ran3, ran4;
    var nums = [];
    makeRandoms();
    ran1 = nums[0];
    ran2 = nums[1];
    ran3 = nums[2];
    ran4 = nums[3];    

    return (
      <div className='holder container-fluid'>
        <h1 className='title'>BONER TEST</h1>
        <Question modNum={QandA} QuesMods={QsAndAs} />
        <Choice modNum={QandA} choiceNum={ran1} QuesMods={QsAndAs} onUserClick={processAnswer} />
        <Choice modNum={QandA} choiceNum={ran2} QuesMods={QsAndAs} onUserClick={processAnswer} />
        <Choice modNum={QandA} choiceNum={ran3} QuesMods={QsAndAs} onUserClick={processAnswer} />
        <Choice modNum={QandA} choiceNum={ran4} QuesMods={QsAndAs} onUserClick={processAnswer} />
      </div>
      );  
  }
}

render(<GameHolder />, document.getElementById('app'));