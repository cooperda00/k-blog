//Modules
import React, { useEffect } from "react";
import moment from "moment";
import Markdown from "markdown-to-jsx";
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
    title,
    sticky,
    authorTitle,
    type
  } = props.post;

  return (
    <div className={styles.PostContainer}>
      <h2>{title}</h2>
      {imageURL && <img src={imageURL} alt={imageCaption} />}
      <div className={styles.PostMeta}>
        <div>
          <p>Author: </p>
          <p>
            {author}, {authorTitle}
          </p>
        </div>
        <div>
          <p>Last Edited: </p>
          <p>{moment.unix(date).format("MMMM D YYYY")}</p>
        </div>
      </div>
      <div className={styles.MarkdownContainer}>
        {body && <Markdown options={{ forceBlock: true }}>{body}</Markdown>}
      </div>
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
