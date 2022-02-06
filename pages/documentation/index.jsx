import React from 'react';

export default function dochome() {
  return (<>
<div>
  <header id="hero" className="hero overlay">
   
    <div className="masthead text-center">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1>Knowledgebase</h1>
            <p className="">Sed eget orci eleifend enim mattis suscipit. Suspendisse potenti non ipsum.</p>
          
            <a href="#" className="btn btn-hero"><span className="icon-git" /> Start Now<span className="icon-right" /></a>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Features */}
  <section id="features" className="features bgc-light-gray">
    <div className="container ">
      <div className="row features-section">
        <div className="text-center col-sm-4">
          <div className="media-body">
            <span className="icon"><img src="/doc-images/icon/icon1.png" alt /></span>
            <h3>Help &amp; Documentation</h3>
            <p className="text-muted">Unlike other Frameworks which try to cover everything, It has been built specifically for wordpress</p>
          </div>
        </div>
        <div className="text-center col-sm-4">
          <div className="media-body">
            <span className="icon"><img src="/doc-images/icon/icon2.png" alt /></span>
            <h3>Developer Resources</h3>
            <p className="text-muted">An incredibly codex has been created for you to use as reference when developing extensions</p>
          </div>
        </div>
        <div className="text-center col-sm-4">
          <div className="media-body">
            <span className="icon"><img src="/doc-images/icon/icon3.png" alt /></span>
            <h3>Community Support</h3>
            <p>The source code is available on GitHub, you can grab it and twist it to your heart’s content</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Topics */}
  <section className="topics">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <header>
            <h2><span className="icon-pages" />Explore Topics</h2>
            <p>We did our best to cover all topics related to this product. Each section have number which represent number of topic in each category.</p>
          </header>
          <div className="row">
            <div className="col-sm-6">
              <div className="topics-list">
                <h3><a href="#"><span className="badge">19</span>Introduction</a></h3>
                <ul>
                  <li><a href="single.html"> How to use this documentation? </a></li>
                  <li><a href="single.html"> How to find topics? </a></li>
                  <li><a href="single.html"> What is included and why? </a></li>
                  <li><a href="single.html"> Basic knowledge requirments. </a></li>
                  <li><a href="single.html"> Getting Started &amp; What is next. </a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="topics-list">
                <h3><a href="#"><span className="badge">7</span>Intallation &amp; Activation</a></h3>
                <ul>
                  <li><a href="#"> How to use this documentation? </a></li>
                  <li><a href="#"> How to find topics? </a></li>
                  <li><a href="#"> What is included and why? </a></li>
                  <li><a href="#"> Basic knowledge requirments. </a></li>
                  <li><a href="#"> Getting Started &amp; What is next. </a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <div className="topics-list">
                <h3><a href="#"><span className="badge">5</span>Import &amp; Export</a></h3>
                <ul>
                  <li><a href="#"> How to use this documentation? </a></li>
                  <li><a href="#"> How to find topics? </a></li>
                  <li><a href="#"> What is included and why? </a></li>
                  <li><a href="#"> Basic knowledge requirments. </a></li>
                  <li><a href="#"> Getting Started &amp; What is next. </a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="topics-list">
                <h3><a href="#"><span className="badge">17</span>Settings &amp; Configuration</a></h3>
                <ul>
                  <li><a href="#"> How to use this documentation? </a></li>
                  <li><a href="#"> How to find topics? </a></li>
                  <li><a href="#"> What is included and why? </a></li>
                  <li><a href="#"> Basic knowledge requirments. </a></li>
                  <li><a href="#"> Getting Started &amp; What is next. </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="sidebar">
            <div className="widget widget-support-forum">
              <span className="icon icon-forum" />
              <h4>Looking for help? Join Community</h4>
              <p>Couldn’t find what your are looking for ? Why not join out support forums and let us help you.</p>
              <a href="#" className="btn-success-doc">Support Forum</a>
            </div>
            {/******************************** Lists ********************************/}
            <div className="pt-50">
              <div className="topics-list">
                <h3><a href="#"><span className="badge">10</span>API Guide Lines</a></h3>
                <ul>
                  <li><a href="#"> How to use this documentation? </a></li>
                  <li><a href="#"> How to find topics? </a></li>
                  <li><a href="#"> What is included and why? </a></li>
                  <li><a href="#"> Basic knowledge requirments. </a></li>
                  <li><a href="#"> Getting Started &amp; What is next. </a></li>
                </ul>
              </div>
            </div>
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
