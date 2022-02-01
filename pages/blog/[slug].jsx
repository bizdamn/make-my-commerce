import Wrapper from "../../components/blog/layout/Wrapper"
import BlogPost from "../../components/blog/views/BlogPost"
import config from "../../blog.config.js"
import { getPostBySlug, getAllPosts } from "../../components/blog-api"

const PostPage = ({ post }) => (
  <Wrapper
    url={config.url}
    title={config.title}
    description={config.description}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <BlogPost post={post} />
  </Wrapper>
)

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
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

  return {
    props: { post },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])

  return {
    paths: posts.map((post) => {
      return {
        params: { ...post },
      }
    }),
    fallback: false,
  }
}

export default PostPage
