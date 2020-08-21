import React, { useState } from "react";
import axios from "axios";
import "../styling/gallery.css";
import SearchResults from "./searchResults";
import FilterColor from "./filterColor";

function SearchImages(props) {
  /**
   * Functional component that handles search.
   * @param {accessKey} Unsplash API access key
   * @param {imageQuery} Word query from the input field
   * @param {results} JSON containing the array of image objects fetched from the API using the @param {axios} client
   * @param {value} String specifing the color filtering passed from the {FilterColor} component
   * @param {url} String concatenation producing the url link used in @property {handleSearch} to request the collection of results
   */

  const [accessKey] = useState("D-kSO736eZUjwrItOKMSW34_hOzMPPx0fF0oTjeXCRI");
  const [imageQuery, setImageQuery] = useState("");
  const [results, setResults] = useState([]);
  const [value, setValue] = useState("");

  const url =
    "https://api.unsplash.com/search/photos?page=1&query=" +
    imageQuery +
    "&client_id=" +
    accessKey +
    "&per_page=9" +
    value;

  const onchange = (color) => {
    setValue(color);
    // console.log("Form ", value);
  };

  const handleChange = (e) => {
    setImageQuery(e.target.value);
    document.getElementsByClassName("imgSearchResults")[0].style.display =
      "flex";
  };

  const handleSearch = (e) => {
    // console.log("VALUE " + value);
    // console.log("URL " + url);

    axios.get(url).then((response) => {
      //  console.log(response);
      setResults(response.data.results);
    });
  };

  const resetResults = (e) => {
    setResults([]);
  };

  return (
    <div className="searchContainer">
      <div className="imgSearch">
        <input
          className="searchField"
          type="text"
          onChange={handleChange}
          onKeyPress={(e) => e.key === "Enter" && handleSearch(e.target.value)}
        />
        <div className="close" onClick={resetResults}>
          <span className="x1"></span>
          <span className="x2"></span>
        </div>
      </div>

      <FilterColor
        color={value}
        onchange={(e) => {
          onchange(e);
          handleSearch(e);
        }}
        onKeyPress={(e) => e.key === "Enter" && handleSearch(e.target.value)}
      />

      <SearchResults results={results} />
    </div>
  );
}

export default SearchImages;
