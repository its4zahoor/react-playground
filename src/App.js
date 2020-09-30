import React, { Component } from "react";
import quizQuestions from "../src/api/quiz";
import QuizCheck from "../src/components/question/question";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questionId: 1,
      question: "",
      answerOptions: [],
      answer: "",
      answersCount: {}
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentDidMount() {
    const selectedAnswerOptions = quizQuestions.map(
      question => question.answers
    );
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: selectedAnswerOptions[0]
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions.length) {
      setTimeout(() => 300);
    }
  }

  setUserAnswer(answer) {
    this.setState(state => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  renderQuiz() {
    return (
      <QuizCheck
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  render() {
    return (
      <div className="quiz">
        <div className="quiz-header" />
        {this.renderQuiz()}
      </div>
    );
  }
}

export default App;
