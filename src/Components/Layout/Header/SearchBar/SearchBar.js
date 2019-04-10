//Modules
import React from "react";
//SASS
import styles from "./SearchBar.module.scss";
//Redux
import { connect } from "react-redux";
import { filterPosts } from "../../../../store/actions/blogActions";

function SearchBar({ filterPosts }) {
  return (
    <div className={styles.SearchBarContainer}>
      <label>Search:</label>
      <input
        type="text"
        onChange={e => {
          filterPosts(e.target.value);
        }}
      />
    </div>
  );
}

//Redux
const mapDispatchToProps = dispatch => {
  return {
    filterPosts: filter => {
      dispatch(filterPosts(filter));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(SearchBar);
