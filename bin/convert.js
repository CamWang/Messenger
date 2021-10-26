import { readdir, readFile, writeFile } from "fs/promises";
import { resolve } from "path";
import marked from "marked";
import { parse } from "node-html-parser";

try {
  const template = await readFile(resolve("source/template.html"));
  const root = parse(template);
  const blogList = root.querySelector(".blog-list");
  // const tags = root.querySelector(".sidebar");
  const files = await readdir(resolve("markdown"));
  const blogs = [];
  for (const file of files) {
    const mdBlog = await readFile(resolve("markdown", file));
    blogs.push(marked(mdBlog.toString('utf-8')));
  }
  blogList.innerHTML = blogs.join();
  await writeFile(resolve("public/index.html"), root.toString());
} catch (err) {
  console.error(err);
}