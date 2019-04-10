//Modules
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
//SASS
import styles from "./Sidebar.module.scss";
//Redux
import { connect } from "react-redux";
import {
  getSticky,
  getPost,
  getPosts
} from "../../../store/actions/blogActions";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Sidebar = props => {
  //On mount getPosts
  useEffect(() => {
    props.getSticky();
    props.getPosts();
  }, []);

  return (
    <div className={styles.SidebarContainer}>
      <div className={styles.Filter} />
      <div className={styles.SidebarContents}>
        <ul className={styles.ImportantPosts}>
          {props.stickyPosts &&
            props.stickyPosts.map((post, i) => {
              if (i < 5) {
                return (
                  <li
                    key={post.postId}
                    onClick={() => {
                      //Sets the post to be displayed
                      props.getPost(post.postId);
                      //Navigates to the route (updating dom)
                      props.history.push(`/blog/${post.postId}`);
                    }}
                  >
                    {post.title}
                  </li>
                );
              }
            })}
        </ul>

        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <ul className={styles.Social}>
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

//Redux
const mapStateToProps = state => {
  return {
    stickyPosts: state.blog.stickyPosts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSticky: () => {
      dispatch(getSticky());
    },
    getPost: id => {
      dispatch(getPost(id));
    },
    getPosts: () => {
      dispatch(getPosts());
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sidebar)
);
