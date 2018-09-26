import "./Form.css";
import React from "react";

const Form = props => (
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
      <button
        onClick={props.handleFormSubmit}
        className="btn btn-primary"
      >
        Search
      </button>
  </div>
 </form>
     
          )
          
export default Form;