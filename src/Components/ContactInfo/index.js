const ContactInfo = (()=>{
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
      };
    return(<>
            <section className="contactFormSection mt-3 mb-3 d-flex align-items-center">
          <div className="container">
            <h3 className="mb-0 hd display-2">Contact Us</h3>
            <p className="text-light display-2  mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quaerat unde quam dolor culpa veritatis inventore, aut commodi eum veniam vel.
            </p>
            <div className="row no-gutters mt-4 contactInfoForm">
              <div className="col-md-8 contactForm ">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">
                      <strong>Name</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      <strong>Email address</strong>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <strong>Phone (optional)</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      placeholder="Your Phone Number"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">
                      <strong>Subject</strong>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">
                      <strong>Message</strong>
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="col-md-4 ml-auto text-white contactInfo">
                <div className="flex-w size11 p-b-47">
                  <h4>Address:</h4>
                  <p>
                    PTech Placement Solutions
                    <br />
                    Indore M.P,
                    <br />
                    Road M.P,
                    <br />
                    India.
                  </p>
                </div>
                <div className="dis-flex size11 p-b-47">
                  <p>
                    <strong>Phone:</strong> +1(123)456-7890
                  </p>
                </div>
                <div className="dis-flex size11 p-b-47">
                  <p>
                    <strong>Email:</strong> contact@ptech.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>)
})

export default ContactInfo;