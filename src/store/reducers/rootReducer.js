//Modules
import { combineReducers } from "redux";
//Reducers
import { blogReducer } from "./blogReducer";
//Firebase
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  blog: blogReducer
});

export default rootReducer;
