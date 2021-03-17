import React, { Component } from "react";
import Axios from "axios";
import baseURL from "../../utils/github";
import RepoCard from "../RepoCard";
import { Grid } from "@material-ui/core"; 
require('dotenv').config();

class Repos extends Component {
  Title = [];
  state = {
    repo: [],
    language: [],
  };

  async componentDidMount() {
    const api_key = process.env.REACT_APP_API_KEY; 
 
    let repo = [
      baseURL(`Employee-Directory`),
      baseURL(`Budget-Tracker`),
      baseURL(`Workout-Tracker`),
      baseURL(`Camping-Planner`),
      baseURL(`Burger-Logger`),
      baseURL(`Employee-Tracker`),
      baseURL(`Note-Taker`),
      baseURL(`Team-Profile-Generator`),
      baseURL(`README-Generator`),
      baseURL(`Weather-Dashboard`),
      baseURL(`Brewery-Finder`),
      baseURL(`Day-Planner`),
      baseURL(`Code-Quiz`),
      baseURL(`Password-Generator`),
      baseURL(`Code-Refractor`),
      baseURL(`Responsive-Portfolio`),
      baseURL(`Portfolio`),
    ];

    await Axios.get("https://github-lang-deploy.herokuapp.com/").then(
      async (res) => await this.setState({ language: res.data })
    );
    repo.map(
      async (url) =>
        await Axios.get(url, {
          headers: {
            Authorization: `token ${api_key}`,
          },
        }).then(async (res) => {
          await this.setState({
            repo: [...this.state.repo, res.data],
          });
        })
    );
  }
  render() {
    const { repo, language } = this.state;
    repo.sort((a, b) =>
      a.stargazers_count > b.stargazers_count
        ? -1
        : b.stargazers_count > a.stargazers_count
        ? 1
        : 0
    );
    return (
      <Grid container spacing={1}>
        {repo.map((data, i) => (
          <RepoCard repo={data} key={i} language={language} />
        ))}
      </Grid>
    );
  }
}
export default Repos;