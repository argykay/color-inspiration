import React, { useState } from "react";
import "../styling/filterColor.css";

/**
 * Functional component that returns a @type {form} of the color choice filter buttons.
 * It passes the @param {value} to @param {url} in search via props.
 */

const FilterColor = function (props) {
  // console.log("PROPS: ", props);

  const [value] = useState("");

  const handleChange = (e) => {
    props.onchange(e.target.value);
  };

  return (
    <form className="filter">
      <p>Filter by color</p>
      <div className="allOptions">
        <label className="colorOption" id="red">
          <input
            alt="red"
            className="radioColor"
            type="radio"
            value="&color=red"
            checked={value === "&color=red"}
            onChange={handleChange}
          />
        </label>
        <label className="colorOption" id="orange">
          <input
            alt="orange"
            className="radioColor"
            type="radio"
            value="&color=orange"
            checked={value === "&color=orange"}
            onChange={handleChange}
          />
        </label>
        <label className="colorOption" id="yellow">
          <input
            alt="yellow"
            className="radioColor"
            type="radio"
            value="&color=yellow"
            checked={value === "&color=yellow"}
            onChange={handleChange}
          />
        </label>
        <label className="colorOption" id="green">
          <input
            alt="green"
            className="radioColor"
            type="radio"
            value="&color=green"
            checked={value === "&color=green"}
            onChange={handleChange}
          />
        </label>
        <label className="colorOption" id="blue">
          <input
            alt="blue"
            className="radioColor"
            type="radio"
            value="&color=blue"
            checked={value === "&color=blue"}
            onChange={handleChange}
          />
        </label>
        <label className="colorOption" id="purple">
          <input
            alt="purple"
            className="radioColor"
            type="radio"
            value="&color=purple"
            checked={value === "&color=purple"}
            onChange={handleChange}
          />
        </label>
        <label className="colorOption" id="gray">
          <input
            alt="gray"
            className="radioColor"
            type="radio"
            value="&color=black_and_white"
            checked={value === "&color=black_and_white"}
            onChange={handleChange}
          />
        </label>
        <label className="colorOption">
          <input
            alt="all"
            className="radioColor"
            type="radio"
            value=" "
            checked={value === " "}
            onChange={handleChange}
          />
        </label>
      </div>
    </form>
  );
};
export default FilterColor;
