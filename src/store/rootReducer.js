import { combineReducers } from "redux";
import { galleryReducer } from "./Gallery/reducer";

const rootReducer = combineReducers({
    gallery: galleryReducer
});

export default rootReducer;