import React from 'react';
import Image from 'next/image'
import Link from 'next/link'
import Grid from '@mui/material/Grid';
import Layout from '../../../components/Layout'
export default function doc() {
  return (<>
    <Layout>
    {/* Header */}
    <header className="hero overlay">
      <div className="masthead single-masthead">
        <div className="container">
          <div className="row">
            <div className="col-md-8 ">
              <p style={{ textAlign: 'left' }}>Getting Started With Make My Commerce</p>
            </div>
            <div className="col-md-4">
              <Link href="/login">
                <a className="btn btn-hero">
                  <span className="icon-git" /> Get Started<span className="icon-right" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
    {/* Breadcrumbs */}
    <div className="breadcrumbs">
      <div className="container">
        <ol>
          <li><Link href="/help-center"><a>Home</a></Link></li>
          <li><Link href="/help-center/introduction"><a>Introduction</a></Link></li>
          <li className="active">Getting Started With Make My Commerce</li>
        </ol>
      </div>
    </div>
    {/* Main Content */}
    <main className="content-wrapper">
      <div className="container">
        <Grid container spacing={2}>
          <Grid item lg={8} sm={12}>
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
              <Image width="700" height="300" className="aligncenter" src="/doc-images/connection.png" alt='Documentation' />
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
          </Grid>
          <Grid item lg={4} sm={12}>

            <div className="sidebar">
              <div className="widget widget-support-forum">
                <span className="icon icon-forum" />
                <h4>Ready to start with Make My Commerce?</h4>
                <p>One Stop to Source & Sell</p>
                <Link href='/login'>
                  <a className="btn btn-success-doc">Try It Free</a></Link>
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
           
                  </ul>
                </div>
              </div>
            </div>



          </Grid>

        </Grid>

      </div>
    </main>
    </Layout>

  </>);
}
