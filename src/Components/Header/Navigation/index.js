import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { TfiAngleDown } from "react-icons/tfi";
import { TbMeat } from "react-icons/tb";
import { MdOutlineBakeryDining } from "react-icons/md";
import { MdOutlineEmojiFoodBeverage } from "react-icons/md";
import { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";




const Navigation =()=>{
    const [isopenSidebarNavVal, setisopenSidebarNavValset]= useState(false);
    return(
      <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 navpart1">
                            <div className="catWrapper">
                            <Button className="allCatTab align-item-center" onClick={()=>setisopenSidebarNavValset(!isopenSidebarNavVal)}>
                            <span className="icon1 me-3"><IoIosMenu/></span>
                                <span className="text">All Categories</span>
                             <span className="icon2 ms-3"><FaAngleDown/></span>
                            </Button>
                            <div className={`sidebarNav ${isopenSidebarNavVal===true ? 'open': " "}`}>
                                <ul>
                                    <li><Link to="/"><Button>Men<FaAngleRight className="ms-auto"/></Button></Link>
                                    <div className="submenu">
                                    <Link to="/"><Button>Beauty</Button></Link>
                                    <Link to="/"><Button>Grocery</Button></Link>
                                    <Link to="/"><Button>Clothing</Button></Link>
                                    <Link to="/"><Button>Watches</Button></Link>
                                    <Link to="/"><Button>Footwear</Button></Link>
                                    <Link to="/"><Button>Jewellary</Button></Link>
                                    </div>
                                    </li>
                                    <li><Link to="/"><Button>WoMen<FaAngleRight className="ms-auto"/></Button></Link>
                                    <div className="submenu">
                                    <Link to="/"><Button>new</Button></Link>
                                    <Link to="/"><Button>check</Button></Link>
                                    <Link to="/"><Button>things</Button></Link>
                                    
                                    </div>
                                    </li>
                                    <li><Link to="/"><Button>Men</Button></Link></li>
                                    <li><Link to="/"><Button>Men</Button></Link></li>
                                    <li><Link to="/"><Button>Men</Button></Link></li>
                                    <li><Link to="/"><Button>Men</Button></Link></li>
                                    <li><Link to="/"><Button>Men</Button></Link></li>
                                    <li><Link to="/"><Button>Men</Button></Link></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        <div className="col-sm-9 navpart2 d-flex align-item-center">
                            <ul className="list list-inline w-100">
                                <li className="list-inline-item">
                                    <Link to="/"><Button>Home &nbsp; <TfiAngleDown/></Button></Link>
                                <div className="submenu shadow">
                                    <Link to="/"><Button>Prepare </Button></Link>
                                    <Link to="/"><Button>Apply</Button></Link>
                                    <Link to="/"><Button>company Reviews</Button></Link>
                                   
                                    </div>
                                </li>
                                <li className="list-inline-item"><Link to="/"><Button>Company &nbsp; <TfiAngleDown/></Button></Link>
                                <div className="submenu shadow">
                                    <Link to="/"><Button>How to Prepare for Top companies</Button></Link>
                                    <Link to="/"><Button>Interview Questions and Answers</Button></Link>
                                    <Link to="/"><Button>Topic Wise learning</Button></Link>
                                    <Link to="/"><Button>Coding Test</Button></Link>
                                    <Link to="/"><Button>Salary Guide</Button></Link>
                                    <Link to="/"><Button>How to Write Resume</Button></Link>
                                    </div>
                                </li>
                                <li className="list-inline-item"><Link to="/"><Button><TbMeat/> &nbsp; Jobs</Button></Link></li>
                                <li className="list-inline-item"><Link to="/"><Button><MdOutlineBakeryDining/> &nbsp; Services</Button></Link></li>
                                <li className="list-inline-item"><Link to="/"><Button><MdOutlineEmojiFoodBeverage/>&nbsp; About Us</Button></Link></li>
                                <li className="list-inline-item"><Link to="/"><Button>Blog</Button></Link></li>
                                <li className="list-inline-item"><Link to="/"><Button>Contact Us</Button></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
    )

}
export default Navigation;