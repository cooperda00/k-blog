//Modules
import React, { useEffect } from "react";
import moment from "moment";
import Markdown from "markdown-to-jsx";
//Redux
import { connect } from "react-redux";
import { getPost, clearPost } from "../../store/actions/blogActions";
//SASS
import styles from "./Post.module.scss";

const Post = props => {
  //On Mount get specific
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
    title,
    authorTitle,
    type,
    subtitle
  } = props.post;

  return (
    <div className={styles.PostContainer}>
      <div className={styles.Top}>
        <div className={styles.TitleContainer}>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
        </div>
        <div className={styles.PostMeta}>
          <p>{author}</p>
          <p>{authorTitle}</p>
          <p>{moment.unix(date).format("MMMM D YYYY")}</p>
        </div>
      </div>

      {imageURL && <img src={imageURL} alt={imageCaption} />}

      <div className={styles.MarkdownContainer}>
        {body && <Markdown options={{ forceBlock: true }}>{body}</Markdown>}
      </div>
    </div>
  );
};

//Redux
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
