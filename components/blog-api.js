import fs from 'fs';
import { join } from "path"
import matter from "gray-matter"

const postsDirectory = join(process.cwd(), "components/blog-posts")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })
  return items
}


export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"))
  return posts
}



export function getAllBookMarkedPosts(fields = [], slugs) {
  if (slugs == null) {
    return []
  }
  else {
    const posts = slugs.map((slug) => getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"))
    return posts
  }
}





export function getCategoryPostBySlug(slug, category, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const items = {}



  if (data['category'] === category) {
    // Ensure only the minimal needed data is exposed
    fields.forEach((field) => {

      if (field === "slug") {
        items[field] = realSlug
      }
      if (field === "content") {
        items[field] = content
      }

      if (data[field]) {
        items[field] = data[field]
      }

    })
  }
  return items
}

export function getAllPostsInCategory(category, fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs.map((slug) => getCategoryPostBySlug(slug, category, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"))
  var filteredPosts = posts.filter(value => Object.keys(value).length !== 0);
  return filteredPosts
}
