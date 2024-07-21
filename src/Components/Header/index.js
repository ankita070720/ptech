import { Link } from "react-router-dom";
import Logo from  "../../assets/images/logop.svg";

import Navigation from "./Navigation";
import { FiUser } from "react-icons/fi";
import Staffing from  "../../assets/images/staffingl.png";
import Button from '@mui/material/Button';
import SearchBox from "./SearchBox";




const Header=()=>{
    return(
        <>
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="col-sm-12 mb-0 mt-0 text-center">
                        We <b>Provide</b> best, Candidates and Placements for talent.
                    </p>
                </div>
            </div>
            <header className="header"> 
            <div className="container">
            <div className="row">
            <div className="logoWrapper d-flex align-items-center col-sm-2">
                <Link to={'/'}><img src={Logo} alt="logo"/></Link>
            </div>
            <div className="d-flex align-items-center col-sm-10 part2">
                       
                
               
                {/* Header Search Icon start here  */}
 
                {/* Header Search Icon End here*/}
                {/* User Icon start here */}
                <SearchBox/>
                <div className="part3 d-flex align-items-center ml-auto">
                <Button className="circle ml-3 mr-2"><FiUser/></Button>
                <div className="ml-auto mr-1 cartTab d-flex align-item-center justify-content-center">
                    <span className="price mt-2  mr-3">Login User</span>
                    <div className="mr-3">
                    <img src={Staffing} alt="Staffing" className="circle mr-2"/>
                    <span className="price mt-3  mr-3">Login Company</span>
                    </div>
                </div>
                </div>
            </div>
            </div>
            </div>
            </header>
            <Navigation/>
           
         </div>
        </>
    )
}
export default Header;