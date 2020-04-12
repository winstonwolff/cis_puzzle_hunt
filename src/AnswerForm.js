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
      console.log("you were right");
      console.log("props are ", this.props);
      this.props.linkTo(this.props.comp);
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


