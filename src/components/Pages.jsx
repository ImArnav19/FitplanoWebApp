import React from 'react'
import { Link } from 'react-router-dom';

const Pages = () => {
  return (
    
 <div className="container-xxl bg-white p-0">
   <div className="container-xxl py-5" id="about">
    <div className="container py-5 px-lg-5">
      <div className="row g-5 align-items-center">
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
          <h5 className="text-primary-gradient fw-medium">About App</h5>
          <h1 className="mb-4">#1 App For Your Fitness</h1>
          <p className="mb-4">Welcome to our platform, where we're dedicated to revolutionizing the way you approach fitness and nutrition. Join us and discover the power of personalized wellness solutions designed to fit seamlessly into your lifestyle.</p>
          <div className="row g-4 mb-4">
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.5s">
              <div className="d-flex">
                <i className="fa fa-cogs fa-2x text-primary-gradient flex-shrink-0 mt-1" />
                <div className="ms-3">
                  <h2 className="mb-0" data-toggle="counter-up">3100+</h2>
                  <p className="text-primary-gradient mb-0">Plans generated</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 wow fadeIn" data-wow-delay="0.7s">
              <div className="d-flex">
                <i className="fa fa-comments fa-2x text-secondary-gradient flex-shrink-0 mt-1" />
                <div className="ms-3">
                  <h2 className="mb-0" data-toggle="counter-up">1120+</h2>
                  <p className="text-secondary-gradient mb-0">Users followed</p>
                </div>
              </div>
            </div>
          </div>
          <Link  to="/plangenerator" className="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill mt-3">Generate Plans</Link>
        </div>
        <div className="col-lg-6">
          <img className="img-fluid wow fadeInUp" data-wow-delay="0.5s" src="img/about.png" />
        </div>
      </div>
    </div>
  </div>
  
    {/*Feature Start */}
    {/* <Link to="/trialplan" >Trialplan</Link> */}
    {/* <div className="container-xxl py-5" id="feature">
  <div className="container py-5 px-lg-5">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h5 className="text-primary-gradient fw-medium">App Features</h5>
      <h1 className="mb-5">Awesome Features</h1>
    </div>
    <div className="row g-4">
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="feature-item bg-light rounded p-4">
          <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{width: '60px', height: '60px'}}>
            <i className="fa fa-eye text-white fs-4" />
          </div>
          <h5 className="mb-3">High Resolution</h5>
          <p className="m-0">The product or service offers images or visuals with a high level of detail and clarity, ensuring a sharp and crisp viewing experience.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="feature-item bg-light rounded p-4">
          <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4" style={{width: '60px', height: '60px'}}>
            <i className="fa fa-layer-group text-white fs-4" />
          </div>
          <h5 className="mb-3">Retina Ready</h5>
          <p className="m-0">The product/service optimally presents content for high-resolution Retina displays, commonly found in modern devices like iPhones and MacBooks.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="feature-item bg-light rounded p-4">
          <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{width: '60px', height: '60px'}}>
            <i className="fa fa-edit text-white fs-4" />
          </div>
          <h5 className="mb-3">Editable Data</h5>
          <p className="m-0">Users have the ability to modify or customize the data within the product or service, providing flexibility and adaptability to individual preferences or specific needs.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="feature-item bg-light rounded p-4">
          <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4" style={{width: '60px', height: '60px'}}>
            <i className="fa fa-shield-alt text-white fs-4" />
          </div>
          <h5 className="mb-3">Fully Secured</h5>
          <p className="m-0">The product or service implements robust security measures to protect sensitive information and ensure the confidentiality and integrity of user data.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="feature-item bg-light rounded p-4">
          <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle mb-4" style={{width: '60px', height: '60px'}}>
            <i className="fa fa-cloud text-white fs-4" />
          </div>
          <h5 className="mb-3">Cloud Storage</h5>
          <p className="m-0">The product or service leverages cloud-based storage solutions, allowing users to store and access their data remotely, often providing scalability and accessibility from various devices.</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="feature-item bg-light rounded p-4">
          <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle mb-4" style={{width: '60px', height: '60px'}}>
            <i className="fa fa-mobile-alt text-white fs-4" />
          </div>
          <h5 className="mb-3">Fully Responsive</h5>
          <p className="m-0">The product or service is designed to adapt and function seamlessly across different devices and screen sizes, providing a consistent user experience regardless of the platform being used.</p>
        </div>
      </div>
    </div>
  </div>
</div> */}
{/*Feature end*/}
    
    
    
        {/* Process Start */}
  <div className="container-xxl py-5">
    <div className="container py-5 px-lg-5">
      <div className="text-center pb-4 wow fadeInUp" data-wow-delay="0.1s">
        <h5 className="text-primary-gradient fw-medium">How It Works</h5>
        <h1 className="mb-5">3 Easy Steps</h1>
      </div>
      <div className="row gy-5 gx-4 justify-content-center">
        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.3s">
          <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
            <div className="d-inline-flex align-items-center justify-content-center bg-secondary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{width: '100px', height: '100px'}}>
              <i className="fa fa-address-card fa-3x text-white" />
            </div>
            <h5 className="mt-4 mb-3">Provide Your Details and Goals</h5>
            <p className="mb-0">Begin your journey by Share your age, weight, dietary preferences, and fitness goals to kickstart your personalized health journey on our platform. Let's build a plan that fits your unique needs and aspirations.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.1s">
          <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
            <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{width: '100px', height: '100px'}}>
              <i className="fa fa-cog fa-3x text-white" />
            </div>
            <h5 className="mt-4 mb-3">Our experts generate plans for you</h5>
            <p className="mb-0">Using cutting-edge algorithms and evidence-based practices,we meticulously analyse your data to generate customised diet and workout plans designed to help you achieve your goals effectively and sustainably.</p>
          </div>
        </div>
        <div className="col-lg-4 col-sm-6 text-center pt-4 wow fadeInUp" data-wow-delay="0.5s">
          <div className="position-relative bg-light rounded pt-5 pb-4 px-4">
            <div className="d-inline-flex align-items-center justify-content-center bg-primary-gradient rounded-circle position-absolute top-0 start-50 translate-middle shadow" style={{width: '100px', height: '100px'}}>
              <i className="fa fa-check fa-3x text-white" />
            </div>
            <h5 className="mt-4 mb-3"> Follow and Succeed</h5>
            <p className="mb-0">With your personalised plans in hand, it's time to put them into action. Follow the guidance provided by our experts, incorporating the recommended meals and exercises into your daily routine. Stay motivated and committed.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Process Start */}
         
    {/* Pricing Start */}
  <div className="container-xxl py-5" id="pricing">
    <div className="container py-5 px-lg-5">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h4 className="text-primary-gradient mb-5 fw-medium">Pricing Plan</h4>
        <h2 className="mb-4">It is totally free for Early users!</h2>
      </div>
   </div>
  </div>
    {/* pricing End */}
  
  {/* Contact Start */}
  <div className="container-xxl py-5" id="contact">
  <div className="container py-5 px-lg-5">
    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
      <h5 className="text-primary-gradient fw-medium">Contact Us</h5>
      <h1 className="mb-5">Get In Touch!</h1>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-9">
        <div className="wow fadeInUp" data-wow-delay="0.3s">
          {/* <p className="text-center mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p> */}
          <form action="https://formsubmit.co/lingavaraprasad8143@gmail.com" method="POST">
            <div className="row g-3">
              
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control " id="name" placeholder="Your Name" name="name" required />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              
              <div className="col-md-6 ">
                <div className="form-floating">
                  <input type="email" className="form-control" id="email" placeholder="Your Email" name="email" required />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" className="form-control" id="subject" placeholder="Subject" name="subject" required/>
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Leave a message here" id="message" style={{height: '150px'}} defaultValue={""} name="message" required/>
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12 text-center">
                <button className="btn btn-primary-gradient rounded-pill py-3 px-5" type="submit">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


  {/* Contact End */}

</div>

  )
}

export default Pages