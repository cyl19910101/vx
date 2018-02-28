import React from "react";
import { connect } from "react-redux";
import { deletePost /* editPost */ } from "./posts/actions";
import { Link } from "react-router-dom";

function PostsView({ posts, dispatch }) {
  return (
    <div>
      {Object.keys(posts).map((id, index) => (
        <div key={id} className="item">
          <span className="order">{index + 1}</span>
          <span>{posts[id].title}</span>
          <div className="actions">
            <Link to={`/post/${id}`} className="action">
              Edit Post
            </Link>
            <a onClick={() => dispatch(deletePost({ id }))} className="action">
              delete
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default connect(({ posts }) => ({ posts }))(PostsView);
