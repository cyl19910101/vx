import React, { Component } from "react";
import { createPost } from "./posts/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { push } from "react-router-redux";

class Form extends Component {
  state = {
    title: "",
    content: ""
  };

  onCreate = () => {
    const { title, content } = this.state;
    if (title !== "" && content !== "") {
      this.props.dispatch(createPost({ title, content }));
      this.setState({ title: "", content: "" });
      this.props.dispatch(push("/"));
    }
  };

  render() {
    const { title, content } = this.state;
    return (
      <div>
        <div>
          <label htmlFor="title-input">title : </label>
          <input
            value={title}
            id="title-input"
            onChange={e => this.setState({ title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="content-input">content : </label>
          <input
            value={content}
            id="content-input"
            onChange={e => this.setState({ content: e.target.value })}
          />
        </div>
        <button onClick={this.onCreate}>create</button>
        <Link to="/">Cancel</Link>
      </div>
    );
  }
}

export default connect()(Form);
