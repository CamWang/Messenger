import { readdir, readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import marked from "marked";
import { parse } from "node-html-parser";

function getMetaDataAndSlice(content) {
  const searchTerm = "---";
  const firstIndex = content.indexOf(searchTerm);
  const secondIndex = content.indexOf(searchTerm, (firstIndex + 1));
  const meta = content.slice((firstIndex + 3), secondIndex).trim().split('\n');
  let title = '';
  let date = '';
  let author = '';
  let tags = [];
  meta.forEach(v => {
    const x = v.split(': ');
    if (x[0] === "title") {
      title = x[1].trim();
    } else if (x[0] === "date") {
      date = x[1].trim();
    } else if (x[0] === "author") {
      author = x[1].trim();
    } else if (x[0] === "tags") {
      tags = x[1].split(" ");
    }
  })
  return {
    content: content.slice((secondIndex + 3)),
    title: title,
    author: author,
    date: date,
    tags: tags
  }
}

try {
  const template = await readFile(resolve("source/index.html"));
  const root = parse(template);
  const blogList = root.querySelector(".blog-list");
  const blogTags = root.querySelector(".sidebar");
  const files = await readdir(resolve("markdown"));
  const blogs = [];
  const tags = new Set();
  const cam = '<a href="https://github.com/camwang">Cam</a>';
  for (const file of files) {
    const mdBlog = await readFile(resolve("markdown", file));
    const content = mdBlog.toString('utf-8');
    const meta = getMetaDataAndSlice(content);
    meta.tags.forEach(v => tags.add(v));
    blogs.push(`<div class="blog"><h1 class="blog-title">${meta.title}</h1>${marked(meta.content)}<p class="blog-meta">${meta.date} by ${meta.author==="Cam"?cam:meta.author}</p></div>`);
  }
  blogTags.innerHTML = `<h3>Tags</h3><ul><li>${Array.from(tags).join("</li><br /><li>")}</li></ul>`
  blogList.innerHTML = blogs.join();
  await writeFile(resolve("public/index.html"), root.toString());
} catch (err) {
  console.error(err);
}