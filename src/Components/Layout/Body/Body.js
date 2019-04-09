//Modules
import React, { useEffect, useState } from "react";
import uuid4 from "uuid";
import Media from "react-media";
import { MagicSpinner } from "react-spinners-kit";
//Sass
import styles from "./Body.module.scss";
//Components
import BlogCard from "../../BlogCard/BlogCard";
import Sidebar from "../Sidebar/Sidebar";
//Redux
import { connect } from "react-redux";
import { getPosts } from "../../../store/actions/blogActions";

const Body = props => {
  const [loaded, toggleLoaded] = useState(false);

  //On Mount
  useEffect(() => {
    props.getPosts();
    setTimeout(() => {
      toggleLoaded(true);
    }, 1500);
  }, []);

  return (
    <div className={styles.BodyContainer}>
      <div className={styles.BlogCardsContainer}>
        {props.posts && loaded ? (
          props.posts.map(
            ({ author, body, date, imageCaption, imageURL, title, postId }) => {
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
                  />
                );
              }
            }
          )
        ) : (
          <MagicSpinner size={140} color="black" />
        )}
      </div>
      <Media query="(min-width: 1000px)">
        {matches => (matches ? <Sidebar /> : null)}
      </Media>
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
)(Body);
