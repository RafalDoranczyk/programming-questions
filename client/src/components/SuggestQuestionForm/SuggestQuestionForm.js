import React, { Component } from "react";
import * as S from "./style";

import TechnologyToChoose from "./TechnologyToChoose/TechnologyToChoose";
class SuggestQuestionForm extends Component {
  state = {
    question: "",
    username: "",
    technology: "",
    messageToUser: ""
  };

  submitForm = e => {
    e.preventDefault();
    const { question, username, technology } = this.state;
    if (!question || !username || !technology) {
      this.setState({ messageToUser: "Uzupełnij cały formularz." });
    } else {
      const payload = { question, username, technology };
      this.props
        .onSubmit(payload)
        .then(() => {
          this.setState({
            messageToUser: "Pytanie zostało wysłane.",
            question: "",
            technology: "",
            messageToUser: ""
          });
        })
        .catch(() =>
          this.setState({
            messageToUser: "Wystąpił błąd podczas wysyłania",
            question: "",
            technology: "",
            messageToUser: ""
          })
        );
    }
  };

  handleChange = (e, type, technology) => {
    const { value } = e.target;
    if (type === "button") {
      this.setState({ technology, messageToUser: "" });
    } else if (type === "question") {
      this.setState({ question: value, messageToUser: "" });
    } else if (type === "username") {
      this.setState({ username: value, messageToUser: "" });
    }
  };

  render() {
    const { technology, username, question, messageToUser } = this.state;

    return (
      <S.Wrapper>
        <p>1. Wybierz technologię pytania</p>
        <TechnologyToChoose
          onClick={this.handleChange}
          technology={technology}
        />

        <S.MessageToUser>{messageToUser}</S.MessageToUser>
        <S.Form type="submit" onSubmit={this.submitForm}>
          <S.Label htmlFor="question">2. Wpisz treść pytania</S.Label>
          <S.TextArea
            id="question"
            value={question}
            onChange={e => this.handleChange(e, "question")}
          />
          <S.Label htmlFor="username">3. Podaj swoje imię lub nick</S.Label>
          <S.Input
            id="username"
            value={username}
            onChange={e => this.handleChange(e, "username")}
          />

          <S.Button>Wyślij</S.Button>
        </S.Form>
      </S.Wrapper>
    );
  }
}

export default SuggestQuestionForm;
