import React from "react";
import { connect } from "react-redux";

import styled from "styled-components";

const AdminPage = ({}) => {
  return <div />;
};

const mapStateToProps = ({ allApprovedQuestions }) => ({
  allApprovedQuestions
});

export default connect(
  mapStateToProps,
  null
)(AdminPage);
