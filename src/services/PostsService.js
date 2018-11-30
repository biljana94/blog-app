import axios from 'axios'; //importovali smo axios biblioteku i preko nje dovlacimo neke podatke ili saljemo na server

class Posts {
    constructor() {
        //ovo nam je base url na koji kacimo ostalo...npr: posts...
        axios.defaults.baseURL = 'http://localhost:3000/api/';
    }

    //dobavljamo sve postove preko axios biblioteke sa rute ('posts')
    getAll() {
        return axios.get('posts');
    }

    //dovlacimo sa rute posts id 
    get(id) {
        return axios.get(`posts/${id}`);
    }

    add(post) {
        return axios.post('posts', post);
    }
}

export const posts = new Posts(); //importujemo je ovako: import {posts} from...
