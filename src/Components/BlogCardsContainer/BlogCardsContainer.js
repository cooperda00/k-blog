//Modules
import React, { useState, useEffect } from "react";
import uuid4 from "uuid";
//SASS
import styles from "./BlogCardsContainer.module.scss";
//Components
import BlogCard from "../BlogCard/BlogCard";
import { MagicSpinner } from "react-spinners-kit";
import Menu from "../Layout/Menu/Menu";
//Redux
import { connect } from "react-redux";

const BlogCardsContainer = ({ posts, filter }) => {
  //UI State
  const [loaded, toggleLoaded] = useState(false);

  //On Mount
  useEffect(() => {
    setTimeout(() => {
      toggleLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className={styles.Wrapper}>
      <Menu />
      <div className={styles.BlogCardsContainer}>
        {posts &&
          posts.map(
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
            }) =>
              //Filter by title
              title.toLowerCase().includes(filter.toLowerCase()) && (
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
              )
          )}
      </div>
    </div>
  );
};

//Redux
const mapStateToProps = state => {
  return {
    posts: state.blog.posts,
    filter: state.blog.filter
  };
};

export default connect(mapStateToProps)(BlogCardsContainer);
