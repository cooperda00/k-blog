//Modules
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Markdown from "markdown-to-jsx";
//SASS
import styles from "./BlogCard.module.scss";

function BlogCard(props) {
  const {
    author,
    body,
    date,
    imageCaption,
    imageURL,
    title,
    postId,
    type,
    sticky,
    authorTitle,
    subtitle
  } = props;
  const getFallback = () => {
    switch (type) {
      case "vocab":
        return (
          <div className={styles.Fallback}>
            <h1>단</h1>
            <h1>어</h1>
          </div>
        );
      case "grammar":
        return (
          <div className={styles.Fallback}>
            <h1>문</h1>
            <h1>법</h1>
          </div>
        );
      case "resources":
        return (
          <div className={styles.Fallback}>
            <h1>자</h1>
            <h1>료</h1>
          </div>
        );
      default:
        return (
          <div className={styles.Fallback}>
            <h1>안</h1>
            <h1>녕</h1>
          </div>
        );
    }
  };

  return (
    <div className={styles.BlogCardContainer}>
      <div className={styles.Left}>
        <div className={styles.Meta}>
          <div>
            <p>{author}</p>
          </div>
          <div>
            <p>{moment.unix(date).format("MMMM D, YYYY")}</p>
          </div>
        </div>
        <div>
          <h2>{title}</h2>
          {subtitle && <p>{subtitle}</p>}
          {/* <p>{body.substr(0, 150) + "..."}</p> */}
        </div>

        <Link to={`/blog/${postId}`}>Read More</Link>
      </div>
      <div className={styles.Right}>
        {imageURL ? <img src={imageURL} alt={imageCaption} /> : getFallback()}
      </div>
    </div>
  );
}

export default BlogCard;
