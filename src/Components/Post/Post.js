//Modules
import React, { useEffect } from "react";
import moment from "moment";
//Redux
import { connect } from "react-redux";
import { getPost, clearPost } from "../../store/actions/blogActions";
//Sass
import styles from "./Post.module.scss";

const Post = props => {
  //On Mount
  useEffect(() => {
    props.getPost(props.match.params.id);
  }, []);

  //On Dismount
  useEffect(() => {
    return () => {
      props.clearPost();
    };
  }, []);

  const {
    author,
    body,
    date,
    imageCaption,
    imageURL,
    postId,
    title
  } = props.post;

  return (
    <div className={styles.PostContainer}>
      <h2>{title}</h2>
      <img src={imageURL} alt={imageCaption} />
      <div className={styles.PostMeta}>
        <p>Author: {author}</p>
        <p>Last Edited: {moment.unix(date).format("MMMM D YYYY")}</p>
      </div>
      <p className={styles.BodyText}>{body}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    post: state.blog.post
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getPost: postId => {
      dispatch(getPost(postId));
    },
    clearPost: () => {
      dispatch(clearPost());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
