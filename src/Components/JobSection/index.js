import Button from "@mui/material/Button";
import * as React from 'react';
import { Typography, Grid} from '@mui/material';
import Paper from '@mui/material/Paper';
const jobs = [
    { title: 'Software Engineer', description: 'Project Role :Software Development EngineerProject Role Description EngineerProject :Analyze, design, c....', id: 1 , company:'Accenture', rating:4.0, reviews:48745, yearofexperience:"2-6 Yrs", salary: "Not disclosed", location:'Pune',keyskills:'java,HTML,Docker,CSS,Javascript, ReactJs', day: 'day ago'},
    { title: 'Data Scientist', description: 'Project Role: Analyze and interpret complex data Development EngineerProject Role Description EngineerProject Role Description :Analyze.', id: 2 ,company:'Accenture', rating:4.0, reviews:48745, yearofexperience:"2-6 Yrs", salary: "Not disclosed", location:'Pune',keyskills:'java,HTML,Docker,CSS,Javascript, ReactJs', day: 'day ago'},
    { title: 'Product Manager', description: 'Project Role: Lead product development teams Analyze and interpret complex data EngineerProject.', id: 3,company:'Accenture', rating:4.0, reviews:48745, yearofexperience:"2-6 Yrs", salary: "Not disclosed", location:'Pune',keyskills:'java,HTML,Docker,CSS,Javascript, ReactJs', day: 'day ago' },
    
  ];
const JobSection = (()=>{
    return(<>
     <section className="trendingJobs">
          <div className="container">
            <div className="row ">
              <div className="col-md-12 ">
                <div className="d-flex align-item-center">
                  <div className="info w-75">
                    <h3 className="mb-0 hd">Discover your Future</h3>
                    <p className="text-light text-medium mb-0">
                      Find the job that fits you best with us!
                    </p>
                  </div>
                  <Button className="viewAllBtn rightSubtitle">View All</Button>
                </div>
              </div>
              <div className="col-md-12 ">
                <div className="d-flex align-item-center">
                  {jobs.map((job) => {
                    return (
                      <div className="jobsInfo w-50">
                        <Paper
                          sx={{
                            p: 2,
                            margin: "auto",
                            maxWidth: 500,
                            flexGrow: 1,
                            backgroundColor: (theme) =>
                              theme.palette.mode === "dark"
                                ? "#1A2027"
                                : "#fff",
                          }}
                        >
                          <div className="allinfo">
                            <div className="details">
                              <div className="row1">
                                <h3>{job.title}</h3>
                              </div>
                              <div className="row2 d-flex align-items-center mt-2 mb-2 "></div>
                              <div className="row3 d-flex align-items-center mt-2 mb-2"></div>
                              <div className="row4 d-flex align-items-center mt-2 ">
                                <p>{job.description}</p>
                              </div>
                              <div className="row5 d-flex align-items-center mb-2">
                                <h6>{job.keyskills}</h6>
                              </div>
                              <div className="row6 d-flex align-items-center mt-2 mb-2">
                                <Grid container justify="space-between">
                                  <Typography
                                    sx={{ cursor: "pointer" }}
                                    inline
                                    variant="body1"
                                    align="left"
                                    className="text-info"
                                  >
                                    Apply Here
                                  </Typography>
                                  <Typography
                                    ariant="subtitle1"
                                    component="div"
                                    inline
                                    align="right"
                                    className="text-info rightSubtitle"
                                  >
                                    Save Job{" "}
                                  </Typography>
                                </Grid>
                              </div>
                            </div>
                          </div>
                        </Paper>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

    </>)
});

export default JobSection;