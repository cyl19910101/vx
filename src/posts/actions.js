import { CREATE_POST, DELETE_POST, EDIT_POST } from "./types";

export function createPost({ title, content }) {
  return {
    payload: {
      id: new Date().getTime(),
      title,
      content
    },
    type: CREATE_POST
  };
}

export function deletePost({ id }) {
  return {
    payload: { id },
    type: DELETE_POST
  };
}

export function editPost({ id, title, content }) {
  return {
    payload: {
      id,
      title,
      content
    },
    type: EDIT_POST
  };
}
