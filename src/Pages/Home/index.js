import HomeBanner from "../HomeBanner/Index";
import Button from "@mui/material/Button";
import * as React from 'react';
import StepContent from '@mui/material/StepContent';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {  Navigation, Autoplay } from 'swiper/modules';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import { Typography} from '@mui/material';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';



const jobs = [
  { title: 'Software Engineer', description: 'Develop and maintain software applications.', id: 1 },
  { title: 'Data Scientist', description: 'Analyze and interpret complex data.', id: 2 },
  { title: 'Product Manager', description: 'Lead product development teams.', id: 3 },
];


const companies = [
  { name: 'TechCorp', description: 'Leading innovator in tech solutions.', id: 1 },
  { name: 'DataMinds', description: 'Pioneers in data analysis and AI.', id: 2 },
  { name: 'Productive Inc.', description: 'Experts in product management.', id: 3 },
  { name: 'Productive Inc.', description: 'Experts in product management.', id: 3 },
  { name: 'Productive Inc.', description: 'Experts in product management.', id: 3 },
  
];

const teamMembers = [
    { name: 'Alice Johnson', role: 'CEO', img: 'https://www.w3schools.com/howto/img_avatar.png', id: 1,description: 'Experts in product management.', },
    { name: 'Bob Smith', role: 'CTO', img: 'https://www.w3schools.com/howto/img_avatar.png', id: 2,description: 'Experts in product management.', },
    { name: 'Charlie Brown', role: 'Lead Developer', img: 'https://www.w3schools.com/howto/img_avatar.png', id: 3,description: 'Experts in product management.', },
  ];
  


  const steps = [
    { title: 'Innovation', description: 'We lead the industry with innovative solutions.' },
    { title: 'Culture', description: 'Our culture fosters creativity and collaboration.' },
    { title: 'Growth', description: 'Opportunities for personal and professional growth.' },
  ];

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });
const Home=()=>{
    
    
    return(<>
    <HomeBanner/>
 <section className="homeSection">
        <div className="container">
          <div className="row homeProducts">
           <div className="col-md-12 productRow">
              <div className="d-flex align-item-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Major firms are hiring at the moment.</h3>
                  <p className="text-light text-medium mb-0">
                    Seize this opportunity to advance your career with industry leaders.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All 
                </Button>
              </div>
              <div className="homeCat w-100 mt-4 ml-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            
        <Swiper
        slidesPerView={4}
        spaceBetween={15}
        navigation={false}
        slidesPerGroup={1}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        modules={[Navigation, Autoplay]}
        
        className="mySwiper">
    {companies.map((company)=>{
        return (
            <SwiperSlide>
            <div className="item text-center cursor relative overflow-hidden rounded-3xl border border-outline-variant p-6 text-on-surface duration-100" >
                        
            <Typography className="mt-4" variant="h5">{company.name}</Typography>
                    <Typography className="mt-2"  variant="body2">{company.description}</Typography>
                          
                             
                            </div>
     
            </SwiperSlide>
        )
    })}
           </Swiper>
      
              </div>
 </div>
          </div>
        </div>
      </section>
     
      <section className="companyShortInto">
        <div className="container">
            <div className="row">
            <div className=" col-md-12 col-sm-12 col-xs-12 d-flex mt-4 mb-5 ">
                <div className="col-md-6 col-sm-12 col-xs-12">
              <div class="mx-auto grid max-w-6xl grid-cols-4 gap-4 sm:grid-cols-8">
              <div class="flex items-center justify-center">
                <h3 className="mb-0 hd">Why <b>PTech</b> ?</h3>
                <p className="text-medium text-light mb-0">We’re here to guide and support you with every aspect of your career journey, from interview preparation, to valuable industry insights.</p>
                </div>
              </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={-1} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.title} expanded> 
            <StepLabel
             
            >
              {step.title}
            </StepLabel>
            <StepContent>
              <Typography className="text-medium text-light">{step.description}</Typography>
             
            </StepContent>
          </Step>
        ))}
      </Stepper>
     
    </Box>
                </div>
              </div>
            </div>
        </div>
      
      </section>
      <section className="trendingJobs">
        <div className="container">
          <div className="row ">
           <div className="col-md-12 ">
              <div className="d-flex align-item-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">Get Jobs </h3>
                  <p className="text-light text-medium mb-0">
                    Seize this opportunity to advance your career with industry leaders.
                  </p>
                </div>
                <Button className="viewAllBtn ml-auto">
                  View All 
                </Button>
              </div>
              </div>
              <div className="col-md-12 ">
              <div className="d-flex align-item-center">
                
                {jobs.map((job)=>{
        return (
            <div className="jobsInfo w-50">
                 <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
                <div>
                <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src="https://www.w3schools.com/howto/img_avatar.png" />
          </ButtonBase>
                </div>
            <div className="allinfo">
            <Typography gutterBottom variant="subtitle1" component="div">
              {job.title}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {job.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
              </div>
              <div>
              <Typography sx={{ cursor: 'pointer' }} variant="body2">
                Remove
              </Typography>
              <div>
              <Typography variant="subtitle1" component="div">
              $19.00
            </Typography>
              </div>
              </div>
 
                              </Paper> 
                                        </div>
                )})}
                       
             
                 
              </div>
              </div>
          </div>
        </div>
      </section>
     
   <section className="team">
    <div className="container">
        <div className="row">
        <h3 className="mb-0 hd">Meet Our <b>Team</b></h3>
   <p className="text-medium text-light mb-0">We’re here to guide and support you with every aspect of your career journey, from interview preparation, to valuable industry insights.</p>
   <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        {teamMembers.map((team)=>{
            return(
                <div>
                <img src={team.img} alt="img1" />
                <div className="myCarousel">
                  <h3>{team.name}</h3>
                  <h4>{team.role}</h4>
                  <p>
                  {team.description}
                  </p>
                </div>
              </div>
            )
        })}
       

      

      </Carousel>

 
   
        </div>
    </div>
  
   </section>
      
      <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
        <div className="container">
            <div className="row">
                <div className="col-md-6 ">
                   <h4 className="text-white">Get In Touch..</h4> 
                   <p className="text-light">Join our email subscription now to get updates<br/> on job notifications.</p> 
                    <form>
                   
                      
                       
                        <input type="text" placeholder="please enter email.."/>
                       

                        <Button>Subscribe</Button>
                    </form>
                </div>
                <div className="col-md-6 ml-auto">
                <h4 className="text-white" id="w-c-s-fc_p-1-dm-id">
          <b>Reach us at</b>
        </h4>
       
        <p className="text-white">
         Address: Indore, MP
         Contact number: 821881289198
        </p>
       
        
                    </div>
            </div>
        </div>
      </section>
   
    </>)
}
export default Home;