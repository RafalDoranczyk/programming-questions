import React from "react";
import TechnologyBoxes from "../components/HomePage/TechnologyBoxes/TechnologyBoxes";
import { connect } from "react-redux";
import actions from "store";
import { withRouter } from "react-router-dom";
import * as routes from "routes/routes";

const HomePage = ({
  createdTechnologyButtons,
  giveChosenApprovedQuestions,
  history
}) => {
  const onBoxButtonClick = chosenTechnology => {
    giveChosenApprovedQuestions(chosenTechnology);
    history.push({
      pathname: `${routes.questions}/${chosenTechnology}`
    });
  };
  return (
    <TechnologyBoxes
      onClick={onBoxButtonClick}
      createdTechnologyButtons={createdTechnologyButtons}
    />
  );
};

const mapStateToProps = ({ createdTechnologyButtons }) => ({
  createdTechnologyButtons
});

const mapDispatchToProps = dispatch => ({
  giveChosenApprovedQuestions: chosenTechnology =>
    dispatch(actions.giveChosenApprovedQuestions(chosenTechnology))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomePage));
