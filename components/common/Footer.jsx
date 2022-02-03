import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
    return (
        <>
              <footer className="main-footer">
          <div className="main-footer-wrapper">
            <div className="main-footer-top">
              <div className="main-footer-top-left">
                
                <Link href='/'>
                  <a className="main-footer-logo" >
                    <Image width={300} height={300} src="/images/name.svg" alt='logo' />
                     </a>
                </Link>
                <div className="main-footer-description">Complete Solution to build an E-commerce Store</div>
              </div>
              <nav className="main-footer-navigation" aria-label="Footer Navigation">
                <ul id="menu-footer-menu" className="">
                  <li id="menu-item-2366"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2366">
                    {/* <Link href='/help-center'>
                      <a>Help Center</a>
                    </Link> */}

                  </li>
                </ul>
              </nav>
            </div>
            <div className="main-footer-bottom">
              <div className="main-footer-copyright">
                <p>2021 © Powered by <Link href='/'><a>Make My Commerce</a></Link>  </p>
              </div>
              <ul className="mmc-social-icons">
                {/* <li className="mmc-social-icon facebook">
                  <a href="https://www.facebook.com/">
                    <Image width={20} height={20} src="/images/basic/facebook.svg" alt='Make My Commerce Facebook Link' />
                    <span className="screen-reader-text">
                      Link to Facebook </span>
                  </a>
                </li>
                <li className="mmc-social-icon twitter">
                  <a href="https://twitter.com/">
                    <Image width={20} height={20} src="/images/basic/twitter.svg" alt='Make My Commerce Twitter Link' />
                    <span className="screen-reader-text">
                      Link to Twitter </span>
                  </a>
                </li> */}
                <li className="mmc-social-icon instagram">
                  <a href="https://makemycommerce.in/">
                  <i className="fas fa-globe"></i>
                  </a>
                </li>
                <li className="mmc-social-icon instagram">
                  <a href="https://www.instagram.com/makemycommerce/">
                    {/* <Image width={20} height={20} src="/images/basic/instagram.svg" alt='Make My Commerce Instagram Link' />
                    <span className="screen-reader-text">
                      Link to Instagram </span> */}
                      <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        </>
    )
}
