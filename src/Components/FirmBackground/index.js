import { Typography} from '@mui/material';
import * as React from 'react';
import StepContent from '@mui/material/StepContent';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
const steps = [
    { title: 'Innovation', description: 'We lead the industry with innovative solutions.' },
    { title: 'Culture', description: 'Our culture fosters creativity and collaboration.' },
    { title: 'Growth', description: 'Opportunities for personal and professional growth.' },
  ];
const FirmBackground=(()=>{
    return(<>
           <section className="companyShortInto">
          <div className="container">
            <div className="row">
              <div className=" col-md-12 col-sm-12 col-xs-12 d-flex mt-4 mb-5 ">
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <div class="mx-auto grid max-w-6xl grid-cols-4 gap-4 sm:grid-cols-8">
                    <div class="flex items-center justify-center">
                      <h3 className="mb-0 hd">
                        Why <b>PTech</b> ?
                      </h3>
                      <p className="text-medium text-light mb-0">
                        We’re here to guide and support you with every aspect of
                        your career journey, from interview preparation, to
                        valuable industry insights.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-xs-12">
                  <Box sx={{ maxWidth: 400 }}>
                    <Stepper activeStep={-1} orientation="vertical">
                      {steps.map((step, index) => (
                        <Step key={step.title} expanded>
                          <StepLabel>{step.title}</StepLabel>
                          <StepContent>
                            <Typography className="text-medium text-light">
                              {step.description}
                            </Typography>
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
        </>)
});
export default FirmBackground;