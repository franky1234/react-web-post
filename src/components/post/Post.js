import React from 'react';
import { Segment, Divider, Card, Feed, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Post.css';
const PostComponent = ({post, comments}) => {
  return (
    <div>
      <Segment>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        <div className="container-author">
          <Button size="mini" >
            <Link
                to={{
                  pathname: `/author/${post.userId}`
                }}
              >
              Author
            </Link>
          </Button>
        </div>
      </Segment>
      <Divider/>
      <Card>
        <Card.Content>
          <Card.Header>Comment's</Card.Header>
        </Card.Content>
        <Card.Content>
          {comments.map(({ id, body, email}) => ( 
            <Feed key={id}>
              <Feed.Event>
                <Feed.Label>
                  <i className="user icon"></i>
                </Feed.Label>
                <Feed.Content>
                  <Feed.Date content={email} />
                  <Feed.Summary>
                    {body} 
                  </Feed.Summary>
                </Feed.Content>
              </Feed.Event>
            </Feed>
          ))}
        </Card.Content>
      </Card>
    </div>
  );
};

export default PostComponent;