import React, { useState, useEffect } from "react";
import uuid4 from "uuid";
import styles from "./BlogCardsContainer.module.scss";
import BlogCard from "../BlogCard/BlogCard";
import { MagicSpinner } from "react-spinners-kit";
import { connect } from "react-redux";
import { getPosts } from "../../store/actions/blogActions";

const BlogCardsContainer = props => {
  const [loaded, toggleLoaded] = useState(false);
  //On Mount
  useEffect(() => {
    props.getPosts();
    setTimeout(() => {
      toggleLoaded(true);
    }, 1500);
  }, []);
  return (
    <div className={styles.BlogCardsContainer}>
      {props.posts && loaded ? (
        props.posts.map(
          ({
            author,
            body,
            date,
            imageCaption,
            imageURL,
            title,
            postId,
            type,
            subtitle
          }) => {
            //Filter by title
            if (title.toLowerCase().includes(props.filter.toLowerCase())) {
              return (
                <BlogCard
                  postId={postId}
                  key={uuid4()}
                  author={author}
                  body={body}
                  date={date}
                  imageCaption={imageCaption}
                  imageURL={imageURL}
                  title={title}
                  type={type}
                  subtitle={subtitle}
                />
              );
            }
          }
        )
      ) : (
        <MagicSpinner size={140} color="black" />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.blog.posts,
    filter: state.blog.filter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => {
      dispatch(getPosts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BlogCardsContainer);
