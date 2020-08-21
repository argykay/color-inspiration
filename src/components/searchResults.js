import React from "react";

/**
 * Functional component that renders dynamical components defined in the JSON received from the search request via props.
 * @property {props.results.map((imageQuery)...)} iterates over the collection generating individual elements for each image result.
 */

function SearchResults(props) {
  return (
    <div className="imgSearchResults">
      {props.results.map((imageQuery) => (
        <div className="imgSearchResult">
          <div
            className="colorCard"
            style={{ backgroundColor: imageQuery.color }}
          >
            <img
              src={imageQuery.urls.small}
              alt="image related to your search"
            />
            <div className="colorCode" style={{ backgroundColor: "white" }}>
              {imageQuery.color}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
