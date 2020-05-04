import Axios from "axios";

class GalleryAPI {
    // endpoint = 'https://jsonplaceholder.typicode.com/photos';
    endpoint = 'https://api.unsplash.com/photos/';

    searchEndPoint = (page) => {
        return `${this.endpoint}?page=${page}&client_id=${process.env.REACT_APP_ACCESS_KEY}`;
    }

    getAll = (page = 1) => {
        return Axios.get(this.searchEndPoint(page));
    }
}

export default GalleryAPI;