import React from "react";
import PostsView from "./PostsView";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div className="action-bar">
        <Link to="/create" className="success">
          Create Post
        </Link>
      </div>
      <PostsView />
    </div>
  );
}
