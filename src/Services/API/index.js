import GalleryAPI from "./GalleryAPI";

const API = {
    gallery: new GalleryAPI()
};
console.log(API);

Object.freeze(API);

export default API;