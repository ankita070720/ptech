
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";
import { MdOutlineContactPhone } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { PiUsersFourLight } from "react-icons/pi";
import { FaBook } from "react-icons/fa6";

const Footer = ()=>{
    return(<>
    <footer>
    <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
          <div className="container">
            <h3 className="mb-0 hd display-2 text-white">Join our newsletter</h3>
            <p className="display-2 text-light mb-0">Get In Touch..</p>
            <p className="text-light display-2  mb-0">
            Join our email subscription now to get updates on job notifications.
            </p>
            <div className="row no-gutters mt-4">
              <div className="col-md-8  ">
                <form>
                 
                  <input
                      type="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  
                  
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
           
            </div>
          </div>
        </section>
    <div className="container">
        <div className="topInfo row">
        <div className="col d-flex align-items-center">
            <span><PiUsersFourLight/></span>
            <span className="ml-2">Company</span>
            </div>
            <div className="col d-flex align-items-center">
            <span><FiUser/></span>
            <span className="ml-2">Jobs</span>
            </div>
            <div className="col d-flex align-items-center">
            <span><FaBook /></span>
            <span className="ml-2">Topic wise learning</span>
            </div>
            <div className="col d-flex align-items-center">
            <span><MdOutlineContactPhone/></span>
            <span className="ml-2">Interview Prepration</span>
            </div>
           
        </div>
        <div className="row mt-5 linksWrap">
            <div className="col">
                <h5>Company</h5>
                <ul>
                    <li><Link to="#">Post a Job</Link></li>
                    <li><Link to="#">Candidates Filter</Link></li>
                    <li><Link to="#">Search CV
                    </Link></li>
                    <li><Link to="#">Purchase Membership</Link></li>
                 
                </ul>
            </div>
            <div className="col">
                <h5>Jobs</h5>
                <ul>
                    <li><Link to="#">See Company's post</Link></li>
                    <li><Link to="#">Job Search</Link></li>
                    <li><Link to="#">Resume Writing tips
                    </Link></li>
                    <li><Link to="#">Interview Prepration</Link></li>
                    <li><Link to="#">Topic Wise Learning</Link></li>
                    <li><Link to="#">Apply for a Job</Link></li>
                    <li><Link to="#">Track the application</Link></li>
                </ul>
            </div>
            <div className="col">
                <h5>Topic wise learning</h5>
                <ul>
                    <li><Link to="#">React JS</Link></li>
                    <li><Link to="#">Angular Js</Link></li>
                    <li><Link to="#">Typescript
                    </Link></li>
                    <li><Link to="#">Javascript</Link></li>
                    <li><Link to="#">HTML & CSS</Link></li>
                    <li><Link to="#">System Design</Link></li>
                    <li><Link to="#">OOPS Concepts</Link></li>
                </ul>
            </div>
            <div className="col">
                <h5>Resources</h5>
                <ul>
                <li><Link to="#">Pricing</Link></li>
                <li><Link to="#">About Us</Link></li>
                    <li><Link to="#">Interview Q&A</Link></li>
                    <li><Link to="#">Compete Mock Interview Questions </Link></li>
                    <li><Link to="#">Coding Challenges
                    </Link></li>
                    
                </ul>
            </div>
            <div className="col">
                <h5>Blog</h5>
                <ul>
                    <li><Link to="#">Trending Technologies</Link></li>
                    <li><Link to="#">AI tools</Link></li>
                    <li><Link to="#">Women Empowerment</Link></li>
                   
                </ul>
            </div>
        </div>
        <div className="copyright mt-3 pt-3 pb-3 d-flex">
            <p className="mb-0">Copyright 20204. All rights are reserved.</p>
            <ul className="list list-inline ml-auto mb-0">
                <li className="list-inline-item">
                    <Link to="#"><FaFacebookF/></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="#"><FaTwitter/></Link>
                </li>
                <li className="list-inline-item">
                    <Link to="#"><FaInstagram/></Link>
                </li>
            </ul>
        </div>

    </div>
    </footer>
    
    </>)
}
export default Footer;