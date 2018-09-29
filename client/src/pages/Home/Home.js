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
    .then(res =>{
      console.log(res.data.response.docs);
      this.setState({ results: res.data.response.docs})
    })
      // .then(res => {
      //   if (res.data.status === "error") {
      //     throw new Error(res.data.message);
      //   }
      //   this.setState({ results: res.data, error: "" });
      // })
      // .catch(err => this.setState({ error: err.message }));
  };

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