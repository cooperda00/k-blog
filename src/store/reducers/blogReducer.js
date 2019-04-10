const initState = {
  posts: [],
  filter: "",
  post: {},
  stickyPosts: []
};

export const blogReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.posts
      };
    case "GET_POSTS_ERROR":
      console.log(`There was an error fetcing posts: ${action.err}`);
      return state;

    case "GET_POSTS_BY_TYPE":
      return {
        ...state,
        posts: action.posts
      };
    case "GET_POSTS_BY_TYPE_ERROR":
      console.log(`There was an error fetcing posts: ${action.err}`);
      return state;

    case "GET_POST":
      return {
        ...state,
        post: action.post
      };
    case "GET_POST_ERROR":
      console.log(`There was an error fetcing the post: ${action.err}`);
      return state;

    case "GET_STICKY_POSTS":
      return {
        ...state,
        stickyPosts: action.posts
      };
    case "GET_STICKY_POSTS_ERROR":
      console.log(`There was an error fetcing posts: ${action.err}`);
      return state;

    case "CLEAR_POST":
      return {
        ...state,
        post: {}
      };
    case "FILTER_POSTS":
      return {
        ...state,
        filter: action.payload
      };
    default:
      return state;
  }
};
