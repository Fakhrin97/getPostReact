import { HttpClient } from "../HttpClient";

class CartsService extends HttpClient{
    constructor(){
        super("https://jsonplaceholder.typicode.com");
    }
    getAllPost(){
        return this.get('posts')
    }
    setNewPost(body){
        return this.post('posts',body)
    }
    editPost(body,id){
        return this.put('posts',body,id)
    }
    getPostById(id){
        return this.get(`posts/${id}`)
    }
}
export const cartSevice =new CartsService();

