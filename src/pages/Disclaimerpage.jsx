import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import { useAuth0 } from '@auth0/auth0-react';


// Header component
const Header = () => {
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  return (
    <div id="disclamer">
      <header className="d-flex flex-column align-items-center mt-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <h1 className='text-white animated text-center wow fadeInUp ml-1' style={{fontSize:"800"}}>Disclaimer</h1>
            </div>
            <div className="col-auto ml-auto">
              {!isAuthenticated ? (
                <button className="btn btn-primary-gradient rounded-pill py-2 px-4 ml-2" onClick={() => loginWithRedirect()}>Sign In</button>
              ) : null}
            </div>
            <div className="col-auto">
              {isAuthenticated ? (
                <div className="dropdown text-end ms-2">
                  <Link type="button" className="dropdown-toggle btn" data-bs-toggle="dropdown">
                    {isAuthenticated && <p className="text-sm">{user.name}</p>}
                  </Link>
                  <ul className="dropdown-menu block">
                    <li><Link to={"/profile"} className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-500">Profile</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100 " onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Link></li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
          {/* <div>
            <p className='text-white animated text-center wow fadeInUp mr-5 mt-3' >
              Get personalized Diet plans and exercise plans tailored to your needs<br /> Start your fitness
              <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
                journey Today!
              </h2>
            </p>
          </div> */}
        </div>
      </header>
    </div>
  );
};

// Footer component
const Footer = () => {

  return (
    <div className="container-fluid bg-primary text-light footer wow fadeIn h-100vh" data-wow-delay="0.1s">
      <a href="#" className="btn btn-lg btn-lg-square back-to-top pt-2"><i className="bi bi-arrow-up text-white" /></a>
    <br/><br/>
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
  );
};

const Disclaimerpage = () => {
  return (
    <>
    <div>
      <Header />
     <div>
        <p>
        <h4 className=' container text-center disclaimer-paragraph'>
          <h1 className='text-center'>fitness disclaimer</h1>

Before embarking on any fitness, diet, or workout plan, it's essential to understand that individual results may vary. While these plans aim to improve overall health and well-being, their effectiveness can differ based on various factors, including but not limited to current fitness level, medical history, genetics, and adherence to the program.

It's highly advisable to consult with a qualified healthcare professional, such as a physician, nutritionist, or personal trainer, before initiating any new diet or exercise regimen. A healthcare professional can provide personalized guidance tailored to your specific needs, ensuring that the chosen plan aligns with your health goals and medical considerations.

When selecting a fitness plan, it's crucial to consider factors such as your current fitness level, exercise preferences, time availability, and any existing health conditions or injuries. A well-rounded fitness plan typically includes a combination of cardiovascular exercise, strength training, flexibility exercises, and rest days for recovery.

Similarly, when adopting a new diet plan, it's essential to focus on balanced nutrition that provides adequate energy and nutrients to support your physical activity levels and overall health. A registered dietitian can offer valuable advice on meal planning, portion control, macronutrient distribution, and dietary modifications to meet specific goals or address nutritional deficiencies.

While fitness and diet plans can offer numerous benefits, including weight management, improved cardiovascular health, increased strength and endurance, and enhanced overall well-being, it's essential to approach them with caution and realistic expectations. Rapid or extreme changes to diet or exercise routines can lead to adverse effects such as fatigue, injury, nutritional imbalances, or disordered eating patterns.

Moreover, consistency and patience are key when pursuing fitness and dietary goals. Sustainable progress often requires gradual changes, persistence, and a long-term commitment to healthy habits. It's essential to listen to your body, prioritize rest and recovery, and make adjustments to your plan as needed to ensure continued progress and prevent burnout or overtraining.

In summary, while fitness, diet, and workout plans can be valuable tools for improving health and fitness, it's crucial to approach them mindfully and seek guidance from qualified professionals. By prioritizing safety, individualization, and sustainability, you can maximize the benefits of your wellness journey and achieve long-lasting results. Remember, your health is a lifelong journey, and it's never too late to start prioritizing your well-being.
       </h4> </p>
     </div>
      <Footer />
      </div>
    </>
  );
};

export default Disclaimerpage;
