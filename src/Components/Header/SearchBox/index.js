import { IoIosSearch } from "react-icons/io";
import Button from '@mui/material/Button';


const SearchBox=()=>{
return(
    <div className="headerSearch ml-3 mr-3">
                    <input type="text" placeholder="Search for Jobs..."/>
                    <Button><IoIosSearch/></Button>
                   
                </div> 
)
}
export default SearchBox;