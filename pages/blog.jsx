import config from "../blog.config"
import Wrapper from "../components/blog/layout/Wrapper"
import Posts from "../components/blog/views/Posts"
import Categories from "../components/blog/views/Categories"
import Subscribe from "../components/blog/ui/Subscribe"
import { getAllPosts } from "../components/blog-api"

const Blog = ({ posts, prevPosts, nextPosts }) => (
  <Wrapper
    url={config.url}
    title={config.title}
    description={config.description}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <div>
    <Categories />
      <Posts posts={posts} prevPosts={prevPosts} nextPosts={nextPosts} />
      <Subscribe/>
    </div>
  </Wrapper>
)

export async function getStaticProps() {
  const posts = getAllPosts([
    "title",
    "excerpt",
    "premium",
    "date",
    "slug",
    "author",
    "color",
    "category",
    "content",
    "coverImage",
    "coverImageAlt",
    "coverImageHeight",
    "coverImageWidth",
    "draft"
  ])

  const startIndex = 0
  const endIndex = config.postsPerPage
  const prevPosts = null
  const nextPosts = endIndex >= posts.length ? null : 2

  return {
    props: { posts: posts.slice(startIndex, endIndex), prevPosts, nextPosts },
  }
}

export default Blog
