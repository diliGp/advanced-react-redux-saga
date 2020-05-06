import { combineReducers } from "redux";
import { galleryReducer } from "./Gallery/reducer";
import commentsReducer from "./Comments/reducer";

const rootReducer = combineReducers({
    gallery: galleryReducer,
    comments: commentsReducer
});

export default rootReducer;