import { Url } from '../commons/index';

const UriPost = {
  all: 'posts',
  queryLimit: '?_limit=100',
  comments: 'comments',
  userById: '?userId='
};

const getPostFetchHeader = {
  method: 'GET'
};

const PostService = {
  getAllPosts: async() => {
    return fetch(`${Url.base}${UriPost.all}${UriPost.queryLimit}`, getPostFetchHeader)
      .then(response => response.json()); 
  },
  getPostById: async(id) => {
    return fetch(`${Url.base}${UriPost.all}/${id}`, getPostFetchHeader)
      .then(response => response.json()); 
  },
  getCommentsByPostId: async(id) => {
    return fetch(`${Url.base}${UriPost.all}/${id}/${UriPost.comments}`, getPostFetchHeader)
      .then(response => response.json()); 
  }

};

export default PostService;
