import { Button } from "@mui/material";
import { useForm } from "react-hook-form";

const RegistrationForm=(()=>{
    useForm()
    return(<>
   
   <div className="signupForm">
    <div className="container mt-5">
        <h2 className="text-center mb-4">Registration Form</h2>
        <form aria-labelledby="formHeading">
           
            <div className="form-row">
                <div className="form-group col-12 col-sm-6">
                    <label for="firstName">First Name <span class="sr-only">(required)</span></label>
                    <input type="text" class="form-control" id="firstName" placeholder="First Name" required aria-required="true"/>
                </div>
                <div className="form-group col-12 col-sm-6">
                    <label for="lastName">Last Name <span className="sr-only">(required)</span></label>
                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" required aria-required="true"/>
                </div>
            </div>
            <div className="form-group">
                <label for="inputEmail">Email <span className="sr-only">(required)</span></label>
                <input type="email" className="form-control" id="inputEmail" placeholder="Email" required aria-required="true"/>
            </div>
            <div className="form-group">
                <label for="inputPhone">Phone Number <span className="sr-only">(required)</span></label>
                <input type="tel" className="form-control" id="inputPhone" placeholder="Phone Number" required aria-required="true"/>
            </div>
            
          
            <div className="form-group">
                <label for="inputAddress">Address <span className="sr-only">(required)</span></label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" required aria-required="true"/>
            </div>
            <div className="form-row">
                <div className="form-group col-12 col-md-6">
                    <label for="inputCity">City <span className="sr-only">(required)</span></label>
                    <input type="text" className="form-control" id="inputCity" required aria-required="true"/>
                </div>
                <div className="form-group col-12 col-md-4">
                    <label for="inputState">State <span className="sr-only">(required)</span></label>
                    <select id="inputState" className="form-control" required aria-required="true">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group col-12 col-md-2">
                    <label for="inputZip">Zip <span className="sr-only">(required)</span></label>
                    <input type="text" className="form-control" id="inputZip" required aria-required="true"/>
                </div>
            </div>
            
           
            <div className="form-group">
                <label for="inputCompanyName">Company Name <span className="sr-only">(required)</span></label>
                <input type="text" className="form-control" id="inputCompanyName" placeholder="Company Name" required aria-required="true"/>
            </div>
            <div className="form-group">
                <label for="inputCompanyWebsite">Company Website</label>
                <input type="url" className="form-control" id="inputCompanyWebsite" placeholder="https://example.com"/>
            </div>
            <div className="form-group">
                <label for="inputCompanySize">Company Size <span className="sr-only">(required)</span></label>
                <select id="inputCompanySize" className="form-control" required aria-required="true">
                    <option selected>Choose...</option>
                    <option>1-10 employees</option>
                    <option>11-50 employees</option>
                    <option>51-200 employees</option>
                    <option>201-500 employees</option>
                    <option>501-1000 employees</option>
                    <option>1001+ employees</option>
                </select>
            </div>
            
          
            <div className="form-group">
                <label for="inputServices">Services Interested In</label>
                <select multiple className="form-control" id="inputServices" aria-multiselectable="true">
                    <option>Consulting</option>
                    <option>Project Management</option>
                    <option>Market Research</option>
                    <option>IT Solutions</option>
                    <option>Business Strategy</option>
                    <option>Financial Advisory</option>
                    <option>Other</option>
                </select>
            </div>
            <div className="form-group">
                <label for="additionalInfo">Additional Information</label>
                <textarea className="form-control" id="additionalInfo" rows="3" placeholder="Any additional information"></textarea>
            </div>
            
         
            <div className="form-group">
                <label for="preferredContactMethod">Preferred Contact Method <span className="sr-only">(required)</span></label>
                <select id="preferredContactMethod" className="form-control" required aria-required="true">
                    <option selected>Choose...</option>
                    <option>Email</option>
                    <option>Phone</option>
                    <option>Mail</option>
                </select>
            </div>
            <div className="form-group">
                <label for="preferredContactTime">Preferred Contact Time</label>
                <input type="text" className="form-control" id="preferredContactTime" placeholder="e.g., Morning, Afternoon, Evening"/>
            </div>
            
           
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="agreementCheck" required aria-required="true"/>
                <label className="form-check-label" for="agreementCheck">I agree to the terms and conditions</label>
            </div>
            
        
            <Button type="submit" className="btn btn-primary btn-block">Register</Button>
            
        </form>
    </div>
    </div>
    </>)
})
 export default RegistrationForm;