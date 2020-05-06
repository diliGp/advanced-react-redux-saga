import GalleryAPI from "./GalleryAPI";
import CommentsAPI from "./CommentsAPI";

const API = {
    gallery: new GalleryAPI(),
    comments: new CommentsAPI()
};

Object.freeze(API);

export default API;