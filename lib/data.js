import fs from "fs";
import path from "path";
import { parseMarkdown } from "./markdown";
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), "posts");

function getMarkdown(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  return fileContents;
}

export async function getHtml(id) {
  const markdown = getMarkdown(id);
  const matterResult = matter(markdown);

  const rawHTML = await parseMarkdown(matterResult.content);

  /* 
   * -------Sanitize HTML using DOMPurify-------
   * The risk of an XSS attack is low but it's still good practice to validate the HTML:
   * The risk is low for these reasons:
   *   - The markdown files (blog posts) are within the boundaries of the app
   *   - The app doesn't accept user inputs/comments
   */
  const sanitizedHtml = DOMPurify.sanitize(rawHTML);

  // Wrap code blocks with a <div> element with a user-defined CSS class which provides horizontal scrolling
  const contentHtml = sanitizedHtml;

  return {
    id,
    contentHtml,
    ...matterResult.data,
  }
}