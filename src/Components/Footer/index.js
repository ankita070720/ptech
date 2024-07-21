import {LuShirt} from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { TbDiscount } from "react-icons/tb";
import {CiBadgeDollar} from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = ()=>{
    return(<>
    <footer>
    <div className="container">
        <div className="topInfo row">
        <div className="col d-flex align-items-center">
            <span><LuShirt/></span>
            <span className="ms-2">Company</span>
            </div>
            <div className="col d-flex align-items-center">
            <span><TbTruckDelivery/></span>
            <span className="ms-2">Jobs</span>
            </div>
            <div className="col d-flex align-items-center">
            <span><TbDiscount /></span>
            <span className="ms-2">Topic wise learning</span>
            </div>
            <div className="col d-flex align-items-center">
            <span><CiBadgeDollar/></span>
            <span className="ms-2">Interview Prepration</span>
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
                <h5>Interview Prepration</h5>
                <ul>
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
            <ul className="list list-inline ms-auto mb-0">
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