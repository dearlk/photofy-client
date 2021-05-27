import React from 'react';
import PostCard from "./post_card.js";

class Posts extends React.Component {
  constructor() {
    super();
    this.state = { posts: [] };
  }

  componentDidMount() {
      //console.log("fetching data...")
    fetch('/api')
      .then(response => response.json())
      .then(json => this.setState({ posts: json }));
  }

  render() {
    return (
      <div>
        {
          this.state.posts.length === 0
            ? 'Loading posts...'
            : this.state.posts.map(post => (
              <PostCard url={post.url}/>
              
            ))
        }
      </div>
    );
  }
}

export default Posts;