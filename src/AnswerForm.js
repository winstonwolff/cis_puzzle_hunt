import React from 'react';

export class AnswerForm extends React.Component {

  sendAnswer = (clickEvent) => {
    clickEvent.preventDefault();
    this.props.onClick(clickEvent.target.value);
  }

  render() {
    return (
      <form className="AnswerForm">
        <div>
          <label>
            What is the answer:
            <input className="answer" type="text" />
          </label>
        </div>
        <div>
          <input type="submit" onClick={this.sendAnswer} value="Submit" />
        </div>
      </form>
    );
  }
}


