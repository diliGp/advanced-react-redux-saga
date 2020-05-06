import Axios from "axios";

class CommentsAPI {
    endPoint = 'https://jsonplaceholder.typicode.com/comments';

    getList = () => {
        const result = Axios.get(this.endPoint);
        return result;        
    }
}

export default CommentsAPI;