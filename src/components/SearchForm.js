import React from 'react';

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Search by name: </label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a User"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
