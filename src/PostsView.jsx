import React from "react";
import { connect } from "react-redux";
import { deletePost, editPost } from "./posts/actions";

function PostsView({ posts, dispatch }) {
  return (
    <div>
      {Object.keys(posts).map(id => (
        <div key={id}>
          <p>title : {posts[id].title}</p>
          <p>content : {posts[id].content}</p>
          <button onClick={() => dispatch(deletePost({ id }))}>delete</button>
          <button
            onClick={() =>
              dispatch(
                editPost({
                  id,
                  title: "" + Math.random(),
                  content: "" + Math.random()
                })
              )
            }
          >
            edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default connect(({ posts }) => ({ posts }))(PostsView);
