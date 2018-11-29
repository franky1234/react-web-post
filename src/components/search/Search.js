import React, { Component } from 'react';
import { PostService } from '../../services/index';
import { SuggestionsComponent } from '../list/index';
import { PostComponent } from '../post/index';
import './Search.css';

class SearchComponent extends Component {

  constructor() {
    super();
    this.title = 'Search Post';
    this.state = {
      posts: [],
      suggestions: [],
      isVisibleList: false,
      isVisiblePost: false,
      selectedPostId: 0,
      singlePost:{},
      commentsBySinglePost: []
    };
  }

  componentDidMount() {
    this.getPostService();
  }

  getPostService = async() => {
    return PostService.getAllPosts()
      .then(posts => {
        this.setState({
          posts: posts
        });
      });
  }

  getPostById = async(postId) => {
    const visiblePost = true;
    return PostService.getPostById(postId)
      .then(post =>{
        this.setState({
          isVisiblePost: visiblePost,
          singlePost: post
        });
      });
  }

  getCommentsByPostId = async(postId) => {
    return PostService.getCommentsByPostId(postId)
      .then(comments => {
        this.setState({
          commentsBySinglePost: comments
        });
      });
  }

  findRecursiveStringMatch = ({post, search, current}) => {
    const {title} = post;
    const outbound = title.length - search.length;
    if (title.length < search.length) return false;
    if(current === outbound) return false;
    const segment = title.substring(current, search.length + current).toLowerCase();
    if (segment === search.toLowerCase()) return true;
    return (title, search, current + 1);
  }
  
  filterPosts = ({posts, search}) => {
    return posts.filter(post => this.findRecursiveStringMatch({post, search, current: 0}));
  }

  searchSuggestions = (event) =>{
    const {target: {value}} = event;
    const [...posts] = this.state.posts;
    const suggestions = this.filterPosts({posts, search: value});
    const visibleList = true;
    this.setState({
      suggestions: suggestions,
      isVisibleList: visibleList
    });
  }

  updateVisible = (id) => {
    const postId = parseInt(id);
    const visibleList = false;

    this.setState({
      selectedPostId: postId,
      isVisibleList: visibleList
    });
    
    this.getPostById(postId).then(this.getCommentsByPostId(postId));
  }

  hidePost = () => {
    const visiblePost = false;
    this.setState({
      isVisiblePost: visiblePost,
      singlePost:{},
      commentsBySinglePost: []
    });
  }

  render() {
    const title = this.title;
    const suggestions = this.state.suggestions;    
    const search = this.searchSuggestions;
    const visibleList = this.state.isVisibleList;
    const visiblePost = this.state.isVisiblePost;
    const hidePost = this.hidePost;
    const singlePost = this.state.singlePost;
    const commentsBySinglePost = this.state.commentsBySinglePost;

    return (
      <div>
        <h1>{title}</h1>
        <div className="ui icon input">
          <input type="text" placeholder="Search Post..." onChange={search} onClick={hidePost} />
          <i className="circular search link icon"></i>
        </div>
        {
          visibleList !== false ? 
          <SuggestionsComponent suggestions={suggestions} changeStateParent={this.updateVisible} />
          : null
        }
        {
          visiblePost !== false ?
          <PostComponent post={singlePost} comments={commentsBySinglePost}/> : null
        }
      </div>
    );
  }
}

export default SearchComponent;
