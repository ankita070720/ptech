import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { TfiAngleDown } from "react-icons/tfi";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { PiUsersFourLight } from "react-icons/pi";
import { FiUser } from "react-icons/fi";
import { MdMiscellaneousServices } from "react-icons/md";
const Navigation = () => {
  const [isopenSidebarNavVal, setisopenSidebarNavValset] = useState(false);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 navpart1">
            <div className="catWrapper">
              <Button
                className="allCatTab align-item-center"
                onClick={() => setisopenSidebarNavValset(!isopenSidebarNavVal)}
              >
                <span className="icon1 me-3">
                  <IoIosMenu />
                </span>
                <span className="text">All Categories</span>
                <span className="icon2 ms-3">
                  <FaAngleDown />
                </span>
              </Button>
              <div
                className={`sidebarNav ${
                  isopenSidebarNavVal === true ? "open" : " "
                }`}
              >
                <ul>
                  <li>
                    <Link to="/">
                      <Button>
                        Company based Interview{" "}
                        <FaAngleRight className="ms-auto" />
                      </Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>Amdocs</Button>
                      </Link>
                      <Link to="/">
                        <Button>Accenture</Button>
                      </Link>
                      <Link to="/">
                        <Button>Wipro</Button>
                      </Link>
                      <Link to="/">
                        <Button>Infosys</Button>
                      </Link>
                      <Link to="/">
                        <Button>HclTech</Button>
                      </Link>
                      <Link to="/">
                        <Button>Coforge</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>
                        Topics
                        <FaAngleRight className="ms-auto" />
                      </Button>
                    </Link>
                    <div className="submenu">
                      <Link to="/">
                        <Button>React.js</Button>
                      </Link>
                      <Link to="/">
                        <Button>Node.js</Button>
                      </Link>
                      <Link to="/">
                        <Button>Angular</Button>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Resume Writing</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Post a Job</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Search For a Job</Button>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Button>Company Review</Button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-9 navpart2 d-flex align-item-center">
            <ul className="list list-inline w-100">
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    Home &nbsp; <TfiAngleDown />
                  </Button>
                </Link>
                <div className="submenu shadow">
                  <Link to="/">
                    <Button>Prepare </Button>
                  </Link>
                  <Link to="/">
                    <Button>Apply</Button>
                  </Link>
                  <Link to="/">
                    <Button>company Reviews</Button>
                  </Link>
                
                 
                  <Link to="/">
                    <Button>Coding Test</Button>
                  </Link>
                  <Link to="/">
                    <Button>Salary Guide</Button>
                  </Link>
                  <Link to="/">
                    <Button>How to Write Resume</Button>
                  </Link>
                </div>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                      <PiUsersFourLight /> &nbsp; Company
                  </Button>
                </Link>
                
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <FiUser /> &nbsp; Jobs
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                    <MdMiscellaneousServices /> &nbsp; Services
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button>
                   About Us
                  </Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button> Blog</Button>
                </Link>
              </li>
              <li className="list-inline-item">
                <Link to="/">
                  <Button> Contact Us</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
