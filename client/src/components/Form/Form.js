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
              value={props.value}
              onChange={props.handleInputChange}
              name="search"
              type="text"
              className="form-control"
              id="search"
            />
            <br />
            <div className="form-group">
              <label htmlFor="pwd">Number of Records to Retrieve:</label>
              <select className="form-control" id="num-records-select">
                <option value="1">1</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="start-year">Start Year (Optional):</label>
              <input type="text" className="form-control" id="start-year" />
            </div>
            <div className="form-group">
              <label htmlFor="end-year">End Year (Optional):</label>
              <input type="text" className="form-control" id="end-year" />
            </div>
            <button
              onClick={props.handleFormSubmit}
              className="btn btn-primary"
            >
              Search
      </button>
            <button type="button" className="btn btn-default" id="clear-all">Clear Results</button>
          </div>
        </form>
      </div>
    </div>
  </div>

)

export default Form;