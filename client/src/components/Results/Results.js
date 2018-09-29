import "./Results.css";
import React from "react";

const Results = props => (
  
  <div className="row">
    <div className="col-sm-12">
      <br />
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title"><strong>Top Articles</strong></h3>
        </div>
        <div className="panel-body" id="well-section">
        <ul className="list-group search-results">
    {props.children}
  </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Results;