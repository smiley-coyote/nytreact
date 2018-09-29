import React, { Component } from "react";
import API from "../../utils/API";
import Wrapper from "../../components/Wrapper"
import Form from "../../components/Form"
import Results from "../../components/Results"


class Home extends Component {
  state = {
    results: [],
    search: "",
    number: 5,
    startYear: 1980,
    endYear: 2018
  }

saveArticle = data =>{
  API.saveArticle({
    title: data.headline.main,
    url: data.web_url
  })
}
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

handleFormClear = event => {
  event.preventDefault();
  this.setState({results: []})
}

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
                handleFormClear={this.handleFormClear}
              />
<Results>
    {this.state.results.map(result => (
         <div key={result._id}>
         <h2>{result.headline.main}</h2>
         <p>{result.snippet}</p>
         <a href={result.web_url}>visit article</a>
         <button onClick={() => this.saveArticle(result)}>Save</button>
         </div>
    ))}
 </Results>
    </Wrapper>
    );
  }

}

export default Home;