import HomeBanner from "../HomeBanner/Index";
import { useState } from "react";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import * as React from 'react';
import StepContent from '@mui/material/StepContent';


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {  Navigation, Autoplay } from 'swiper/modules';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';







const steps = [
    {
      label: 'Relevant jobs',
      description: `For each ad campaign that you create, you can control how much
                you're willing to spend on clicks and conversions, which networks
                and geographical locations you want your ads to show on, and more.`,
    },
    {
      label: 'Create an ad group',
      description:
        'An ad group contains one or more ads which target a shared set of keywords.',
    },
    {
      label: 'Create an ad',
      description: `Try out different ad text to see what brings in the most customers,
                and learn how to enhance your ads using features like ad extensions.
                If you run into any problems with your ads, find out how to tell if
                they're running and how to resolve approval issues.`,
    },
  ];


const Home=()=>{
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };
    const [itemBag]= useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ]);   
    return(<>
    <HomeBanner/>
 <section className="homeSection">
        <div className="container">
          <div className="row homeProducts">
          
            <div className="col-md-12 productRow">
              <div className="d-flex align-item-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Major firms are hiring at the moment.</h3>
                  <p className="text-light text-sml mb-0">
                    Seize this opportunity to advance your career with industry leaders.
                  </p>{" "}
                </div>
                <Button className="viewAllBtn ms-auto">
                  View All 
                </Button>
              </div>
              <div className="homeCat w-100 mt-4 ml-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            
        <Swiper
        slidesPerView={4}
        spaceBetween={15}
        navigation={true}
        slidesPerGroup={1}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        modules={[Navigation, Autoplay]}
        
        className="mySwiper"
      >
        
                    <SwiperSlide>
                    <div className="item text-center cursor relative overflow-hidden rounded-3xl border border-outline-variant p-6 text-on-surface duration-100" >
                                
                                    <div className="d-flex align-item-center justify-center">
                                        <img src="https://swiperjs.com/images/libs/js.svg" alt="imag"/>
                                    </div>
                                    <div className="mt-4 hidden justify-center sm:block">
                                    <h6>PAytm</h6>
                                    </div>
                                     
                                    </div>
             
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="item text-center cursor relative overflow-hidden rounded-3xl border border-outline-variant p-6 text-on-surface duration-100" >
                                
                                    <div className="d-flex align-item-center justify-center">
                                        <img src="https://swiperjs.com/images/libs/js.svg" alt="imag"/>
                                    </div>
                                    <div className="mt-4 hidden justify-center sm:block">
                                    <h6>PAytm</h6>
                                    </div>
                                     
                                    </div>
             
                    </SwiperSlide>     <SwiperSlide>
                    <div className="item text-center cursor relative overflow-hidden rounded-3xl border border-outline-variant p-6 text-on-surface duration-100" >
                                
                                    <div className="d-flex align-item-center justify-center">
                                        <img src="https://swiperjs.com/images/libs/js.svg" alt="imag"/>
                                    </div>
                                    <div className="mt-4 hidden justify-center sm:block">
                                    <h6>PAytm</h6>
                                    </div>
                                     
                                    </div>
             
                    </SwiperSlide>     <SwiperSlide>
                    <div className="item text-center cursor relative overflow-hidden rounded-3xl border border-outline-variant p-6 text-on-surface duration-100" >
                                
                                    <div className="d-flex align-item-center justify-center">
                                        <img src="https://swiperjs.com/images/libs/js.svg" alt="imag"/>
                                    </div>
                                    <div className="mt-4 hidden justify-center sm:block">
                                    <h6>PAytm</h6>
                                    </div>
                                     
                                    </div>
             
                    </SwiperSlide>     <SwiperSlide>
                    <div className="item text-center cursor relative overflow-hidden rounded-3xl border border-outline-variant p-6 text-on-surface duration-100" >
                                
                                    <div className="d-flex align-item-center justify-center">
                                        <img src="https://swiperjs.com/images/libs/js.svg" alt="imag"/>
                                    </div>
                                    <div className="mt-4 hidden justify-center sm:block">
                                    <h6>PAytm</h6>
                                    </div>
                                     
                                    </div>
             
                    </SwiperSlide>     <SwiperSlide>
                    <div className="item text-center cursor relative overflow-hidden rounded-3xl border border-outline-variant p-6 text-on-surface duration-100" >
                                
                                    <div className="d-flex align-item-center justify-center">
                                        <img src="https://swiperjs.com/images/libs/js.svg" alt="imag"/>
                                    </div>
                                    <div className="mt-4 hidden justify-center sm:block">
                                    <h6>PAytm</h6>
                                    </div>
                                     
                                    </div>
             
                    </SwiperSlide>
              
     
        </Swiper>
      
              </div>

            
              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
              <div class="mx-auto grid max-w-6xl grid-cols-4 gap-4 sm:grid-cols-8">
              <div class="flex items-center justify-center">
                <h3>Why <b>PTech</b> ?</h3>
                <p>We’re here to guide and support you with every aspect of your career journey, from interview preparation, to valuable industry insights.</p>
                </div>
              </div>
                </div>
                <div className="banner">
                <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                   <p className="text-white mb-1">Get job notification on your registered emailId. </p> 
                   <h4 className="text-white">Join our community and get...</h4> 
                   <p className="text-light">Join our email subscription now to get updates<br/> on job notifications.</p> 
                    <form>
                    
                        <input type="text" placeholder="Your Email Address"/>
                        <Button>Subscribe</Button>
                    </form>
                </div>
                <div className="col-md-6">
                    <img src="" alt="newsLetterImage"/>
                    </div>
            </div>
        </div>
      </section>
   
    </>)
}
export default Home;