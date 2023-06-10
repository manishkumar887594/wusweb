

import React  from 'react';
import '../css/style.css';
import cp from '../img/CP.jpg';

function Login() {
    return(<div>


            <div className='col-6 '><img src={cp} alt="Login image"  style={{'object-fit': 'fill', 'object-position': 'left','height':'100%','width':'100%'}}/>
           </div>
            <div className="col-4 ">
                <div className="d-flex" style={{'height': '100%','width': '115px'}}>


                    <form className="rounded align-items-left bg-white shadow p-5" action="<?php echo base_url('/Login/GenrateOTP') ?>" method="post" >
                       
                        <><div className="text-center" >
                           </div><div className="card-body">
                                <h5 className="card-title">Sign In</h5>
                            </div><div className="form-outline mb-4">
                                <label className="form-label " for="InputForMobileNumber" id="lable_apply">Mobile Number</label>
                                <input type="number" value="" name="MobileNumber" id="InputForMobileNumber" className="form-control form-control-lg" />
                            </div><div className="pt-1 mb-4">
                                <button type="submit" className="btn btn-primary btn-lg btn-block" value="submit" STYLE={{display:"flex",alignItems:"Center", justifyContent:"Center"}} id="btnSubmit">Generate OTP</button>
                            </div><p>Don't have an account? <a href="<?= site_url('CyberRegistration.php') ?>" className="link-info">Register here</a></p></>
                    </form>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        
     

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
		


     



<div className="container-fluid bg-white" style={{width:"100%",'position': "fixed",
  
  'bottom': 0,
  'width': "100%"}}>

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

		
<div><button onclick="window.location.href = 'https://ide.geeksforgeeks.org';">chat</button></div>

  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/js/owl-carousel.js"></script>
  <script src="assets/js/animation.js"></script>
  <script src="assets/js/imagesloaded.js"></script>
  <script src="assets/js/popup.js"></script>
  <script src="assets/js/custom.js"></script>
</div></div></div></div></div></div>

      


 );}
export default Login;
