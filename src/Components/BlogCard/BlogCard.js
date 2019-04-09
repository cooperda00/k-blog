//Modules
import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
//SASS
import styles from "./BlogCard.module.scss";

function BlogCard({
  author,
  body,
  date,
  imageCaption,
  imageURL,
  title,
  postId
}) {
  return (
    <div className={styles.BlogCardContainer}>
      <div className={styles.Left}>
        <div className={styles.Meta}>
          <div>
            <p>Author: </p>
            <p>{author}</p>
          </div>
          <div>
            <p>Last Updated: </p>
            <p>{moment.unix(date).format("MMMM D YYYY")}</p>
          </div>
        </div>
        <h2>{title}</h2>
        <p>{body.substr(0, 150) + "..."}</p>

        <Link to={`/blog/${postId}`}>Read More</Link>
      </div>
      <div className={styles.Right}>
        <img src={imageURL} alt={imageCaption} />
      </div>
    </div>
  );
}

export default BlogCard;
