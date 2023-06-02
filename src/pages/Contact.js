
import React from 'react';
// import _visibility from '../css/bootstrap/utilities'
import a from '../assets/img/img.jpg'

import 'bootstrap/dist/css/bootstrap.min.css';

function contact() {
  return(
    	<section className="ftco-section" >
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 text-center mb-5">
					<h2 className="heading-section">Contact Form </h2>
				</div>
			</div>
		
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="wrapper">
						<div className="row no-gutters">
							<div className="col-lg-5">
								<div className="contact-wrap w-100 p-md-5 p-4">
								
									<div className='col-6'><img src={a} alt="" width="800%" height="250"/></div>
										<div className="col-md-4">
											<div className="dbox w-100 d-flex align-items-start">
						        		<div className="text">
							            <p><span>Email:</span> <a href="mailto:wus@workerunionsupport.com">wus@workerunionsupport.com</a></p>
							          </div>
						          </div>
										</div>
										<div className="col-md-4">
											<div className="dbox w-100 d-flex align-items-start">
						        		<div className="text">
							            <p><span>Phone:</span> <a href="tel://1234567920">+918800408169</a></p>
							          </div>
						          </div>
										</div>
									</div>
									<form method="POST" id="contactForm" name="contactForm" className="contactForm">
										<div className="row">
											<div className="col-md-12">
												<div className="form-group">
													<input type="text" className="form-control" style={{width:'600px'}} name="name" id="name" placeholder="Name"/>
												</div>
											</div>
											<div className="col-md-12"> 
												<div className="form-group">
													<input type="email" className="form-control" name="email" id="email" style={{width:'600px'}}  placeholder="Email"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="text" className="form-control" name="subject" id="subject" style={{width:'600px'}} placeholder="Subject"/>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<textarea name="message" className="form-control" id="message" style={{width:'600px'}} cols="30" rows="4" placeholder="Create a message here"></textarea>
												</div>
											</div>
											<div className="col-md-12">
												<div className="form-group">
													<input type="submit" value="Send Message" align="centre" className="btn btn-primary"/>
													<div className="submitting"></div>
												</div>
											</div>
										</div>
									</form>
									
								</div>
							</div>
							<div className="col-lg-4 d-flex align-items-stretch">
							
									
			          </div></div>
							</div>
						</div>
					</div>
				
			<br></br><br></br><br></br>



					<div className="container-fluid bg-info" style={{width:"100%"}}>

<div className="container ">
	<div className="row g-5">
		<div className="col-lg-4 col-md-6">
			<h4 className="text-white mb-3">Quick Link</h4>
			<a className="btn btn-link" href="">About Us</a>
			<a className="btn btn-link" href="">Contact Us</a>
			<a className="btn btn-link" href="">Privacy Policy</a>
			<a className="btn btn-link" href="">Terms & Condition</a>
			<a className="btn btn-link" href="">FAQs & Help</a>
		</div>
		<div className="col-lg-5 col-md-6">
			<h4 className="text-white mb-3">Contact</h4>
			<p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i><span>
		 <strong>Come visit us:</strong> Directions to <a href="https://goo.gl/maps/JPjjF8s3FMqzLiur6" target="new">Our NCR Office</a></span></p>
			<p className="mb-2"><i className="fa fa-phone-alt me-3"></i>Give us a call:<strong> +91 88004 08169</strong></p>
			<p className="mb-2"><i className="fa fa-envelope me-3"></i> wus@workerunionsupport.com</p>
			<div className="d-flex pt-2">
				<a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
				<a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
				<a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
				<a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
			</div>
		</div>
   
	   </div>
	   h</div> </div>
		

	</section>

        
 );

}
export default contact;

