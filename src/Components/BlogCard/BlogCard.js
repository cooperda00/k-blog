//Modules
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
//SASS
import styles from "./BlogCard.module.scss";

function BlogCard({
  author,
  date,
  imageCaption,
  imageURL,
  title,
  postId,
  type,
  subtitle
}) {
  //Generate 'Image' for posts without main image
  const getFallback = () => {
    let output = null;
    switch (type) {
      case "vocab":
        output = (
          <>
            <h1>단</h1>
            <h1>어</h1>
          </>
        );
        break;
      case "grammar":
        output = (
          <>
            <h1>문</h1>
            <h1>법</h1>
          </>
        );
        break;
      case "resources":
        output = (
          <>
            <h1>자</h1>
            <h1>료</h1>
          </>
        );
        break;
      default:
        output = (
          <>
            <h1>안</h1>
            <h1>녕</h1>
          </>
        );
        break;
    }
    return <div className={styles.Fallback}>{output}</div>;
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
          {/* Display a truncated subtitle if length greater than 150chars */}
          {subtitle && (
            <p>
              {subtitle.length > 150
                ? subtitle.substr(0, 150) + "..."
                : subtitle}
            </p>
          )}
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
