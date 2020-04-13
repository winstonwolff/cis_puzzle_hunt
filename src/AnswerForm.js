import React from 'react'
import './AnswerForm.scss'

export class AnswerForm extends React.Component {

  constructor() {
    super();
    this.state = {
      answer: '',
      message: null
    }
  }

  updateAnswer = (changeEvent) => {
    this.setState( {
      answer : changeEvent.target.value,
      message: null,
    })
  }

  sendAnswer = (clickEvent) => {
    clickEvent.preventDefault();
    const actual = this.state.answer.trim().toLowerCase()
    const correct = this.props.correctAnswer.trim().toLowerCase()
    if (actual !== correct) {
      this.setState({message: 'Nice try. Keep at it.'})
    } else {
      this.props.linkTo(this.props.currentScreen + 1);
    }
  }

  render() {
    return (
      <form className="AnswerForm">
        <div>
          <label>
            What is the next location?
            &nbsp;
            <input className="answer" type="text" onChange={this.updateAnswer} />
          </label>

          &nbsp;
          <input type="submit" onClick={this.sendAnswer} value="Submit" />
          { this.state.message && (
            <div className="message">
              { this.state.message }
            </div>)
          }
        </div>
      </form>
    );
  }
}
