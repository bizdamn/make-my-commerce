import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Header() {



  return (
    <>
      {/* Navbar */}
      {/* <nav style={{ position: "sticky" }} className="navbar navbar-expand-lg navbar-light bg-light p-0">
        <div className="row m-0 ">
          <div className="col-12">
            Do you want to create your own online store?
            &nbsp;&nbsp;
            <Link href='/login'>
              <a className="mmc-btn mmc-small-btn mmc-blue-btn my-4" >Get Started</a>
            </Link>
          </div>
        </div>
      </nav> */}
      {/* Navbar */}

      <div >
        <Link href="/">
          <a>
            <Image width="80" height="80" src="/images/logo.svg" alt='Make My Commerce Logo' />
          </a>
        </Link>
        <input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
        <label htmlFor="menu-icon" />
        <nav className="nav">
          <ul className="pt-5">
            <li><Link href='/'><a>Home</a></Link></li>
            {/* <li><Link href='/login'><a>Login</a></Link></li> */}
            <li><Link href='/blog'><a>Blog</a></Link></li>
            <li><Link href='/help-center'><a>Help Center</a></Link></li>
            <li><Link href='/consult-expert'><a>Consult Expert</a></Link></li>
            {/* <li><Link href='/ticket'><a>Raise Ticket</a></Link></li> */}
            <li><Link href='/contact'><a>Contact</a></Link></li>
          </ul>
        </nav>

      </div>
    </>
  )
}
