import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "store";
import * as routes from "routes/routes";
import { withRouter } from "react-router-dom";
import AppView from "../views/AppView";

class App extends Component {
  componentDidMount() {
    this.props.fetchApprovedQuestions();
  }

  componentDidUpdate() {
    const {
      changeChosenTechnology,
      history: {
        location: { pathname }
      }
    } = this.props;
    if (pathname === routes.home) {
      changeChosenTechnology();
      localStorage.setItem("currentApprovedQuestionIndex", 0);
    }
  }

  render() {
    const {
      isSpinnerShowed,
      isNavigationShowed,
      chosenQuestionsTechnology
    } = this.props;
    return (
      <AppView
        isNavigationShowed={isNavigationShowed}
        chosenQuestionsTechnology={chosenQuestionsTechnology}
        isSpinnerShowed={isSpinnerShowed}
      />
    );
  }
}

const mapStateToProps = ({
  chosenQuestionsTechnology,
  isSpinnerShowed,
  isNavigationShowed
}) => ({
  chosenQuestionsTechnology,
  isSpinnerShowed,
  isNavigationShowed
});

const mapDispatchToProps = dispatch => ({
  fetchApprovedQuestions: () => dispatch(actions.fetchApprovedQuestions()),

  changeChosenTechnology: () => dispatch(actions.changeChosenTechnology(""))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
