import fs from "fs";
import path from "path";
import matter from "gray-matter";

import remark from "remark";
import html from "remark-html";

// TODO: Remark should render react components

export function getSortedRegions() {
  const postsDirectory = path.join(process.cwd(), "reports");

  const folderNames = fs.readdirSync(postsDirectory);
  return folderNames;
}

export function getSortedPostsData(region) {
  const postsDirectory = path.join(process.cwd(), "reports", region);

  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds(region) {
  const postsDirectory = path.join(process.cwd(), "reports", region);

  const fileNames = fs.readdirSync(postsDirectory);

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id, region) {
  const postsDirectory = path.join(process.cwd(), "reports", region);
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);
  console.log(matterResult.data);

  // const contentHtml = processedContent.toString();
  const contentHtml = matterResult.content;

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
