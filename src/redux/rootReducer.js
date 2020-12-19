import { combineReducers } from "redux";

import homeReducer from "./Home/HomeReducer";
import UserReducer from "./User/UserReducer";
import PostsReducer from "./Posts/PostsReducer";
import AlbumsReducer from "./Albums/AlbumsReducer";

const rootReducer = combineReducers({
  home: homeReducer,
  user: UserReducer,
  posts: PostsReducer,
  albums: AlbumsReducer,
});

export default rootReducer;
