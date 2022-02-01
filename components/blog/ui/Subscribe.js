import React from 'react'

export default function Subscribe() {
    return (
        <>
             <div className="subscribe-section">
        <div className="subscribe-wrap">
          <h3>Subscribe to new posts</h3>
          <form data-members-form="subscribe" className="subscribe-form">
            <input data-members-email type="email" placeholder="Your email address" aria-label="Your email address" required />
            <button className="global-button button-clone" type="submit">Subscribe</button><button className="global-button" type="submit" style={{ display: 'none' }} disabled>Subscribe</button>
          </form>
          <div className="subscribe-alert">
            <small className="alert-loading global-alert">Processing your application</small>
            <small className="alert-success global-alert">Please check your inbox and click the link to
              confirm your subscription</small>
            <small className="alert-error global-alert">There was an error sending the email</small>
          </div>
        </div>
      </div>



        </>
    )
}
