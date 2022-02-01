import MDX from "@mdx-js/runtime"
import React, { useContext, useState, useEffect } from 'react';
import { Flex, Box, } from "theme-ui"
import Image from "next/image"
import axios from 'axios'
import DraftBadge from "../ui/DraftBadge"
import Link from "next/link"
import { useSnackbar } from 'notistack';
import config from "../../../blog.config"
const Posts = ({ posts, prevPosts, nextPosts }) => {
  const isLocal = process.env.NODE_ENV === "development"
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();




  return (
    <>
      <div className="loop-section">
        <div className="loop-wrap">

          {posts &&
            posts
              .filter((post) => {
                return isLocal || !post.draft
              })
              .map((post) => (
                <article key={post.slug} className="item post tag-home tag-story  tag-lifestyle" style={{ backgroundColor: post.color }}>


                  <div style={{ border: `2px solid ${post.color}`, borderRadius: '2rem' }} className="item-container">
                    {post.draft && <DraftBadge />}
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


                      <div className="item-meta global-pointer">

                        <div style={{ marginTop: '2rem' }}>
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

                      {/* <div  >
                        <i style={{cursor: 'pointer'}}  className="fas fa-bookmark"></i>
                      </div> */}



                      <Link href={"/category/" + post.category}>
                        <a>{post.category}</a>
                      </Link>




                    </div>
                  </div>

                </article>
              ))}

        </div>
      </div>



      {/* 
      <div className="pagination-section">
        <div className="pagination-wrap">
          <a href="/page/2/" id="next-page" style={{ display: 'none' }} />
          <button className="global-button">Load more</button>
        </div>
      </div> */}















      <Flex sx={{ fontStyle: "italic" }}>
        <Box sx={{ width: "50%", py: 3, textAlign: "left" }}>
          {prevPosts !== null && (
            <Link href={"/blog/" + prevPosts}>
              <a>« see newer posts</a>
            </Link>
          )}
        </Box>
        <Box sx={{ width: "50%", py: 3, pr: 3, textAlign: "right" }}>
          {nextPosts !== null && (
            <Link href={"/blog/" + nextPosts}>
              <a>see older posts »</a>
            </Link>
          )}
        </Box>
      </Flex>
    </>
  )
}

export default Posts
