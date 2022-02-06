import React from 'react';
import Image from 'next/image'
export default function doc() {
  return (<>
    <div>
      {/* Header */}
      <header className="hero overlay">

        <div className="masthead single-masthead">
          <div className="container">
            <div className="row">
              <div className="col-md-8 ">
                <p style={{ textAlign: 'left' }}>Sed eget orci eleifend enim mattis suscipit. Suspendisse potenti non ipsum.</p>
              </div>
              <div className="col-md-4">
                <a href="#" className="btn btn-hero">
                  <span className="icon-git" /> Github Project<span className="icon-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <ol>
            <li><a href="http://xvelopers.com/">Home</a></li>
            <li><a href="archive.html">Knowledge Base</a></li>
            <li className="active">Getting Started With API</li>
          </ol>
        </div>
      </div>
      {/* Main Content */}
      <main className="content-wrapper">
        <div className="container">
          <div className="col-lg-8">
            <article className="post">
              <h1>Getting Started With API </h1>
              <ul className="meta">
                <li><span>Created :</span> Feb, 04, 2016</li>
                <li><span>Last Updated:</span> April, 15, 2016</li>
              </ul>
              <div className="alert alert-info" role="alert">
                <span className="icon-info" />
                <p>
                  This documentation is always evolving. If youve not been here for a while, perhaps check out
                  the This documentation is always evolving.
                </p>
              </div>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which dont look even slightly
                believable.
              </p>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first true generator on the Internet.
              </p>
              <Image width="70" height="70"className="aligncenter" src="/doc-images/connection.png" alt='Documentation' />
              <h2>Auth Services &amp; Requirments</h2>
              <p>
                If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything
                embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary, making this the first true generator on the Internet.
              </p>
              <blockquote>
                echo Hello World;
              </blockquote>
              <h2>Final Step</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, or randomised words which dont look even slightly
                believable.
              </p>
            </article>
            <div className="feedback">
              <h3>Was this article helpful to you?</h3>
              <a className="btn btn-default" href="#">Yes</a>
              <a className="btn btn-default" href="#">No</a>
              <form>
                <input type="text" placeholder="How else could we improve it ?" />
                <input type="submit" className="btn btn-success-doc" defaultValue="Submit Feedback" />
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="widget widget-support-forum">
                <span className="icon icon-forum" />
                <h4>Looking for help? Join Community</h4>
                <p>Couldn’t find what your are looking for ? Why not join out support forums and let us help
                  you.</p>
                <a href="#" className="btn btn-success-doc">Support Forum</a>
              </div>
              {/******************************** Lists ********************************/}
              <div className="pt-50">
                <div className="widget widget_categories">
                  <span className="icon icon-folder" />
                  <h4>Knowledgebase Topics Categories</h4>
                  <ul>
                    <li><a href="#"> Introduction </a>
                      <ul>
                        <li><a href="#"> How to use this documentation? </a></li>
                        <li><a href="#"> How to find topics? </a></li>
                        <li><a href="#"> What is included and why? </a></li>
                        <li><a href="#"> Basic knowledge requirments. </a></li>
                        <li><a href="#"> Getting Started &amp; What is next. </a></li>
                      </ul>
                    </li>
                    <li><a href="#"> Installation &amp; Activation </a></li>
                    <li><a href="#"> Premium Members Features </a></li>
                    <li><a href="#"> API Usage &amp; Guide lines </a></li>
                    <li><a href="#"> Getting Started &amp; What is next. </a></li>
                    <li><a href="#"> Installation &amp; Activation </a></li>
                    <li><a href="#"> Premium Members Features </a></li>
                    <li><a href="#"> API Usage &amp; Guide lines </a></li>
                    <li><a href="#"> Getting Started &amp; What is next. </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>


  </>);
}
