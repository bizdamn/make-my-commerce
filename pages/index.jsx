import Grid from '@mui/material/Grid';
import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default function Home() {
  return (
    <>

      <Header />
      <main role="main">
        {/* Hero */}
        <div className="header-section-wrapper">
          <div className="header-section-content">
            <h4 className="header-section-title">E-commerce Platform for Machines      
            <span className="mmc-green-color">.</span></h4>
            <div className="header-section-text">Add Products, Shipping & Manage Orders from <span style={{ color: '#ffbf50' }}>
            <b>  1 Dashboard</b></span></div>
            <div className="header-section-link">
              {/* <Link href='/login'>
                <a className="mmc-btn mmc-blue-btn" >Get Started</a>
              </Link> */}
            </div>
          </div>
          <div className="header-section-image">
            <video className="image-up-down" width="70%" autoPlay muted loop>
              <source src="/images/illustrations/hero.mp4" type="video/mp4" />
            </video>
          </div>
        </div>




        {/* 
          <Grid sx={{ py: 4 }} container spacing={2}>
            <Grid item xs={6}>
              <div className="parralax-feature-body">
                <div className="parralax-feature-title  mmc-block-title ">
                  <h2 className='font-color-white'>Get exactly the <br />Design you want</h2>
                </div>
                <div className="parralax-feature-description">
                  <p>We will exactly code your E-Commerce website according to your Design for
                    <span style={{ color: '#ffbf50' }}> &nbsp; Free</span>
                  </p>
                </div>
                <div className="parralax-feature-action">
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className="parralax-feature-container">
                <div className="parralax-feature-device">
                  <div className="parralax-feature-device-img">
                    <Image width={500} height={1000} className="image-up-down" src="/images/basic_images/phone2.svg" alt='' /></div>
                  <div className="parralax-feature-particle">
                    <div className="parralax-feature-particle-item -v2 -left"><Image width={300} height={300} className="image-up-down" src="/images/basic_images/box.svg" alt='' /></div>
                    <div className="parralax-feature-particle-item -v1 -right"><Image width={300} height={300} className="image-up-down" src="/images/basic_images/arrow.svg" alt='' /></div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid> */}



        <section style={{zIndex:-1}} className="">
          <div className="parralax-feature-container">
            <div className="parralax-feature-grid">
              <div className="parralax-feature-grid-col -left">
                <div className="parralax-feature-img">
                  <div className="parralax-feature-device">
                    <div className="parralax-feature-device-img"><Image width={500} height={1000} className="image-up-down" src="/images/basic_images/phone1.svg" alt='' /></div>
                    <div className="parralax-feature-particle">
                      <div className="parralax-feature-particle-item -v3 -left"><Image width={300} height={300} className="image-up-down" src="/images/basic_images/mmc.svg" alt='' /></div>
                      <div className="parralax-feature-particle-item -v4 -right"><Image width={300} height={300} className="image-up-down" src="/images/basic_images/notification.svg" alt='' /></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="parralax-feature-grid-col -right">
                <div className="parralax-feature-body">
                  <div className="parralax-feature-title">
                    <h2 style={{ color: ' #384c60' }}>Everything You Need to <br />Start Selling Online</h2>
                  </div>
                  <div className="parralax-feature-description">
                    <ul style={{ listStyle:'circle' }}>
                      <li>Add Product Document (Manuals) easily</li>
                      <li>Beautiful E-commerce Website</li>
                      <li>Automate Product Shipping</li>
                    </ul>
                  </div>
                  <div className="parralax-feature-action">
                    <div className="small-cta-3-links">
                      {/* <Link href='/login'>
                        <a className="mmc-btn mmc-yellow-btn">Get My Website</a>
                      </Link> */}
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to start */}
        <section style={{zIndex:-1}} className="steps-block">
          <h2 className="steps-block-title mmc-block-title">
            <span className="steps-block-title-wrapper">
              Follow these 5 steps to create an online store<span className="mmc-green-color">..</span> 
              <Image width={300} height={300} src="/images/basic/arrow-2.svg" alt='Make My Commerce' />
            </span>
          </h2>
          <div className="steps-block-list">
            <div className="steps-block-list-item">
              <Image  width={40} height={40} src="/images/basic/step-1.svg" alt='' loading="lazy" />
              <div className="steps-block-list-item-title">1. Create Account</div>
              <div className="steps-block-list-item-description">
                <a className="steps-block-list-item-description">Log In</a> to your account or <a className="steps-block-list-item-description">Sign Up</a>.
              </div>
            </div>
            <div className="steps-block-list-item">
              <Image width={40} height={40} src="/images/basic/step-2.svg" alt='' loading="lazy" />
              <div className="steps-block-list-item-title">2. Choose from 50+ Beautiful Themes
              </div>
              <div className="steps-block-list-item-description">Ready to use Professional Templates</div>
            </div>
            <div className="steps-block-list-item">
              <Image  width={40} height={40} src="/images/basic/step-3.svg" alt='' loading="lazy" />
              <div className="steps-block-list-item-title">3. Add Products to your E-commerce Store</div>
              <div className="steps-block-list-item-description">Add product with manuals and all required details</div>
            </div>
          </div>
          <div className="steps-block-list">
            <div className="steps-block-list-item">
              <Image  width={40} height={40} src="/images/basic/step-3.svg" alt='' loading="lazy" />
              <div className="steps-block-list-item-title">4. Connect a Payment Provider</div>
              <div className="steps-block-list-item-description">Accept all major credit cards, PayPal, Apple
                Pay, Google Pay, and Cash App Pay. </div>
            </div>
            <div className="steps-block-list-item">
              <Image  width={40} height={40} src="/images/basic/step-3.svg" alt='' loading="lazy" />
              <div className="steps-block-list-item-title">4. Activate Shipping</div>
              <div className="steps-block-list-item-description">Automate Shipping from your Supplier to your Customer.</div>
            </div>
            <div className="steps-block-list-item">
              <Image  width={40} height={40} src="/images/basic/step-3.svg" alt='' loading="lazy" />
              <div className="steps-block-list-item-title">5. Publish your eCommerce website and start
                selling.</div>
              <div className="steps-block-list-item-description">Publish in literally One Click</div>
            </div>
          </div>
        </section>
        <section style={{zIndex:-1}} className="z-grid">
          <div className="z-grid-wrapper container">
            <h2 className="z-grid-title mmc-block-title">
              <span>
                What you get with<br />
                Make My Commerce<span className="mmc-green-color">?</span>
              </span>
            </h2>
            <div className="z-grid-rows start-text">
              <div className="z-grid-row">
                <div className="z-grid-column z-grid-column-text sm-order-1 lg-order-1">
                  <div className="z-grid-row-icon">
                    <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_5ikw0phy.json" background="transparent" speed={1} style={{ width: 100 }} loop autoPlay>
                    </lottie-player>
                  </div>
                  <div className="z-grid-row-title">Managed E-commerce Website</div>
                  <div className="z-grid-row-description">After Sign Up, just choose a theme, add products and start selling</div>
                </div>
                <div className="z-grid-column z-grid-column-image sm-order-2 lg-order-2">
                  <Image width={700} height={500} className="image-up-down" src="/images/illustrations/products_dashborad.svg" alt='' />
                </div>
              </div>
              <div className="z-grid-row">
                <div className="z-grid-column z-grid-column-text sm-order-1 lg-order-2">
                  <div className="z-grid-row-icon">
                    <lottie-player src="https://assets1.lottiefiles.com/packages/lf20_wnznohxd.json" background="transparent" speed={1} style={{ width: 100 }} loop autoPlay>
                    </lottie-player>
                  </div>
                  <div className="z-grid-row-title">Setup in less than 2 min</div>
                  <div className="z-grid-row-description">Setting up Make My Commerce is extremely simple
                    and fast.</div>
                </div>
                <div className="z-grid-column z-grid-column-image sm-order-2 lg-order-1">
                  <Image width={700} height={500} className="image-up-down" src="/images/illustrations/manage_dashborad.svg" alt='' />
                </div>
              </div>
              <div className="z-grid-row">
                <div className="z-grid-column z-grid-column-text sm-order-1 lg-order-1">
                  <div className="z-grid-row-icon">
                    <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_lzgmqaxw.json" background="transparent" speed={1} style={{ width: 100 }} loop autoPlay>
                    </lottie-player>
                  </div>
                  <div className="z-grid-row-title">No Transaction &amp; Hidden Charges</div>
                  <div className="z-grid-row-description">
                    No Transaction fees per order and No hidden charges.
                  </div>
                </div>
                <div className="z-grid-column z-grid-column-image sm-order-2 lg-order-2">
                  <Image width={700} height={500} className="image-up-down" src="/images/illustrations/fees_dashboard.svg" alt='' />
                </div>
              </div>
              <div className="z-grid-row">
                <div className="z-grid-column z-grid-column-text sm-order-1 lg-order-2">
                  <div className="z-grid-row-icon">
                    <lottie-player src="https://assets10.lottiefiles.com/packages/lf20_onyvyypx.json" background="transparent" speed={1} style={{ width: 100 }} loop autoPlay>
                    </lottie-player>
                  </div>
                  <div className="z-grid-row-title">Manage your store Easily!</div>
                  <div className="z-grid-row-description">Use a single dashboard to manage Orders,
                    Shipping, and Payments.
                  </div>
                </div>
                <div className="z-grid-column z-grid-column-image sm-order-2 lg-order-1">
                  <Image width={700} height={500} className="image-up-down" src="/images/illustrations/orders_dashborad.svg" alt='' />
                </div>
              </div>
              <div className="z-grid-row">
                <div className="z-grid-column z-grid-column-text sm-order-1 lg-order-1">
                  <div className="z-grid-row-icon">
                    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_h2nkford.json" background="transparent" speed={1} style={{ width: 100 }} loop autoPlay>
                    </lottie-player>
                  </div>
                  <div className="z-grid-row-title">Shipping Automated</div>
                  <div className="z-grid-row-description">
                    Ship your orders through your Dashboard only. Get secure payments, configurable
                    shipping options, and more
                  </div>
                </div>
                <div className="z-grid-column z-grid-column-image sm-order-2 lg-order-2">
                  <Image width={700} height={500} className="image-up-down" src="/images/illustrations/shipping_dashborad.svg" alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{zIndex:-1}} id="templates" className="dollie-blueprints">
          <div className="container">
            <h2 className="dollie-blueprints-title mmc-block-title">
              <span>
                How It will Make you More Revenue<span className="mmc-green-color">.</span>
              </span>
            </h2>
            <div className="single-video-features grid grid-cols-3 gap-68 mobile:grid-cols-1">
              <div className="single-video-features-item">
                <Image width={100} height={100} className="single-video-features-item-image image-up-down" src="/images/more_revenue/hosting.svg" alt="Choose your template" />
                <div className="single-video-features-item-title">Your E-commerce Hosting is on us </div>
                <div className="single-video-features-item-description">Website Hosting(Unlimited Bandwidth)
                  &amp; SSL Certificate is included in all the Plans</div>
              </div>
              <div className="single-video-features-item">
                <Image width={100} height={100} className="single-video-features-item-image image-up-down" src="/images/more_revenue/website.svg" alt="Add the tools you need" />
                <div className="single-video-features-item-title">We can integrate your Store with your
                  existing website</div>
                <div className="single-video-features-item-description">We can easily integrate it with your
                  existing Website/Blog</div>
              </div>
              <div className="single-video-features-item">
                <Image width={100} height={100} className="single-video-features-item-image image-up-down" src="/images/more_revenue/target.svg" alt="Reach your audience" />
                <div className="single-video-features-item-title">Get Analytics and Your Customer Data to
                  Retarget them</div>
                <div className="single-video-features-item-description">Gain valuable insight into your
                  traffic and retarget through E-mail to buy products in their Cart</div>
              </div>
            </div>
          </div>
        </section>
        <section style={{zIndex:-1}} className="single-video">
          <h2 className="single-video-title mmc-block-title">
            <span>
              Get the help you need, every step of the way<span className="mmc-green-color">.</span>
            </span>
          </h2>
          <div className="single-video-frame-wrapper">
            <div className="single-video-frame">
              <iframe loading="lazy" title width={640} height={360} src="https://www.youtube.com/embed/_29xkzje7tw" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
          </div>
          {/* <Link href='/login'><a className="mmc-btn mmc-yellow-btn" >Get Started</a> </Link> */}
        </section>
        {/* <section id="pricing" className="pricing-plans">
            <h2 className="pricing-plans-title mmc-block-title">Choose A Plan Below<span className="mmc-green-color">.</span></h2>
            <div className="pricing-plans-subtitle">Choose the number of sites you need below:</div>
            <div className="pricing-plans-slider-wrapper switch-below">
              <div className="pricing-plans-slider arrows-sides">
                <div className="pricing-plans-slider-item" data-product="{&quot;monthly&quot;:{&quot;variation_id&quot;:202,&quot;price&quot;:7},&quot;yearly&quot;:{&quot;variation_id&quot;:203,&quot;price&quot;:5}}">
                  <div className="pricing-plans-slider-item-wrapper">
                    <div className="pricing-plans-slider-item-name">Basic</div>
                    <div className="pricing-plans-slider-item-price">
                      <div className="currency">₹</div>
                      <div className="pricing-plans-slider-item-price-value">599</div>
                      <div className="billing-period">/mo</div>
                    </div>
                    <ul className="pricing-plans-slider-item-features">
                      <li>30 Products</li>
                      <li>No Transaction Charge</li>
                      <li>Free Hosting</li>
                      <li>Free SSL</li>
                      <li>24/7 support</li>
                    </ul>
                    <a className="pricing-plans-slider-item-button mmc-btn mmc-outline-yellow-btn" href="coming-soon.html">Choose</a>
                    <div className="pricing-plans-slider-item-caption mmc-green-color">30-day money-back
                    </div>
                  </div>
                </div>
                <div className="pricing-plans-slider-item" data-product="{&quot;monthly&quot;:{&quot;variation_id&quot;:205,&quot;price&quot;:14},&quot;yearly&quot;:{&quot;variation_id&quot;:206,&quot;price&quot;:10}}">
                  <div className="pricing-plans-slider-item-wrapper">
                    <div className="pricing-plans-slider-item-name">Advance</div>
                    <div className="pricing-plans-slider-item-price">
                      <div className="currency">₹</div>
                      <div className="pricing-plans-slider-item-price-value">1799</div>
                      <div className="billing-period">/mo</div>
                    </div>
                    <ul className="pricing-plans-slider-item-features">
                      <li>Unlimited Products</li>
                      <li>No Transaction Charge</li>
                      <li>Free Hosting</li>
                      <li>Free SSL</li>
                      <li>24/7 support</li>
                    </ul>
                    <a className="pricing-plans-slider-item-button mmc-btn mmc-outline-yellow-btn" href="coming-soon.html">Choose</a>
                    <div className="pricing-plans-slider-item-caption mmc-green-color">30-day money-back
                    </div>
                  </div>
                </div>
                <div className="pricing-plans-slider-item" data-product="{&quot;monthly&quot;:{&quot;variation_id&quot;:209,&quot;price&quot;:75},&quot;yearly&quot;:{&quot;variation_id&quot;:210,&quot;price&quot;:63}}">
                  <div className="pricing-plans-slider-item-wrapper">
                    <div className="pricing-plans-slider-item-name">Pro</div>
                    <div className="pricing-plans-slider-item-price">
                      <div className="currency">₹</div>
                      <div className="pricing-plans-slider-item-price-value">1999</div>
                      <div className="billing-period">/mo</div>
                    </div>
                    <ul className="pricing-plans-slider-item-features">
                      <li>All Themes &amp; Plugins Free Access</li>
                      <li>Unlimited Products</li>
                      <li>No Transaction Charge</li>
                      <li>Reports</li>
                      <li>Free Hosting</li>
                      <li>Free SSL</li>
                      <li>24/7 support</li>
                    </ul>
                    <a className="pricing-plans-slider-item-button mmc-btn mmc-outline-yellow-btn" href="coming-soon.html">Choose</a>
                    <div className="pricing-plans-slider-item-caption mmc-green-color">30-day money-back
                    </div>
                  </div>
                </div>
              </div>
            </div></section>
          <section id="features" className="z-grid">
            <div className="z-grid-wrapper container">
              <h2 className="z-grid-title mmc-block-title">
                <span>
                  Why Launch your E-Commerce with<br />
                  <span className="mmc-green-color">Make My Commerce ?</span>
                </span>
              </h2>
              <div className="z-grid-rows start-image">
                <div className="z-grid-row">
                  <div className="z-grid-column z-grid-column-text">
                    <div className="z-grid-row-title">Speed &amp; Optimization of Custom Coded E-commerce</div>
                    <div className="z-grid-row-description">
                      The speed of your Website is one of the most important SEO ranking factors.
                      Get the best results with caching and custom-built advanced optimization.
                    </div>
                  </div>
                  <div className="z-grid-column z-grid-column-image">
                    <Image width={300} height={300} className="image-up-down"  src="/images/illustrations/speed.svg" alt />
                  </div>
                </div>
                <div className="z-grid-row">
                  <div className="z-grid-column z-grid-column-text">
                    <div className="z-grid-row-title">One Point Solution for Products, Orders &amp; Shipping
                    </div>
                    <div className="z-grid-row-description">
                      <ul style={{ listStyle: 'square' }}>
                        <li>Order management and fulfillment</li>
                        <li>Inventory management</li>
                        <li>Shipping and delivery</li>
                        <li>Customer Retargeting</li>
                        <li>Returns and refunds</li>
                      </ul>
                    </div>
                  </div>
                  <div className="z-grid-column z-grid-column-image">
                    <Image width={300} height={300} className="image-up-down"  src="/images/illustrations/orders_dashborad.svg" alt />
                  </div>
                </div>
              </div>
            </div>
          </section> */}

        <section style={{zIndex:-1}} className="faq-block">
          <div className="faq-block-wrapper">
            <h2 className="faq-block-title mmc-block-title">
              <span>
                Frequently Asked Questions<span className="mmc-green-color">.</span> 
                <Image width={300} height={300} src="/images/basic/arrow-11.svg" alt='' />
              </span>
            </h2>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item my-4">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Do I need to enter my payment information to sign up?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-mdb-parent="#accordionExample">
                  <div className="accordion-body">
                    No. You can sign up and use Make My Commerce Free Plan without entering your
                    payment information.<br />
                    We provide a managed solution developed from the ground up so you can host
                    your site on a high
                    performant, secure and managed platform.
                  </div>
                </div>
              </div>
              <div className="accordion-item my-4">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Can I change my plan
                    later on?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-mdb-parent="#accordionExample">
                  <div className="accordion-body">
                    Absolutely! You can upgrade or downgrade your plan at any time
                  </div>
                </div>
              </div>
              <div className="accordion-item my-4">
                <h2 className="accordion-header" id="headingSix">
                  <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    What kind of support and
                    maintenance do you
                    provide?
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-mdb-parent="#accordionExample">
                  <div className="accordion-body">
                    We have a dedicated support team that works 24/7 to make sure your website
                    runs smoothly. We also
                    maintain your Hosting servers to provide a secure and fast website
                    experience.<br />
                    We provide a managed solution developed from the ground up so you can manage
                    your site on a high
                    performant, secure and managed platform.
                  </div>
                </div>
              </div>
              <div className="accordion-item my-4">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    Do I need a web
                    host?
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-mdb-parent="#accordionExample">
                  <div className="accordion-body">
                    Make My Commerce includes secure, unlimited ecommerce hosting on all plans
                    except Free Plan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <section style={{zIndex:-1}} className="z-grid">
          <div className="z-grid-wrapper container">
            <h2 className="z-grid-title mmc-block-title">
              <span>
                You Also Get
              </span>
            </h2>
            <div className="z-grid-rows start-image">
              <div className="z-grid-row">
                <div className="z-grid-column z-grid-column-text">
                  <div className="z-grid-row-title">24x7 Support</div>
                  <div className="z-grid-row-description">Our team of developers will solve all technical
                    issues to get your e-Commerce Website up and running. Anytime.</div>
                </div>
                <div className="z-grid-column z-grid-column-image">
                  <Image width={500} height={500} className="image-up-down" src="/images/illustrations/247.svg" alt='' />
                </div>
              </div>
              <div className="z-grid-row">
                <div className="z-grid-column z-grid-column-text">
                  <div className="z-grid-row-title">Use Your Own Domain</div>
                  <div className="z-grid-row-description">
                    We provide domain name like:<br /><br />
                    <span className="mmc-green-color">https://www.makemycommerce.com/store-name</span>
                    <br />
                    But you can also use your own Domain Name
                  </div>
                </div>
                <div className="z-grid-column z-grid-column-image">
                  <Image width={500} height={300} className="image-up-down" src="/images/illustrations/domain.svg" alt='' />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section style={{zIndex:-1}} id="bottom-block" className="small-cta-3">
          <div className="small-cta-3-wrapper container">
            <h2 className="small-cta-3-title mmc-block-title">
              <span>
                Open your E-Commerce Store today<span className="mmc-green-color">!</span>
              </span>
            </h2>
            {/* <div className="small-cta-3-links">
              <Link href='/login'>
                <a className="mmc-btn mmc-yellow-btn">Get My Website</a>
              </Link>
            </div> */}
            <p className="small-white-text mt-4"> Free and paid plans available with no transaction fees.</p>
          </div>
        </section>

      </main> {/* end #main */}

      <Footer />
    </>
  )
}
