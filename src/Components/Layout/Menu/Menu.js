//Modules
import React from "react";
//SASS
import styles from "./Menu.module.scss";
//Redux
import { connect } from "react-redux";
import { getPosts, getPostsByType } from "../../../store/actions/blogActions";

//Use Media to conditionally render based on viewport size
const Menu = props => {
  const types = ["All", "Vocab", "Grammar", "Resources"];

  const getPostByType = e => {
    const type = e.target.innerHTML;

    if (type === "All") {
      props.getPosts();
    } else {
      props.getPostsByType(type);
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
