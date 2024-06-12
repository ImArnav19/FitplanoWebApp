import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import "../App.css"



const Header = () => {
  const { isAuthenticated, user, loginWithRedirect, logout,isLoading} = useAuth0();
  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
     <div className="container-xxl bg-white p-0">
  {/* Navbar & Hero Start */}
  <div className="container-xxl position-relative p-0" id="home">
    <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
      <a href className="navbar-brand p-0" alt='true'>
        <h1 className="m-0">fitplano</h1>
       
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto py-0">
          <a href="#home" className="nav-item nav-link active">Home</a>
          <a href="#about" className="nav-item nav-link">About</a>
          
          {/* <a href="#feature" className="nav-item nav-link">Feature</a> */}
          <a href="#pricing" className="nav-item nav-link">Pricing</a>
          {/* <a href="#review" className="nav-item nav-link"></a> */}
          <a href="#contact" className="nav-item nav-link">Contact</a>
          {/* <Link to="/profile"className="nav-item nav-link">Profile</Link> */}

          <div className="dropdown">
            <button className="nav-item nav-link btn dropdown-toggle bg-transparent" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="true">
              Features
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li><Link to="/generate-plans" className="dropdown-item dp_hover">Generate Fitness/Health Plans</Link></li>
              <li><Link to="/analyze-lab-report" className="dropdown-item dp_hover">Analyze Lab Report</Link></li>
            </ul>
          </div>

       
          </div>
    <div >
      {
        isAuthenticated ? (
          <div className="dropdown  text-end ms-2 ">
  <Link type="button" className="dropdown-toggle btn " data-bs-toggle="dropdown">
  {
          isAuthenticated && <p className="text-sm">{user.name}</p>
        } 
  </Link>
  <ul className="dropdown-menu block ">
  
    <li><Link to={"/profile"} className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-500">profile</Link></li>
    {/* <li><a className="dropdown-item block px-4 py-2 text-gray-800 hover:bg-gray-100" href="#">settings</a></li> */}
    <li><hr className="dropdown-divider" /></li>
    <li><Link className="dropdown-itemblock px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Link></li>
  </ul>
    </div>
          )  :(
            <button className="btn btn-primary-gradient rounded-pill py-2 px-4 ms-3 d-none d-lg-block" onClick={() => loginWithRedirect()}>SignIn</button>
          )
          }  
          </div>       
</div>
      
    </nav>
    </div>
  <div className="container-xxl bg-primary hero-header">
    <div className="container px-lg-5 ml-0">
      <div className="row g-5">
        <div className="col-lg-8 text-center text-lg-start ">
          <h1 className="text-white mb-4 animated slideInDown">Discover Your Perfect Fitness Formula </h1>
          <p className="text-white pb-4 animated slideInDown"> Transform Your Lifestyle, Transform Your Future by Generating your<br/> healthy diet and workout plans</p>
          <Link to="/plangenerator" className="btn btn-primary-gradient py-sm-3 px-4 px-sm-5 rounded-pill me-3 animated slideInLeft ">Generate plans</Link>
          
          {/*<a href className="btn btn-secondary-gradient py-sm-3 px-4 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>*/}
        </div>
        <div className="col-lg-4 d-flex justify-content-center justify-content-lg-end wow fadeInUp" data-wow-delay="0.3s">
          <div className="owl-carousel screenshot-carousel">
            <br/>
          </div>
        </div>
      </div>
    </div>
</div>
<div>
  {/* <div className="container-xxl py-5" id="about">
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
  </div> */}
  {/* About End */}
 
  
</div>

</div>

  )
}

export default Header