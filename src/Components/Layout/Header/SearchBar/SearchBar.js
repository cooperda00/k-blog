//Modules
import React from "react";
//SASS
import styles from "./SearchBar.module.scss";
//Redux
import { connect } from "react-redux";
import { filterPosts } from "../../../../store/actions/blogActions";

function SearchBar(props) {
  return (
    <div className={styles.SearchBarContainer}>
      <p>Search:</p>
      <input
        type="text"
        onChange={e => {
          props.filterPosts(e.target.value);
        }}
      />
    </div>
  );
}

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
