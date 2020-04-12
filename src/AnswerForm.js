import React from 'react'
import './AnswerForm.scss'

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
    if (this.state.answer.toLowerCase() != this.props.correctAnswer.toLowerCase()) {
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
            What is your answer:
            &nbsp;
            <input className="answer" type="text" onChange={this.updateAnswer} />
          </label>

          &nbsp;
          <input type="submit" onClick={this.sendAnswer} value="Submit" />
        </div>
      </form>
    );
  }
}
