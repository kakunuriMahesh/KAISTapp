import {AiOutlineApple, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineFacebook} from 'react-icons/ai'
import{IoLogoGooglePlaystore} from 'react-icons/io5'
import {RiArrowRightSLine} from 'react-icons/ri'
import {FaTwitterSquare} from 'react-icons/fa'
import {BsPlayCircle} from 'react-icons/bs'

import './index.css'

const Home = () => {
  return(
    <div className="container">
      <nav>
        <div className="container-fluid">
        <a  href="#home">
          <img className="navbar-brand" src="https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663254322/KAIST-Logo.wine_aqv3mk.png" alt="kaist logo"/>
        </a>
        
        <div className="navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link" aria-current="page" href="#home">HOME</a>
            <a className="nav-link" href="#courses">COURSES</a>
            <a className="nav-link" href="#blog">BLOG</a>
            <a className="nav-link" href="#careers">CAREERS</a>
            <a className="nav-link" href="#about">ABOUT US</a>
            <a className="nav-link" href="#contact">CONTACT</a>
          </div>
        </div>
        
        <div className="button">
          <button href="#login" className="login" type="button">
            Login
          </button>
          <button href="#signup" className="signup" type="button">
            SignUp
          </button>
        </div>

        <div className="toggle-button">
          <p className="line"></p>
          <p className="line"></p>
          <p className="line-bottom"></p>
        </div>
        </div>
      </nav>

      <div className='home'>
        <h1 className="heading">The Future of Learning Its Here.</h1>
        <p >Experience The All New Way of Learning.</p>
        
        <div>
          <button type="button" className="play-store">
            <IoLogoGooglePlaystore className='play-store-icon'/>
            Play Store
          </button>
          <button type="button" className="app-store">
            <AiOutlineApple className='app-store-icon'/>
            App Store
          </button>
        </div>
      </div>

      {/* <BsBoxArrowDown className='down-arrow'/> */}
      
      <div>
        <img alt='down-arrow' src="https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663297034/image48_qgye8z.png"/>
      </div>

      {/* Our Core Fratures */}
      <div>
        <h1 className='core-features'>Our Core Features</h1>
      </div>

      <div className='card-align'>
        <div className='main-card-container'>
          <div className='card-container'>
            <div className='card'>
              <img 
              alt='card-img' 
              className='sub-card-img' 
              src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663297880/image34_pgp5b3.png'/>
              <div>
                <p className='card-para'>Multiple Regional Languages</p>
              </div>
            </div>

            <div className='card'>
              <img 
              alt='card-img' 
              className='sub-card-img' 
              src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663300888/image35_i1m10o.png'/>
              <div>
                <p className='card-para'>
                Impeccable capstoneprojects
                </p>
              </div>
            </div>

            <div className='card'>
              <img 
              alt='card-img' 
              className='sub-card-img' 
              src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663300940/image37_jjlzwf.png'/>
              <div>
                <p className='card-para'>
                Industry Demanding Courses
                </p>
              </div>
            </div>

            <div className='card'>
              <img 
              alt='card-img' 
              className='sub-card-img' 
              src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663301002/image42_vcbj0t.png'/>
              <div>
                <p className='card-para'>Impeccable capstone 
                project</p>
              </div>
            </div>

            <div className='card'>
              <img 
              alt='card-img' 
              className='sub-card-img' 
              src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663302566/image55_j9zabn.png'/>
              <div>
                <p className='card-para'>Multiple Regional Languages</p>
              </div>
            </div>

            <div className='card'>
              <img 
              alt='card-img' 
              className='sub-card-img-gift' 
              src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663302549/image184_lebvfb.png'/>
              <div>
                <p className='card-para'>Multiple Regional Languages</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootcamp */}

      <div>
        <h1 className='core-features'>Bootcamp</h1>
      </div>
      <div className='boot-container'>
        <div className='boot-content'>
          <h1 className='boot-heading'>
            "Working together towards a common goal."
          </h1>
          <p className='boot-para-1'>
            Collaboration is valued by our employees 
            who want to feel like their input matters, our 
            partners who want to be by our side for a 
            phenomenal customer experience, and our 
            customers who want to feel like they’re more 
            to you than just another client.”
          </p>
          <div className='arrow'>
          <a href='#learnmore' className='boot-link'>Learn more
          </a>
          <RiArrowRightSLine className='arrow-icon'/>
          </div>
        </div>
        <img alt='img'
        className='boot-img'
        src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663302531/image134_q7xhc7.png'/>
      </div>

      {/* Featured Courses */}


      <div>
      <h1 className='featured-head'>Featured Courses</h1>
        <div className='course-main-card-container'>
        <div className='courses-card-container'>
          <div className='courses-card'>
            <div className='course-min-card'>
              <p className='enrolled-tag'>Not Enrolled</p>
              <div className='flex-box'>
                <img alt='course-img' 
                className='course-img'
                src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663384512/image78_mghvxv.png'/>
                <div className='flex-box-align'>
                  <h1 className='course-heading'>Flex box</h1>
                  <p className='course-para'>It easier to design 
                    flexible responsive 
                    layout structure 
                    without using float or 
                    positioning. </p>
                </div>
              </div>
            </div>
            <div className='course-details'>
              <h1 className='course-name'>Learn flex box CSS</h1>
              <div className='course-duration'>
                <BsPlayCircle className='play-button'/>
                  <p className='time'>10hr 20mins</p>
              </div>
              <h1 className='course-price'>RS 599/-</h1>
              <button type='button' className='buy-now'>BUY NOW</button>
            </div>
          </div>
        </div>

        <div className='courses-card-container'>
          <div className='courses-card'>
            <div className='course-min-card'>
              <p className='enrolled-tag'>Not Enrolled</p>
              <div className='flex-box'>
                <img alt='course-img' 
                className='course-img'
                src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663482062/image85-removebg-preview_hw9yfw.png'/>
                <div className='flex-box-align'>
                  <h1 className='course-heading'>CSS</h1>
                  <p className='course-para'>CSS is used for describing 
                  the presentation of a 
                  document written in a 
                  markup language such as 
                  HTML.</p>
                </div>
              </div>
            </div>
            <div className='course-details'>
              <h1 className='course-name'>CSS Made Easy</h1>
              <div className='course-duration'>
                <BsPlayCircle className='play-button'/>
                  <p className='time'>08hrs 40mins</p>
              </div>
              <h1 className='course-price'>RS 2000/-</h1>
              <button type='button' className='buy-now'>BUY NOW</button>
            </div>
          </div>
        </div>

        <div className='courses-card-container'>
          <div className='courses-card'>
            <div className='course-min-card'>
              <p className='enrolled-tag'>Not Enrolled</p>
              <div className='flex-box'>
                <img alt='course-img' 
                className='course-img'
                src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663482274/download-removebg-preview_jiaz0v.png'/>
                <div className='flex-box-align'>
                  <h1 className='course-heading'>ReactNative</h1>
                  <p className='course-para'>React Native allows you to 
                  build natively-rendered mobile 
                  apps for iOS and Android.</p>
                </div>
              </div>
            </div>
            <div className='course-details'>
              <h1 className='course-name'>ReactNative 101</h1>
              <div className='course-duration'>
                <BsPlayCircle className='play-button'/>
                  <p className='time'>09hrs 10mins</p>
              </div>
              <h1 className='course-price'>RS 1500/-</h1>
              <button type='button' className='buy-now'>BUY NOW</button>
            </div>
          </div>
        </div>

        </div>
        <button type='button' className='view-more'>View More Courses</button>
      </div>

      {/* Benefits */}

      <div>
        <h1 className='benefits'>Benifits</h1>
        <div className='benefits-container-1'>
          <div className='benefits-matter'>
            <h1 className='benefits-head'>"A Community to Learn and Grow Together"</h1>
            <p className='benefits-para'>Introducing Genesys Learner s Network. Create, 
              Share and Learn Together.</p>
          </div>
          <img
          className='benefits-img' 
          alt='benfits-img'
          src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663393559/image255_owxucc.png'/>
        </div>

        <div className='benefits-container-1'>
          <div className='benefits-matter'>
            <h1 className='benefits-head'>" Incisively Engineered Curriculum 
              Coupled With Comprehensible 
              Pedagogy"</h1>
            <p className='benefits-para'>Curriculum designed to cover a wide spectrum 
            of thesis and projects with best teaching pratices 
            enables the learners to think.</p>
          </div>
          <img
          className='benefits-img-1' 
          alt='benfits-img'
          src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663392667/image168_jwabqz.jpg'/>
        </div>

        <div className='benefits-container-1'>
          <div className='benefits-matter'>
            <h1 className='benefits-head'>"Intutive & Futuristic Animations and 
            Infographics For Better Understanding 
            Concepts "</h1>
            <p className='benefits-para'>All the Learning videos are designed with 2D & 3D 
              animations for making the process of learning 
              interesting.</p>
          </div>
          <img
          className='benefits-img' 
          alt='benfits-img'
          src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663392721/image220_qaospz.png'/>
        </div>
      </div>

      {/* What's more */}

      <div>
        <h1 className='benefits'>What's More</h1>
        <div className='more-container'>
          <div className='more'>
            <img 
            src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663479229/image62_tpob0o.png'
            alt='more-img'
            className='more-img'
            />
            <p className='more-para'>Register for a Bootcamp of your Interest</p>
          </div>

          <div className='more'>
            <img 
            src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663479242/image64_s8orlc.png'
            alt='more-img'
            className='more-img'
            />
            <p className='more-para'>Complete the Challanges and Projects</p>
          </div>

          <div className='more'>
            <img 
            src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663479284/image215_c9b5av.png'
            alt='more-img'
            className='more-img'
            />
            <p className='more-para'>Get a Job Offer Letter</p>
          </div>
        </div>

        <div className='chat-more-container'>
          <img 
            src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663480699/image114_yjwau0.png'
            alt="kaist logo" 
            className='chat-img'/>
          <div className='mail-container'>
            <h2 className='heading-chat'>Become a Programmer</h2>
            <p>Subscribe to get Best Practices, Nifty Tips & Tricks in the Technology you choose. </p>
            <input placeholder='Enter Your Mail' className='input-mail'/>
          </div>
        </div>
      </div>

      {/* footer */}
      <div>
        <div className='footer'>
          <div className='footer-1'>
            <div className='logo-container'>
              <img src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663306214/image95_onpzef.png'
              alt=''
              className='footer-logo'
              />
              <img
              alt=''
              src='https://res.cloudinary.com/dwhmqaqhj/image/upload/v1663306695/image7_a11h9w.png'
              className='footer-logo-bottom-line'
              />
            </div>
            <p className='footer-para'>Kaist Academy,</p>
            <p className='footer-para'>A Kaist Technovation Venture.</p>
            <div className='footer-social-icon'>
              <a href='instagram'><AiOutlineInstagram className='social-icon'/></a>
              <a href='facebook'><AiOutlineFacebook className='social-icon'/></a>
              <a href='twitter'><FaTwitterSquare className='social-icon-tw-size social-icon'/></a>
              <a href='linkedin'><AiOutlineLinkedin className='social-icon'/></a>
            </div>
          </div>

          <div className='footer-2'>
            <h1 className='footer-head'>Company</h1>
            <p className='footer-para'>BLOG</p>
            <p className='footer-para'>CAREERS</p>
            <p className='footer-para'>ABOUT US</p>
          </div>

          <div className='footer-3'>
            <h1 className='footer-head'>Leagal</h1>
            <p className='footer-para'>TERMS & CONDITIONS</p>
            <p className='footer-para'>PRIVACY POLICY</p>
          </div>

          <div className='footer-4'>
            <h1 className='footer-head'>Support</h1>
            <p className='footer-para'>CONTACT</p>
          </div>

        </div>
      </div>

    </div>
  )
 }

 export default Home