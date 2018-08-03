import { combineReducers } from 'redux';
import PostReducer from '../reducers/reducer_posts'

const rootReducer = combineReducers({
  posts: PostReducer
});

export default rootReducer;
