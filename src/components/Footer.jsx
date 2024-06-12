import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    
      <div>
      <div className="container-fluid bg-primary text-light footer wow fadeIn" data-wow-delay="0.1s">
  <div className="container py-5 px-lg-5">
    <div className="row g-5">
      <div className="col-md-6 col-lg-4">
        <h4 className="text-white mb-4">Address</h4>
        <p><i className="fa fa-map-marker-alt me-3" />BHIVE Workspace, HSR Layout, BangaloreKA 560068, India.</p>
        <p><i className="fa fa-envelope me-3" /></p>
        {/* <p><i className="fa fa-phone-alt me-3" /></p> */}
      </div>
      <div className="col-md-6 col-lg-4">
        <h4 className="text-white mb-4">
        <p>Experience Personalized Health Plans</p></h4>
        <p>Unlock Your Health Potential</p>
      </div>
      <div className="col-md-12 col-lg-4">
        <h4 className="text-white mb-4">Disclaimer</h4>
        <p>Please note that individual results may vary and it's always advisable to consult with a healthcare professional before starting any new diet or exercise program<Link to="/disclaimerpage">moredetails</Link></p>
      </div>
    </div>
    <div className="container px-lg-5">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              © <a className="border-bottom" href="#">fitplano</a>, All Right Reserved. 
              {/*/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. *** /*/}
              Designed By <a className="border-bottom" href="https://hirademy.com">Hirademy</a>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <a href="/">Home</a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>

  {/* Footer End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-lg btn-lg-square back-to-top pt-2"><i className="bi bi-arrow-up text-white" /></a>
</div>

       
  
    
  )
}

export default Footer