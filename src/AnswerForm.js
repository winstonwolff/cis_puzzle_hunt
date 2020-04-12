import React from 'react';

export class AnswerForm extends React.Component {

  constructor() {
    super();
    this.state = {
      answer: ''
    }
  }

  updateAnswer = (changeEvent) => {
    this.setState( { answer : changeEvent.target.value } );
  }

  sendAnswer = (clickEvent) => {
    clickEvent.preventDefault();
    console.log("answer is ", this.state.answer);
    console.log("cooranswer is ", this.props.correctAnswer);
    if (this.state.answer != this.props.correctAnswer) {
      console.log("you were wrong");
    } else {
      console.log("you were right");
      console.log("currentScreen is ", this.props.currentScreen);
      
      this.props.linkTo(this.props.currentScreen + 1);
    }
  }

  render() {
    return (
      <form className="AnswerForm">
        <div>
          <label>
            What is the answer:
            <input className="answer" type="text" onChange={this.updateAnswer} />
          </label>
        </div>
        <div>
          <input type="submit" onClick={this.sendAnswer} value="Submit" />
        </div>
      </form>
    );
  }
}


