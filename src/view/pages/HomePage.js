import { Component } from "react";

import Box from "@mui/material/Box";

import I18N from "../../nonview/base/I18N";
import URLContext from "../../nonview/base/URLContext";

import CustomAppBar from "../../view/molecules/CustomAppBar";
import HomePageBottomNavigation from "../../view/molecules/HomePageBottomNavigation";
import DashboardPage from "../../view/pages/DashboardPage";

const STYLE = {
  width: 400,
  maxWidth: "90%",
  margin: "auto",
  marginTop: 5,
  marginBottom: 10,
};

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const context = this.getContext();
    this.state = {
      context,
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

  render() {
    const { context } = this.state;
    const key = "context-" + JSON.stringify(context);

    return (
      <Box key={key} sx={STYLE}>
        <CustomAppBar />
        <DashboardPage />
        <HomePageBottomNavigation
          onSelectLanguage={this.onSelectLanguage.bind(this)}
        />
      </Box>
    );
  }
}
