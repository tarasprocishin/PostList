import React from "react";
import T from "prop-types";

export const Button = ({ addPosts }) => (
  <button className="more_button" onClick={addPosts}>
    More
  </button>
);

Button.propTypes = {
  addPosts: T.func.isRequired
};
