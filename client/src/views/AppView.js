import React from "react";
import { ThemeProvider } from "styled-components";
import { Global, theme } from "theme";
import { Route, Switch } from "react-router-dom";
import * as routes from "routes/routes";
import Header from "components/Header/Header";
import HomePage from "containers/HomePage";
import QuestionsPage from "containers/QuestionsPage";
import Spinner from "components/Spinner";
import SuggestQuestionPage from "containers/SuggestQuestionPage";
import PendingQuestionsPage from "containers/PendingQuestionsPage";
import PageWrapper from "./style";
import AdminPage from "containers/AdminPage";

const AppView = ({
  chosenQuestionsTechnology,
  isSpinnerShowed,
  isNavigationShowed
}) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Global />
        <Header
          isNavigationShowed={isNavigationShowed}
          color={chosenQuestionsTechnology}
        />
        {isSpinnerShowed && <Spinner />}

        <PageWrapper
          isSpinnerShowed={isSpinnerShowed}
          color={chosenQuestionsTechnology}
        >
          <Switch>
            <Route exact path={routes.home} render={() => <HomePage />} />
            <Route path={routes.questions} render={() => <QuestionsPage />} />
            <Route
              exact
              path={routes.suggestQuestion}
              render={() => <SuggestQuestionPage />}
            />
            <Route
              exact
              path={routes.pendingQuestions}
              render={() => <PendingQuestionsPage />}
            />
            <Route path={routes.admin} render={() => <AdminPage />} />
          </Switch>
        </PageWrapper>
      </>
    </ThemeProvider>
  );
};

export default AppView;
