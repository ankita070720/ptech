# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
npm install gh-pages
git remote add origin git@github.com:ankita070720/PTech.git
git branch -M main
git push -u origin main

npm install @mui/material @emotion/react @emotion/styled
rm -rf node_modules/
npm install

#24292e
#cdc1b6
#3b433d
fff1ee
ariant="subtitle1" component="div"
npm i react-responsive-carousel


   <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="sticky">
                <div className="banner">
                  <img src={banner1} alt="image1" className="cursor w-100" />
                </div>
                <div className="banner mt-4">
                  <img src={banner2} alt="image1" className="cursor w-100" />
                </div>
              </div>
            </div>
            <div className="col-md-9 productRow">
              <div className="d-flex align-item-center">
                <div className="info w-75">
                  <h3 className="mb-0 hd">BEST SELLERS</h3>
                  <p className="text-light text-sml mb-0">
                    Do not miss the current offers until the end of march.
                  </p>{" "}
                </div>
                <Button className="viewAllBtn ms-auto">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="productRow w-100 mt-4">
                <Swiper
                  slidesPerView={4}
                  spaceBetween={0}
                  navigation={true}
                  slidesPerGroup={1}
                  modules={[Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>{" "}
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>{" "}
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>{" "}
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>{" "}
                  <SwiperSlide>
                    <ProductItem />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="d-flex align-item-center mt-5">
                <div className="info w-75">
                  <h3 className="mb-0 hd">New Products</h3>
                  <p className="text-light text-sml mb-0">
                    New products with updated stocks.
                  </p>{" "}
                </div>
                <Button className="viewAllBtn ms-auto">
                  View All <IoIosArrowRoundForward />
                </Button>
              </div>
              <div className="productRow2 w-100 mt-4 d-flex">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
              <div className="d-flex mt-4 mb-5 bannerSec">
                <div className="banner">
                  <img src={banner3} className="cursor w-100" alt="" banner3 />
                </div>
                <div className="banner">
                  <img src={banner4} className="cursor w-100" alt="banner4" />
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
                   <p className="text-white mb-1">$20 discount for your first order </p> 
                   <h4 className="text-white">Join our newsletter and get...</h4> 
                   <p className="text-light">Join our email subscription now to get updates<br/> on promotions and coupons.</p> 
                    <form>
                        <IoMailOutline/>
                        <input type="text" placeholder="Your Email Address"/>
                        <Button>Subscribe</Button>
                    </form>
                </div>
                <div className="col-md-6">
                    <img src={newsLetterImage} alt="newsLetterImage"/>
                    </div>
            </div>
        </div>
      </section>


About us
Careers
Employer home
Sitemap
Credits
Help center
Summons/Notices
Grievances
Report issue
Privacy policy
Terms & conditions
Fraud alert
Trust & safety

npm install mongoose
nav .navpart2 ul li a:hover{
  background: #f0faff;color: #2bbef9;
}


    const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return(<>
   
   <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="Firstname" placeholder="First name" {...register("Firstname", {required: true, maxLength: 80})} />
      {errors.Firstname &&(<p style={{color:"orangered"}}>{errors.Firstname.message}</p>)}
      <input type="text" placeholder="Last name" {...register("Lastname", {required: true, maxLength: 100})} />
      {errors.Lastname &&(<p style={{color:"orangered"}}>{errors.Lastname.message}</p>)}
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern:{value: /^\S+@\S+$/i, message:"Invalid email address"},})} />
      {errors.Email &&(<p style={{color:"orangered"}}>{errors.Email.message}</p>)}
      <input type="tel" placeholder="Mobile number" {...register("Mobilenumber", {required: true, minLength:{value:6, message:"Minimum 6 digits are allowed"}, maxLength: {value:12, message:"Maximum 12 digits are allowed"},})} />
      {errors.Mobilenumber &&(<p style={{color:"orangered"}}>{errors.Mobilenumber.message}</p>)}
      <select {...register("Title", { required: "Title is required" })}>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Miss">Miss</option>
        <option value="Dr">Dr</option>
      </select>
      {errors.Title &&(<p style={{color:"orangered"}}>{errors.Title.message}</p>)}
      <div className="address">
      <label>Address</label>
      <input {...register("address.city",{required:"City is required"})} placeholder="City"/>
      {errors.address?.city && (<p style={{color:"orangered"}}>{errors.address.city}</p>)}
      <input {...register("address.state",{required:"state is required"})} placeholder="state"/>
{errors.address?.state && (<p style={{color:"orangered"}}>{errors.address.state}</p>)}
      </div>


<Controller
        control={control}
        name="startDate"
        render={({ field: { onChange, value,} }) => (
          <ReactDatePicker
            placeholderText="Select Date"
            onChange={onChange} // send value to hook form   // notify when input is touched/blur
            selected={value}
          />
        )}
      />
      <input {...register("Developer", { required: true })} type="radio" value="Yes" />
      <input {...register("Developer", { required: true })} type="radio" value="No" />

      <input type="submit" />
    </form>
  