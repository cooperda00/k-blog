//Modules
import client from "../../config/contentful";
import moment from "moment";

const getPosts = () => {
  return dispatch => {
    client
      //Get all entries of a specific content-type
      .getEntries({
        content_type: "kLangPost"
      })
      //Extract neccessary data from fetch response and format
      .then(entries => {
        const posts = [];
        entries.items.forEach(item => {
          //Format Contentful time to unix timestamp
          const date = moment(item.sys.createdAt).format("X");
          //Check if image exists
          const imageURL = item.fields.mainImage
            ? item.fields.mainImage.fields.file.url
            : null;
          const imageCaption = item.fields.mainImage
            ? item.fields.mainImage.fields.description
            : null;
          //Create post
          const post = {
            postId: item.sys.id,
            subtitle: item.fields.subtitle,
            date,
            sticky: item.fields.sticky,
            author: item.fields.author,
            authorTitle: item.fields.authorTitle,
            body: item.fields.body,
            title: item.fields.title,
            imageURL,
            imageCaption,
            type: item.fields.postType
          };
          posts.push(post);
        });
        //Order Array By Timestamp
        posts.sort((a, b) => b.date - a.date);
        return posts;
      })
      //Dispatch array of posts to the store
      .then(posts => {
        dispatch({
          type: "GET_POSTS",
          posts: posts
        });
      })
      .catch(err => {
        dispatch({
          type: "GET_POSTS_ERROR",
          err
        });
      });
  };
};

const getPostsByType = type => {
  return dispatch => {
    client
      //Get all entries of a specific content-type
      .getEntries({
        content_type: "kLangPost",
        "fields.postType": type.toLowerCase()
      })
      //Extract neccessary data from fetch response and format
      .then(entries => {
        const posts = [];
        entries.items.forEach(item => {
          //Format Contentful time to unix timestamp
          const date = moment(item.sys.createdAt).format("X");
          //Check if image exists
          const imageURL = item.fields.mainImage
            ? item.fields.mainImage.fields.file.url
            : null;
          const imageCaption = item.fields.mainImage
            ? item.fields.mainImage.fields.description
            : null;
          //Create Post
          const post = {
            postId: item.sys.id,
            subtitle: item.fields.subtitle,
            date,
            sticky: item.fields.sticky,
            author: item.fields.author,
            authorTitle: item.fields.authorTitle,
            body: item.fields.body,
            title: item.fields.title,
            imageURL,
            imageCaption,
            type: item.fields.postType
          };
          posts.push(post);
        });
        //Order Array By Timestamp
        posts.sort((a, b) => b.date - a.date);
        return posts;
      })
      //Dispatch array of posts to the store
      .then(posts => {
        dispatch({
          type: "GET_POSTS_BY_TYPE",
          posts: posts
        });
      })
      .catch(err => {
        dispatch({
          type: "GET_POSTS_BY_TYPE_ERROR",
          err
        });
      });
  };
};

const getPost = postId => {
  return dispatch => {
    client
      //Get specific entry
      .getEntry(postId)
      //Extract neccessary data from fetch response and format
      .then(entry => {
        const date = moment(entry.sys.createdAt).format("X");
        const post = {
          postId,
          subtitle: entry.fields.subtitle,
          author: entry.fields.author,
          authorTitle: entry.fields.authorTitle,
          body: entry.fields.body,
          date: date,
          title: entry.fields.title,
          sticky: entry.fields.title,
          type: entry.fields.postType,
          imageURL: entry.fields.mainImage
            ? entry.fields.mainImage.fields.file.url
            : null,
          imageCaption: entry.fields.mainImage
            ? entry.fields.mainImage.fields.description
            : null
        };
        return post;
      })
      //Dispatch post object to the store
      .then(post => {
        dispatch({
          type: "GET_POST",
          post
        });
      })
      .catch(err => {
        dispatch({
          type: "GET_POST_ERROR",
          err
        });
      });
  };
};

const getSticky = () => {
  return dispatch => {
    client
      //Get all entries that are marked as sticky
      .getEntries({
        content_type: "kLangPost",
        "fields.sticky": true
      })
      //Extract neccessary data from fetch response and format
      .then(entries => {
        const stickyPosts = [];
        entries.items.forEach(item => {
          //Create Post
          const post = {
            postId: item.sys.id,
            title: item.fields.title
          };
          stickyPosts.push(post);
        });
        //Order Array By Timestamp
        stickyPosts.sort((a, b) => b.date - a.date);
        return stickyPosts;
      })
      //Dispatch array of posts to the store
      .then(posts => {
        dispatch({
          type: "GET_STICKY_POSTS",
          posts: posts
        });
      })
      .catch(err => {
        dispatch({
          type: "GET_STICKY_POSTS_ERROR",
          err
        });
      });
  };
};

const clearPost = () => {
  return {
    type: "CLEAR_POST"
  };
};

const filterPosts = filter => {
  return {
    type: "FILTER_POSTS",
    payload: filter
  };
};

export { getPosts, getPost, clearPost, filterPosts, getPostsByType, getSticky };
