import React from 'react'
import MDX from "@mdx-js/runtime"
import Image from "next/image"
import DraftBadge from "../ui/DraftBadge"
import Link from "next/link"
export default function Category(props) {
    const isLocal = process.env.NODE_ENV === "development"
    return (
        <>
            <div>
                <div className="archive-section">
                    <div className="archive-wrap">
                        <div className="archive-container is-custom">
                            <div className="archive-content is-custom">
                                <h1 className="archive-title">{props.name.toUpperCase()}</h1>
                            </div>
                        </div>
                        <div className="archive-counter is-custom">
                            <span>{props.posts.length}</span>
                            <span>Posts</span>
                        </div>
                    </div>
                    <div className="archive-cover global-image">
                    <Image
                          layout='fill'
                            src={'/img/categories/bg/1.jpeg'}
                            alt='bg'
                          />
                       </div>
                </div>
                <div className="loop-section">
                    <div className="loop-wrap">
                        <div>

                            {props.posts && props.posts.filter((post) => {
                                return isLocal || !post.draft
                            })
                                .map((post) => (
                                    <article key={post.slug} className="item post tag-home tag-story  tag-lifestyle" style={{ backgroundColor: post.color }}>


                                        {post.draft && <DraftBadge />}
                                        <div style={{border:`2px solid ${post.color}`,borderRadius:'2rem'}} className="item-container">
                                            <div className="item-image global-image">
                                                {post.coverImage && (
                                                    <Link href={"/blog/" + post.slug} >
                                                        <a>
                                                        <div className="unset-img">
                                                            <Image
                                                             layout="fill"
                                                             className="custom-img"
                                                            src={post.coverImage}
                                                            alt={post.coverImageAlt || ""}
                                                        />
                                                        </div>
                                                        </a>
                                                    </Link>
                                                )}

                                            </div>
                                            <div className="item-content">
                                                <h2 className="item-title">
                                                    <Link href={"/blog/" + post.slug} >
                                                        <a>{post.title}</a>
                                                    </Link>

                                                </h2>
                                                <div className="item-meta global-meta global-pointer">

                                                    <div>
                                                        <p> <MDX>{post.excerpt}</MDX></p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="item-tags global-tags global-pointer">

                                                {post.premium ? (
                                                    <span className="global-members-label">
                                                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M5.445 9.333V6.667C5.445 2.985 8.38 0 12 0c3.62 0 6.554 2.985 6.554 6.667v2.666s2.622 1.214 2.622 6c0 4.787-3.815 8.667-8.52 8.667h-1.312c-4.706 0-8.52-3.88-8.52-8.667 0-4.786 2.621-6 2.621-6zm10.487 0V6.667c0-2.21-1.76-4-3.932-4-2.172 0-3.933 1.79-3.933 4v2.666h7.865z">
                                                            </path>
                                                        </svg></span>
                                                ) : (<></>)}

                                                <Link href={"/category/" + post.category}>
                                                    <a>{post.category}</a>
                                                </Link>
                                            </div>
                                        </div>

                                    </article>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="subscribe-section">
                    <div className="subscribe-wrap">
                        <h3>Subscribe to new posts</h3>
                        <form data-members-form="subscribe" className="subscribe-form">
                            <input data-members-email type="email" placeholder="Your email address" aria-label="Your email address" required />
                            <button className="global-button button-clone" type="submit">Subscribe</button><button className="global-button" type="submit" style={{ display: 'none' }} disabled>Subscribe</button>
                        </form>
                        <div className="subscribe-alert">
                            <small className="alert-loading global-alert">Processing your application</small>
                            <small className="alert-success global-alert">Please check your inbox and click the link to confirm your subscription</small>
                            <small className="alert-error global-alert">There was an error sending the email</small>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
