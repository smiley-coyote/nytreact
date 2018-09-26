import React, { Component } from "react";
import API from "../../utils/API";
import Wrapper from "../../components/Wrapper"
import Form from "../../components/Form"
import Results from "../../components/Results"


class Home extends Component {
  state = {
    results: [],
    search: ""
    // number: 5,
    // startYear: 1980,
    // endYear: 2018
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };



  handleFormSubmit = event => {
    event.preventDefault();
    API.search(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.search && this.state.number) {
  //     API.search({
  //       search: this.state.search,
  //       number: this.state.number,
  //     })
  //       .then(res => this.loadResults())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
    <Wrapper>
    <Form
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
    <Results results={this.state.results} />
    </Wrapper>
    );
  }

}

export default Home;