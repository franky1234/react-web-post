import { Url } from '../commons/index';

const UriUser = {
  all: 'users'
};

const getPostFetchHeader = {
  method: 'GET'
};

const UserService = {
  getUserById: async(id) => {
    return fetch(`${Url.base}${UriUser.all}/${id}`, getPostFetchHeader)
      .then(response => response.json()); 
  }
};

export default UserService;