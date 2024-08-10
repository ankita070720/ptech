import Button from "@mui/material/Button";
import * as React from 'react';
import {  Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Typography} from '@mui/material';
const companies = [
    { name: 'TechCorp', description: 'Leading innovator in tech solutions.', id: 1 },
    { name: 'DataMinds', description: 'Pioneers in data analysis and AI.', id: 2 },
    { name: 'Productive Inc.', description: 'Experts in product management.', id: 3 },
    { name: 'Productive Inc.', description: 'Experts in product management.', id: 3 },
    { name: 'Productive Inc.', description: 'Experts in product management.', id: 3 },
    
  ];
const CompanySection=(()=>{
    return(<>
            <section className="homeSection">
          <div className="container">
            <div className="row homeProducts">
              <div className="col-md-12 productRow">
                <div className="d-flex align-item-center">
                  <div className="info w-75">
                    <h3 className="mb-0 hd">
                      Major firms are hiring at the moment.
                    </h3>
                    <p className="text-light text-medium mb-0">
                      Seize this opportunity to advance your career with
                      industry leaders.
                    </p>
                  </div>
                  <Button className="viewAllBtn ml-auto">View All</Button>
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
                    className="mySwiper"
                  >
                    {companies.map((company) => {
                      return (
                        <SwiperSlide>
                          <div className="item text-center cursor relative overflow-hidden rounded-3xl border border-outline-variant p-6 text-on-surface duration-100">
                            <Typography className="mt-4" variant="h5">
                              {company.name}
                            </Typography>
                            <Typography className="mt-2" variant="body2">
                              {company.description}
                            </Typography>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </section>

    </>);
});

export default CompanySection;