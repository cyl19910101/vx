import React from "react";
import { connect } from "react-redux";

function NavBar({ words }) {
  return <div className="nav-bar">{words}</div>;
}

export default connect(({ posts, router }) => {
  if (router.location.pathname === "/create") {
    return { words: "Create" };
  }
  if (/^\/post\/\d+$/.test(router.location.pathname)) {
    const id = +/^\/post\/(\d+)$/.exec(router.location.pathname)[1];
    const { title = "" } = posts[id] || {};
    return { words: "Edit Post: " + title };
  }
  return { words: "Posts" };
})(NavBar);
