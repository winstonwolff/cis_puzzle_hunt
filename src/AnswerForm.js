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
    if (this.state.answer != this.props.correctAnswer) {
      console.log("you were wrong");
    } else {
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


