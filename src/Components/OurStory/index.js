import * as React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
const teamMembers = [
    { name: 'Alice Johnson', role: 'CEO', img: 'https://www.w3schools.com/howto/img_avatar.png', id: 1,description: 'Experts in product management.', },
    { name: 'Bob Smith', role: 'CTO', img: 'https://www.w3schools.com/howto/img_avatar.png', id: 2,description: 'Experts in product management.', },
    { name: 'Charlie Brown', role: 'Lead Developer', img: 'https://www.w3schools.com/howto/img_avatar.png', id: 3,description: 'Experts in product management.', },
  ];
const OurStory =(()=>{
    return(<>
     <section className="team">
          <div className="container">
            <div className="row">
              <h3 className="mb-0 hd">
                Experts <strong>&</strong> Stories
              </h3>
              <p className="text-medium text-light mb-0">
                Showcasing the talent of our team and success of our clients.
                where expertise meets achievement, and stories of success
                unfold.
              </p>

              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                showStatus={false}
                autoPlay={true}
                interval={6100}
              >
                {teamMembers.map((team) => {
                  return (
                    <div>
                      <img src={team.img} alt="img1" />
                      <div className="myCarousel">
                        <h3>{team.name}</h3>
                        <h4>{team.role}</h4>
                        <p>{team.description}</p>
                      </div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </section>
    </>)
})
export default OurStory;