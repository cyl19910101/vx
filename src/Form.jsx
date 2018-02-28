import React, { Component } from "react";
import { createPost, editPost } from "./posts/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { push } from "react-router-redux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      content: props.content
    };
  }

  onSave = () => {
    const { title, content } = this.state;
    const { id } = this.props;
    if (title !== "" && content !== "") {
      this.props.dispatch(
        id ? editPost({ id, title, content }) : createPost({ title, content })
      );
      this.setState({ title: "", content: "" });
      this.props.dispatch(push("/"));
    }
  };

  render() {
    const { title, content } = this.state;
    return (
      <div className="wrapper">
        <div className="panel">
          <div>
            <label className="label" htmlFor="title-input">
              Title
            </label>
            <br />
            <div style={{ paddingRight: "80px" }}>
              <input
                className="field"
                value={title}
                id="title-input"
                onChange={e => this.setState({ title: e.target.value })}
              />
            </div>
          </div>
          <div>
            <label
              className="label"
              htmlFor="content-input"
              style={{ marginTop: "28px" }}
            >
              Body :{" "}
            </label>
            <br />
            <textarea
              className="field"
              value={content}
              id="content-input"
              rows={5}
              style={{ resize: "none" }}
              onChange={e => this.setState({ content: e.target.value })}
            />
          </div>
        </div>
        <div className="operations">
          <a onClick={this.onSave} className="success">
            Save Post
          </a>
          <Link to="/" className="action" style={{ float: "right" }}>
            Cancel
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(({ posts, router }) => {
  if (/^\/post\/\d+$/.test(router.location.pathname)) {
    const id = +/^\/post\/(\d+)$/.exec(router.location.pathname)[1];
    const { title = "", content = "" } = posts[id] || {};
    return { id, title, content };
  } else {
    return { title: "", content: "" };
  }
})(Form);
