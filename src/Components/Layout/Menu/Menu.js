//Modules
import React from "react";
import Media from "react-media";
//SASS
import styles from "./Menu.module.scss";
//Redux
import { connect } from "react-redux";
import { getPosts, getPostsByType } from "../../../store/actions/blogActions";

//Use Media to conditionally render based on viewport size
const Menu = props => {
  const types = ["All", "Type 1", "Type 2", "Type 3", "Type 4"];

  const getPostByType = e => {
    const type = e.target.innerHTML;

    if (type === "All") {
      props.getPosts();
    } else {
      props.getPostsByType(type);
    }
  };
  return (
    <>
      <Media query="(min-width: 1000px)">
        {matches =>
          matches && (
            <div className={styles.MenuContainer}>
              {types.map(type => (
                <button onClick={getPostByType} key={type}>
                  {type}
                </button>
              ))}
            </div>
          )
        }
      </Media>
    </>
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
