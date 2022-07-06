import { Component } from "react";

import Box from "@mui/material/Box";

import I18N from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";
import ElectionResult from "../../nonview/core/ElectionResult";

import CustomAppBar from "../../view/molecules/CustomAppBar";
import HomePageBottomNavigation from "../../view/molecules/HomePageBottomNavigation";
import DashboardPage from "../../view/pages/DashboardPage";

const STYLE = {
  margin: "auto",
  marginTop: 5,
  marginBottom: 10,
};

const STYLE_INNER = {
  paddingTop: 5,
};

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const context = this.getContext();
    const electionResult = new ElectionResult();
    this.state = {
      context,
      electionResult,
    };
    this.isComponentMounted = false;
    this.setContext(context);
  }

  getContext() {
    let context = URLContext.getContext();
    return context;
  }

  setContext(newContext) {
    const oldContext = this.getContext();
    const context = { ...oldContext, ...newContext };
    URLContext.setContext(context);
    I18N.setLang(context.lang);
    if (this.isComponentMounted) {
      this.setState({ context });
    }
  }

  async refreshData() {}

  async componentDidMount() {
    this.isComponentMounted = true;
    await this.refreshData();
  }

  async onSelectLanguage(lang) {
    this.setContext({ lang });
  }

  onChangeElectionResult(electionResult) {
    this.setState({ electionResult });
  }

  onClickClear() {
    const electionResult = new ElectionResult();
    this.setState({ electionResult });
  }

  render() {
    const { context, electionResult } = this.state;
    const key = "context-" + JSON.stringify(context);

    return (
      <Box key={key} sx={STYLE}>
        <CustomAppBar />
        <Box sx={STYLE_INNER}>
          <DashboardPage
            electionResult={electionResult}
            onChangeElectionResult={this.onChangeElectionResult.bind(this)}
          />
        </Box>
        <HomePageBottomNavigation onClickClear={this.onClickClear.bind(this)} />
      </Box>
    );
  }
}
