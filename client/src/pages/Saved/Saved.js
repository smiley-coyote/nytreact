import React, { Component } from "react";
import API from "../../utils/API";
import Results from "../../components/Results"
import Wrapper from "../../components/Wrapper"

class Saved extends Component {
  state = {
    saved: []
  }


  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ saved: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteArticle = (id) =>{
    API.deleteArticle(id)
    .then(res => this.loadArticles())
    .catch(err => console.log(err));
  }
  

  render() {
    return (
    <Wrapper>
<Results>
    {this.state.saved.map(result => (
         <div key={result._id}>
         <h2>{result.title}</h2>
         <a href={result.url}>visit article</a>
         <button onClick={() => this.deleteArticle(result._id)}>Delete</button>
         </div>
    ))}
 </Results>
    </Wrapper>
    );
  }

}

export default Saved;