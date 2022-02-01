import React, { useContext } from "react"
import MDX from "@mdx-js/runtime"
import config from "../../../blog.config"
import { Box, Text, Heading } from "theme-ui"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router';
const BlogPost = ({ post }) => {
  const router = useRouter();
  const components = {
    Box: (props) => <Box {...props} />,
    pre: (props) => <div {...props} />,
  }

  return (
    <>
      <article className="post-section">
        <div className="post-header item is-hero">
          <div className="item-container">
            <div className="item-image global-image">
              {post.coverImage && (
                <div className="unset-img">
                  <Image
                    src='/a.jpg'
                    alt={post.coverImageAlt || ""}
                    layout="fill"
                    className="custom-img"
                  />
                </div>
              )}
            </div>
            <div className="item-content">
              <div className="item-tags global-tags">
                {post.premium ? (
                  <span className="global-members-label">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5.445 9.333V6.667C5.445 2.985 8.38 0 12 0c3.62 0 6.554 2.985 6.554 6.667v2.666s2.622 1.214 2.622 6c0 4.787-3.815 8.667-8.52 8.667h-1.312c-4.706 0-8.52-3.88-8.52-8.667 0-4.786 2.621-6 2.621-6zm10.487 0V6.667c0-2.21-1.76-4-3.932-4-2.172 0-3.933 1.79-3.933 4v2.666h7.865z"></path>
                    </svg>
                  </span>
                ) : (
                  <></>
                )}
                <Link href={"/category/" + post.category}>
                  <a>{post.category}</a>
                </Link>
              </div>
              <h1 className="item-title">{post.title}</h1>
              <div className="item-meta global-meta">
                <div className="item-profile-image">
                  <Link href={"/author/"}>
                    <a className="global-image">
                      <Image
                        height={500}
                        width={500}
                        src={config.authorImage}
                        alt="Author"
                      />
                    </a>
                  </Link>
                </div>
                <div className="item-authors">
                  <Link href={"/author/"}>
                    <a>{post.author}</a>
                  </Link>

                  <div className="item-time">
                    <time dateTime="2019-04-09">
                      {" "}
                      {config.showDate && (
                        <>{new Date(post.date).toLocaleDateString()}</>
                      )}
                    </time>
                    ∙ 2 minutes read
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="post-content">
        <MDX components={components}>{post.content}</MDX>

          {/* Share */}
          <div className="post-share-section">
            <div style={{display: 'flex',justifyContent:'center'}} className="post-share-icon-wrap">
              <a
                href=""
                target="_blank"
                rel="noopener"
                aria-label="Twitter share icon"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"></path>
                </svg>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener"
                aria-label="Facebook share icon"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z"></path>
                </svg>
              </a>
              <a
                href="javascript:"
                className="post-share-link"
                id="copy"
                data-clipboard-target="#copy-link"
                aria-label="Copy link icon"
              >
                <svg
                  role="img"
                  viewBox="0 0 33 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M27.3999996,13.4004128 L21.7999996,13.4004128 L21.7999996,19 L18.9999996,19 L18.9999996,13.4004128 L13.3999996,13.4004128 L13.3999996,10.6006192 L18.9999996,10.6006192 L18.9999996,5 L21.7999996,5 L21.7999996,10.6006192 L27.3999996,10.6006192 L27.3999996,13.4004128 Z M12,20.87 C7.101,20.87 3.13,16.898 3.13,12 C3.13,7.102 7.101,3.13 12,3.13 C12.091,3.13 12.181,3.139 12.272,3.142 C9.866,5.336 8.347,8.487 8.347,12 C8.347,15.512 9.866,18.662 12.271,20.857 C12.18,20.859 12.091,20.87 12,20.87 Z M20.347,0 C18.882,0 17.484,0.276 16.186,0.756 C14.882,0.271 13.473,0 12,0 C5.372,0 0,5.373 0,12 C0,18.628 5.372,24 12,24 C13.471,24 14.878,23.726 16.181,23.242 C17.481,23.724 18.88,24 20.347,24 C26.975,24 32.347,18.628 32.347,12 C32.347,5.373 26.975,0 20.347,0 Z"></path>
                </svg>
              </a>
              <small className="share-link-info">
                The link has been copied!
              </small>
            </div>
            <input
              type="text"
              defaultValue=""
              id="copy-link"
              aria-label="Copy link input"
            />
          </div>
        </div>
      </article>

      {/* Next Previous */}
      {/* <aside className="nextprev-section">
        <div className="nextprev-wrap">
          <section className="nextprev-newer post tag-home tag-story tag-hash-post-card-sand tag-creative featured">
            <a href="/i-always-loved-aesthetics/" className="global-link" aria-label="I always loved aesthetics" />
            <a href="/i-always-loved-aesthetics/" className="nextprev-image global-image">
              <img src="/content/images/size/w400/2020/11/photo-1530653333484-d02d0faff9bf.jpeg" loading="lazy" alt="I always loved aesthetics" /> </a>
            <div>
              <small>Newer post</small>
              <h3><a href="/i-always-loved-aesthetics/">I always loved aesthetics</a></h3>
            </div>
          </section>
          <section className="nextprev-older post tag-creative tag-idea tag-story tag-hash-post-card-peach featured">
            <a href="/you-must-grow-like-a-tree/" className="global-link" aria-label="You must grow like a tree" />
            <div>
              <small>Older post</small>
              <h3><a href="/you-must-grow-like-a-tree/">You must grow like a tree</a></h3>
            </div>
            <a href="/you-must-grow-like-a-tree/" className="nextprev-image global-image">
              <img src="/content/images/size/w400/2020/11/photo-1560393464-5c69a73c5770.jpeg" loading="lazy" alt="You must grow like a tree" /> </a>
          </section>
        </div>
      </aside>
      <div className="comments-section">
        <div className="comments-wrap">
          <div id="disqus_thread" className="disqus-lazy"><iframe id="dsq-app662" allowTransparency="true" frameBorder={0} scrolling="no" tabIndex={0} title="Disqus" width="100%" src="https://disqus.com/embed/comments/?base=default&f=okiro-ghost-theme&t_i=ghost-188&t_u=https%3A%2F%2Fokiro.fueko.net%2Fcreating-deluxe-drink-is-like-playing-a-sport%2F&t_d=Creating%20deluxe%20drink%20is%20like%20playing%20a%20sport&t_t=Creating%20deluxe%20drink%20is%20like%20playing%20a%20sport&s_o=default#version=9068118211410bc5f67f5bb8d6806cba" style={{ width: '1px !important', minWidth: '100% !important', border: 'none !important', overflow: 'hidden !important', height: '394px !important' }} horizontalscrolling="no" verticalscrolling="no" /></div>
        </div>
      </div>
      <div className="global-sections global-sections-items-4">
        <h2 className="global-label global-zigzag">
          See more
          <svg role="img" viewBox="0 0 136 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.525 1.525a3.5 3.5 0 014.95 0L20 15.05 33.525 1.525a3.5 3.5 0 014.95 0L52 15.05 65.525 1.525a3.5 3.5 0 014.95 0L84 15.05 97.525 1.525a3.5 3.5 0 014.95 0L116 15.05l13.525-13.525a3.5 3.5 0 014.95 4.95l-16 16a3.5 3.5 0 01-4.95 0L100 8.95 86.475 22.475a3.5 3.5 0 01-4.95 0L68 8.95 54.475 22.475a3.5 3.5 0 01-4.95 0L36 8.95 22.475 22.475a3.5 3.5 0 01-4.95 0l-16-16a3.5 3.5 0 010-4.95z">
            </path>
          </svg>
        </h2>
        <article className="item-section post tag-home tag-story tag-hash-post-card-aqua tag-lifestyle">
          <a href="/anyone-can-hold-the-helm-when-the-sea-is-calm/" className="global-link" aria-label="Anyone can hold the helm when the sea is calm" />
          <div className="global-image">
            <img srcSet="/content/images/size/w300/2020/11/photo-1533848052694-c716c6530f9c.jpeg 300w,
   /content/images/size/w400/2020/11/photo-1533848052694-c716c6530f9c.jpeg 400w,
   /content/images/size/w600/2020/11/photo-1533848052694-c716c6530f9c.jpeg 600w" sizes="(max-width:480px) 150px, 200px" src="/content/images/size/w300/2020/11/photo-1533848052694-c716c6530f9c.jpeg" loading="lazy" alt="Anyone can hold the helm when the sea is calm" />
          </div>
          <div className="global-sections-content">
            <h3><a href="/anyone-can-hold-the-helm-when-the-sea-is-calm/">Anyone can hold the helm when
              the sea is calm</a></h3>
            <div className="global-sections-meta global-meta global-pointer">
              <a href="/author/megan/">Megan Anderson</a>, <a href="/author/charles/">Charles
                Barrett</a>
            </div>
          </div>
        </article>
        <article className="item-section post tag-home tag-hash-post-card-cream tag-idea tag-creative tag-lifestyle">
          <a href="/being-unique-is-better-than-being-perfect/" className="global-link" aria-label="Being unique is better than being perfect" />
          <div className="global-image">
            <img srcSet="/content/images/size/w300/2020/11/photo-1579618385552-046edd29f899.jpeg 300w,
   /content/images/size/w400/2020/11/photo-1579618385552-046edd29f899.jpeg 400w,
   /content/images/size/w600/2020/11/photo-1579618385552-046edd29f899.jpeg 600w" sizes="(max-width:480px) 150px, 200px" src="/content/images/size/w300/2020/11/photo-1579618385552-046edd29f899.jpeg" loading="lazy" alt="Being unique is better than being perfect" />
          </div>
          <div className="global-sections-content">
            <h3><a href="/being-unique-is-better-than-being-perfect/">Being unique is better than being
              perfect</a></h3>
            <div className="global-sections-meta global-meta global-pointer">
              <a href="/author/megan/">Megan Anderson</a>
            </div>
          </div>
        </article>
        <article className="item-section post tag-product tag-creative tag-hash-post-card-peach tag-lifestyle">
          <a href="/brand-is-just-a-perception-and-will-match-reality-over-time/" className="global-link" aria-label="Brand is just a perception, and will match reality over time" />
          <div className="global-image">
            <img srcSet="/content/images/size/w300/2020/11/photo-1560155136-ca9fd0b25a4c.jpeg 300w,
   /content/images/size/w400/2020/11/photo-1560155136-ca9fd0b25a4c.jpeg 400w,
   /content/images/size/w600/2020/11/photo-1560155136-ca9fd0b25a4c.jpeg 600w" sizes="(max-width:480px) 150px, 200px" src="/content/images/size/w300/2020/11/photo-1560155136-ca9fd0b25a4c.jpeg" loading="lazy" alt="Brand is just a perception, and will match reality over time" />
          </div>
          <div className="global-sections-content">
            <h3><a href="/brand-is-just-a-perception-and-will-match-reality-over-time/">Brand is just a
              perception, and will match reality over time</a></h3>
            <div className="global-sections-meta global-meta global-pointer">
              <a href="/author/victoria/">Victoria West</a>, <a href="/author/lauren/">Lauren
                Langford</a>
            </div>
          </div>
        </article>
        <article className="item-section post tag-product tag-idea tag-lifestyle">
          <a href="/comfort-and-simplicity-are-two-keys/" className="global-link" aria-label="Comfort and simplicity are two keys" />
          <div className="global-image">
            <img srcSet="/content/images/size/w300/2020/11/photo-1598343175492-9e7dc0e63cc6.jpeg 300w,
   /content/images/size/w400/2020/11/photo-1598343175492-9e7dc0e63cc6.jpeg 400w,
   /content/images/size/w600/2020/11/photo-1598343175492-9e7dc0e63cc6.jpeg 600w" sizes="(max-width:480px) 150px, 200px" src="/content/images/size/w300/2020/11/photo-1598343175492-9e7dc0e63cc6.jpeg" loading="lazy" alt="Comfort and simplicity are two keys" />
          </div>
          <div className="global-sections-content">
            <h3><a href="/comfort-and-simplicity-are-two-keys/">Comfort and simplicity are two keys</a>
            </h3>
            <div className="global-sections-meta global-meta global-pointer">
              <a href="/author/megan/">Megan Anderson</a>, <a href="/author/hannah/">Hannah
                Weastell</a>
            </div>
          </div>
        </article>
      </div> */}

      {/* Subscribe */}
      {/* <div className="subscribe-section">
        <div className="subscribe-wrap">
          <h3>Subscribe to new posts</h3>
          <form data-members-form="subscribe" className="subscribe-form">
            <input
              data-members-email
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
              required
            />
            <button className="global-button button-clone" type="submit">
              Subscribe
            </button>
            <button
              className="global-button"
              type="submit"
              style={{ display: "none" }}
              disabled
            >
              Subscribe
            </button>
          </form>
          <div className="subscribe-alert">
            <small className="alert-loading global-alert">
              Processing your application
            </small>
            <small className="alert-success global-alert">
              Please check your inbox and click the link to confirm your
              subscription
            </small>
            <small className="alert-error global-alert">
              There was an error sending the email
            </small>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default BlogPost
