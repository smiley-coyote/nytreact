import "./Form.css";
import React from "react";

const Form = props => (
  <div className="row">
    <div className="col-sm-12">
      <br />
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title"><strong> Search Parameters</strong></h3>
        </div>
        <form className="search">
          <div className="form-group">
            <label htmlFor="term">Search Term:</label>
            <input
              value={props.search}
              onChange={props.handleInputChange}
              name="term"
              type="text"
              className="form-control"
              id="term"
            />
            <br />
            <div className="form-group">
              <label for="pwd">Number of Records to Retrieve:</label>
              <select className="form-control" id="num-records-select">
                <option value="1">1</option>
                <option value="5" selected>5</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="form-group">
              <label for="start-year">Start Year (Optional):</label>
              <input type="text" className="form-control" id="start-year" />
            </div>
            <div className="form-group">
              <label for="end-year">End Year (Optional):</label>
              <input type="text" className="form-control" id="end-year" />
            </div>
            <button
              onClick={props.handleFormSubmit}
              className="btn btn-primary"
            >
              Search
      </button>
            <button type="button" class="btn btn-default" id="clear-all">Clear Results</button>
          </div>
        </form>
      </div>
    </div>
  </div>

)

export default Form;