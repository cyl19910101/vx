import { createPost, editPost, deletePost } from "./actions";
import { posts } from "./reducer";

describe("posts response correctly with actions", () => {
  it("create post works", () => {
    const domain = posts(void 0, { type: "others" });
    expect(Object.keys(domain).length).toBe(0);
    const newDomain = posts(domain, createPost({ title: "v", content: "x" }));
    expect(Object.keys(newDomain).length).toBe(1);
  });

  it("delete post works", () => {
    const domain = { id: 1111, title: "v", content: "t" };
    const newDomain = posts(
      { [domain.id]: domain },
      deletePost({ id: domain.id })
    );
    expect(Object.keys(newDomain).length).toBe(0);
  });

  it("edit post works", () => {
    const domain = { id: 1111, title: "v", content: "t" };
    const newDomain = posts(
      { [domain.id]: domain },
      editPost({ id: domain.id, title: "xxx", content: "cca" })
    );
    expect(newDomain).toEqual({
      [domain.id]: {
        id: domain.id,
        title: "xxx",
        content: "cca"
      }
    });
  });
});
