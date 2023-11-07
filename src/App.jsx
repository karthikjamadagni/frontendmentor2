import { useState } from "react";
import "./App.css";
import images from "./assets/images/index.js";
import { motion } from "framer-motion";

const App = () => {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const handleCompany = () => {
    if (company) {
      setCompany(false);
    } else {
      setCompany(true);
    }
  };

  const handleFeatures = () => {
    if (features) {
      setFeatures(false);
    } else {
      setFeatures(true);
    }
  };

  const handleSidebar = ()=>{
    if(sidebar){
      setSidebar(false);
    }
    else{
      setSidebar(true);
    }
    
  }

  return (
    <>
      <div className="main__container">
        {/* Navbar section */}
        <div className="navbar">
          <div className="navbar-left">
            <ul>
              <li>
                <img src={images.logo} alt="" />
              </li>
              <li className="down-arrow">
                <div
                  className={
                    features ? "dropdownvisible black" : "dropdownvisible"
                  }
                  onClick={handleFeatures}
                >
                  Features
                  {!features ? (
                    <img src={images.icon_arrow_down} />
                  ) : (
                    <img src={images.icon_arrow_up} />
                  )}
                </div>

                {features && (
                  <>
                    <div className="dropdowninvisible">
                      <div className="invisiblelist">
                        <img src={images.icon_todo} />{" "}
                        <div className="invisiblecontent">Todo List</div>
                      </div>
                      <div className="invisiblelist">
                        <img src={images.icon_calendar} />{" "}
                        <div className="invisiblecontent">Calendars</div>
                      </div>
                      <div className="invisiblelist">
                        <img src={images.icon_reminders} />{" "}
                        <div className="invisiblecontent">Reminders</div>
                      </div>
                      <div className="invisiblelist">
                        <img src={images.icon_planning} />{" "}
                        <div className="invisiblecontent">Planning</div>
                      </div>
                    </div>
                  </>
                )}
              </li>
              <li className="down-arrow">
                <div
                  className={
                    company ? "dropdownvisible black" : "dropdownvisible"
                  }
                  onClick={handleCompany}
                >
                  Company
                  {!company ? (
                    <img src={images.icon_arrow_down} />
                  ) : (
                    <img src={images.icon_arrow_up} />
                  )}
                </div>
                {company && (
                  <>
                    <div className="dropdowninvisible">
                      <span>History</span>
                      <span>Our Team</span>
                      <span>Blog</span>
                    </div>
                  </>
                )}
              </li>
              <li>Careers</li>
              <li>About</li>
            </ul>
          </div>
          <div className="navbar-right">
            <ul>
              <li>Login</li>
              <li className="register">Register</li>
            </ul>
          </div>
        </div>

        <div className="navbar-mobile">
          <img src={images.logo} />
          <img src={images.icon_menu}  onClick={handleSidebar}/>
        </div>

        {/* Main Section */}
        <div className="hero">
          <div className="hero-left">
            <div className="hero-left-heading">
              <h1>Make</h1>
              <h1>remote work</h1>
            </div>

            <div className="hero-left-paragraph">
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity soar.
            </div>

            <div className="hero-left-button">Learn more</div>

            <div className="hero-left-icons">
              <img
                src={images.client_audiophile}
                alt=""
                className="hero-left-icon-1"
              />
              <img
                src={images.client_databiz}
                alt=""
                className="hero-left-icon-2"
              />
              <img
                src={images.client_maker}
                alt=""
                className="hero-left-icon-3"
              />
              <img
                src={images.client_meet}
                alt=""
                className="hero-left-icon-4"
              />
            </div>
          </div>

          <div className="hero-right">
            <img src={images.image_hero_desktop} alt="" />
          </div>
        </div>



        <div className="hero-mobile">
          <div className="hero-mobile-image">
            <img src={images.image_hero_mobile} />
          </div>

          <div className="hero-mobile-heading">Make Remote Work</div>

          <div className="hero-mobile-paragraph">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </div>

          <div className="hero-mobile-btn-section">
            <div className="hero-mobile-btn">Learn More</div>
          </div>

          <div className="hero-mobile-icons">
            <img
              src={images.client_audiophile}
              alt=""
              className="hero-left-icon-1"
            />
            <img
              src={images.client_databiz}
              alt=""
              className="hero-left-icon-2"
            />
            <img
              src={images.client_maker}
              alt=""
              className="hero-left-icon-3"
            />
            <img src={images.client_meet} alt="" className="hero-left-icon-4" />
          </div>
        </div>

        {
          sidebar && 
          <>
          <motion.div className="sidebar"
          whileInView={{x: [80, 0]}}
          transition={{duration: 0.40, ease:'easeInOut'}}
          >
          <div className="sidebar-close"><img src={images.icon_close_menu} onClick={handleSidebar}/></div>
          <div className="sidebar-item">
            <div className="sidebar-visible" onClick={handleFeatures}>Features {features?   <img src={images.icon_arrow_up}/>:<img src={images.icon_arrow_down}/>}
            </div>
            {
              features && 
              <>
                <div className="sidebar-invisible">
              <div className="sidebar-invisible-item">
                <img src={images.icon_todo}/>
                Todo List
              </div>
              <div className="sidebar-invisible-item">
                <img src={images.icon_calendar}/>
                Calendar
              </div>
              <div className="sidebar-invisible-item">
                <img src={images.icon_reminders}/>
                Reminders
              </div>
              <div className="sidebar-invisible-item">
                <img src={images.icon_planning}/>
                Planning
              </div>
            </div>
              </>
            }
            
          </div>
          <div className="sidebar-item" onClick={handleCompany}>
            <div className="sidebar-visible">
              Company {company?<img src={images.icon_arrow_up}/>:<img src={images.icon_arrow_down}/>}
            </div>
            {
              company && 
              <>
              <div className="sidebar-invisible">
                      <span>History</span>
                      <span>Our Team</span>
                      <span>Blog</span>
              </div>
              </>
            }
          </div>
          <div className="sidebar-item">Careers</div>
          <div className="sidebar-item">About</div>

          <div className="login-register-section">
            <div className="login">Login</div>
            <div className="register">Register</div>
          </div>
          
        </motion.div>
          </>
        }
      </div>
    </>
  );
};

export default App;
