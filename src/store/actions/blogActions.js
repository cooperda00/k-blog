//Modules
import client from "../../config/contentful";
import moment from "moment";

const getPosts = () => {
  return dispatch => {
    client
      //Get all entries of a specific content-type
      .getEntries({
        content_type: "testBlogPost"
      })
      //Extract neccessary data from fetch response and format
      .then(entries => {
        console.log(entries);
        const posts = [];
        entries.items.forEach(item => {
          //Format Contentful time to unix timestamp
          const date = moment(item.sys.updatedAt).format("X");
          const post = {
            postId: item.sys.id,
            author: item.fields.author,
            body: item.fields.body,
            date: date,
            title: item.fields.title,
            imageURL: item.fields.image.fields.file.url,
            imageCaption: item.fields.image.fields.description,
            type: item.fields.type
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
  console.log("Fetching");
  return dispatch => {
    client
      //Get all entries of a specific content-type
      .getEntries({
        content_type: "testBlogPost",
        "fields.type": type
      })
      //Extract neccessary data from fetch response and format
      .then(entries => {
        console.log(entries);
        const posts = [];
        entries.items.forEach(item => {
          //Format Contentful time to unix timestamp
          const date = moment(item.sys.updatedAt).format("X");
          const post = {
            postId: item.sys.id,
            author: item.fields.author,
            body: item.fields.body,
            date: date,
            title: item.fields.title,
            imageURL: item.fields.image.fields.file.url,
            imageCaption: item.fields.image.fields.description,
            type: item.fields.type
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
        const date = moment(entry.sys.updatedAt).format("X");
        const post = {
          postId,
          author: entry.fields.author,
          body: entry.fields.body,
          date: date,
          title: entry.fields.title,
          imageURL: entry.fields.image.fields.file.url,
          imageCaption: entry.fields.image.fields.description
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

export { getPosts, getPost, clearPost, filterPosts, getPostsByType };
