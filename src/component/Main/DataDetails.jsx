import React from "react";

const DataDetails = (props) => {
  const { details } = props;
  const {
    firstName,
    lastName,
    description,

    streetAddress,
    city,
    state,
    zip,
  } = details || {};
  return (
    <div id="info-wrapper">
      <h1>Details</h1>
      <p>Click on a table item to get detailed information</p>

      <div id="info-content">
        <div>
          <b>User selected:</b> {firstName}  {lastName}
        </div>
        <div>
          <b>Description: </b>
          <textarea cols="50" rows="5" readOnly>
            {description}
          </textarea>
        </div>
        <div>
          <b>Address:</b> {streetAddress}
        </div>
        <div>
          <b>City:</b> {state}
        </div>
        <div>
          <b>State:</b> {city}
        </div>
        <div>
          <b>Zip:</b> {zip}
        </div>
      </div>
    </div>
  );
};

export default DataDetails;
