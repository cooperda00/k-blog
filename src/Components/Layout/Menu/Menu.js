//Modules
import React from "react";
//SASS
import styles from "./Menu.module.scss";
//Redux
import { connect } from "react-redux";
import { getPosts, getPostsByType } from "../../../store/actions/blogActions";

//Use Media to conditionally render based on viewport size
const Menu = ({ getPosts, getPostsByType }) => {
  const types = ["All", "Vocab", "Grammar", "Resources"];

  const getPostByType = e => {
    const type = e.target.innerHTML;
    if (type === "All") {
      getPosts();
    } else {
      getPostsByType(type);
    }
  };

  return (
    <div className={styles.MenuContainer}>
      {types.map(type => (
        <button onClick={getPostByType} key={type}>
          {type}
        </button>
      ))}
    </div>
  );
};

//Redux
const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => {
      dispatch(getPosts());
    },
    getPostsByType: type => {
      dispatch(getPostsByType(type));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Menu);
