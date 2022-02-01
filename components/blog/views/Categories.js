import React from 'react'
import config from "../../../blog.config"
import Link from "next/link"
import Image from "next/image"
export default function Categories(props) {
  return (
    <>


      <div className="tag-authors-section featured-section global-sections is-top global-sections-items-6">


        {config.categories.map(function (category) {
          return (
            <>
              <div style={{ marginTop: '1rem' }} className="global-sections-content">
                <h3> <Link href={'/category/' + category.name}>
                  <a>{category.name.toUpperCase()}  </a>
                </Link></h3>
                <span className="tag-authors-meta">{category.description}</span>
              </div>
            </>
          )
        })}
      </div>


    </>
  )
}




