import { marked } from "marked";
const renderer = new marked.Renderer();

renderer.link = function (href, title, text) {
  const link = marked.Renderer.prototype.link.call(this, href, title, text);
  if (href.startsWith("/")) {
    return link;
  }
  return link.replace("<a", "<a target='_blank' rel='noopener noreferrer' ");
};

marked.setOptions({
  renderer,
});

export { marked };
