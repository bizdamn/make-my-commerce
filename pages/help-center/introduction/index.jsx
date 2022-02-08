import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
export default function dochome() {
  return (<>
    <div>
      <header id="hero" className="hero overlay">

        <div className="masthead text-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-md-offset-2">
                <h1>Introduction</h1>
                <p className="">Welcome to Make My Commerce! </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Topics */}
      <section className="topics">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <header>
                <h2><span className="icon-pages" />Explore </h2>
              </header>
              <div className="row">
                <div className="col-sm-6">
                  <div className="topics-list">
                    {/* <h3>  <Link  href="/help-center/introduction/getting-started"><a className="badge">19 Introduction</a> </Link></h3> */}
                    <ul>
                      <li><Link href="/help-center/introduction/getting-started"><a> How to find topics? </a></Link></li>
                      <li><Link href="/help-center/introduction/getting-started"><a> How to find topics? </a></Link></li>
                      <li><Link href="/help-center/introduction/getting-started"><a> How to find topics? </a></Link></li>
                      <li><Link href="/help-center/introduction/getting-started"><a> How to find topics? </a></Link></li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="topics-list">
                    {/* <h3>  <Link  href="/help-center/introduction/getting-started"><a className="badge">19 Introduction</a> </Link></h3> */}

                    <ul>
                      <li><Link href="/help-center/introduction/getting-started"><a> How to find topics? </a></Link></li>
                      <li><Link href="/help-center/introduction/getting-started"><a> How to find topics? </a></Link></li>
                      <li><Link href="/help-center/introduction/getting-started"><a> How to find topics? </a></Link></li>
                      <li><Link href="/help-center/introduction/getting-started"><a> How to find topics? </a></Link></li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-4">
              <div className="sidebar">
                <div className="widget widget-support-forum">
                  <span className="icon icon-forum" />
                  <h4>Ready to start with Make My Commerce?</h4>
                  <p>One Stop to Source & Sell</p>
                  <Link href='/login'>
                    <a className="btn btn-success-doc">Try It Free</a></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Features */}
      <section id="features" className="features bgc-light-gray">
        <div className="container ">
          <div className="row features-section">
            <div className="text-center col-sm-4">
              <div className="media-body">
                <span className="icon">
                  <Image width="70" height="70" src="/doc-images/icon/icon1.png" alt='Documentation' />
                </span>
                <h3>Help &amp; Documentation</h3>
                <p className="text-muted">Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress</p>
              </div>
            </div>
            <div className="text-center col-sm-4">
              <div className="media-body">
                <span className="icon"> <Image width="70" height="70" src="/doc-images/icon/icon2.png" alt='Documentation' />
                </span>
                <h3>Developer Resources</h3>
                <p className="text-muted">An incredibly codex has been created for you to use as reference when developing extensions</p>
              </div>
            </div>
            <div className="text-center col-sm-4">
              <div className="media-body">
                <span className="icon">
                  <Image width="70" height="70" src="/doc-images/icon/icon3.png" alt='Documentation' /></span>
                <h3>Community Support</h3>
                <p>The source code is available on GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Call To Action */}
      <section className="section">
        <div className="container">
          <div className="row call-to-action">
            <div className="col-lg-1">
              <span className="icon icon-envelope" />
            </div>
            <div className="col-lg-9">
              <h3>Contact Us</h3>
              <p>If you have question which is beyond this knowledgebase Kindly contact us</p>
            </div>
            <div className="col-lg-2">
              <a href="#" className="btn-success-doc">Write Now</a>
            </div>
          </div>
        </div>
      </section>
    </div>


  </>);
}
