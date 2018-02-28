import { CREATE_POST, DELETE_POST, EDIT_POST } from "./types";
const initialDomain = {};

export function posts(domain = initialDomain, { payload, type }) {
  switch (type) {
    case CREATE_POST:
      return !domain[payload.id]
        ? { ...domain, [payload.id]: payload }
        : domain;
    case EDIT_POST:
      return { ...domain, [payload.id]: payload };
    case DELETE_POST:
      const tmp = { ...domain };
      delete tmp[payload.id];
      return tmp;
    default:
      return domain;
  }
}
