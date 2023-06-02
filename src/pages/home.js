import '../css/style.css';

import play from '../img/demo/google play.png';
import a from '../img/demo/C3i-logo.png';
import b from '../img/demo/nasdaq-logo.png';
import c from '../img/demo/partners.jpg';
import r from '../img/demo/Workers.png';
import q from '../img/news/organiser.png';
import p from '../img//news/fox40.jpg';
import o from '../img//demo/logo.png';
import n from '../img/news/WRDE.png';
import m from '../img/news/WRDE.png';
import vc from '../assets/img1/feature/4-screen.png';
import rs from '../assets/img1/feature/5-screen-2.png';
import kl from '../assets/img1/feature/2-screen.png';
import x from '../assets/img1/feature/4-screen.png';
import ab from '../assets/img1/demo/support2.png';
import ac from '../assets/img1/demo/C3i-logo.png';
import ad from '../assets/img1/demo/nasdaq-logo.png';
import aa from '../assets/img1/demo/partners.jpg';
import ff from '../assets/img1/demo/partners.jpg';
import xx from '../assets/img1/news/blog-single.jpg';
import yy from '../assets/img1/news/vaccination_Drive.jpg';
import ww from '../assets/img1/feature/6-screen.png';
import ffk from '../assets/img1/feature/3-screen.png';
import k1 from '../assets/img1/feature/loan.jpg';
import jj from '../assets/img1/demo/ai.jpg';
import bc from '../assets/img1/news/bw2.jpg';
import ee from '../assets/img1/news/mm2.png';




import React, { Component }  from 'react';

function Home() {
 return(<div>
    
<div className="bgded homebg container">
        <div className='row'>
                        <div className='col-3 center'>    
<a href="https://thecenter.nasdaq.org/" target="new"><img src={b} alt="nasdaq" style={{ width:"100%", height:"50%"}} className="C  img"/></a>
        <br></br>
        
            <a href="https://siicincubator.com/" target="new"><img src={c} alt="IIT" style={{ width:"100%" ,height:"50%"}} className="C"/></a>
        <br></br>
       
        <div > <a href="https://c3ihub.org/" target="new"><img src={a} alt="C3i" style={{ width:"100%" ,height:"50px"}} className="C"/></a></div> 
       
    </div>
    <div className='col-3 img' >
                       <a href="https://play.google.com/store/apps/details?id=com.bb.indianmajdoorunion">
                <img src={play} alt="PlayStore"width="70%" height="125px" className="playstoreImg"/>
            </a>
        </div>
            <div className='col-5'><p>Worker Union Support - A Product Of Pradivya Software Private Limited
(An IIT Kanpur Incubated Venture)
The Worker Union Support (WUS)- A Pradivya Software Pvt Ltd Product is building a digital community for workers and trade unions. Through a worker-union digital community, WUS is building an eco-system to solve workers' professional and personal problems.

</p></div>
           </div></div>
<div className="wrapper row3">
<main className="hoc container clear">
  
    <section id="introblocks" className="row3 inspace-30 clear">
                <div className="row">
              
        <div className="one_half first">
            <h1 className="heading font">OUR AIM: WORKER EMPOWERMENT</h1>
            <hr/>
            <p className="PHeading">Worker Union Support (WUS) WUS Ap is digital platform for blue and grey collar workers in organized and unorganized sectors.
                Worker Union Support works closely with trade unions and departments. WUS App is available in 10 Indian Languages. Workers can communicate through
                voice messages which enable workers to communicate in their native language.</p>
        </div>
        <div className="one_half center  img">
            <img src={n} height="450px" width="100%" alt="worker empowerment"/>
        </div></div>
    </section>

   
    <section id="services">
        <div className="sectiontitle">
            <h6 className="heading font-x2 upper ">Our Solutions</h6>
            <hr/>
        </div>

        <div className="solutionDiv">
            <div className="slider owl-carousel no-border" style={{"border": "none"}}>
                <div className="card center" style={{"border": "none"}}>
                    <div className="img">
                        <img src={x} alt="screen1" style={{width:"100%",height:'500px'}}/>
                    </div>
                    <div className="content">
                        <div className="title">
                            Grievance Redressal
                        </div>
                        <p>
                            Solving workers grievances related to financial, HR, transfer, gratuity, pension, legal, operational issues in their departments,
                            groups or trade unions with help of their leaders.
                        </p>
                    </div>
                </div>
                <div className="card center" >
                    <div className="img">
                        <img src={vc} style={{"border": "none;",height:'500px',width:'100%'}}/>
                    </div>
                    <div className="content">
                        <div className="title">
                            Compensation Calculation (Rule Book)
                        </div>
                        <p>
                            Based on their designation, grade, experience our calculator finds out the joining allowance, medical allowance, conveyance allowance,
                            travel allowance, house rent allowance, Pension, dearness allowances as per different pay commission.
                        </p>
                    </div>
                </div>
                <div className="card center" style={{width:"100%","border": "none;"}}>
                    <div className="img">
                        <img src={kl} alt="screen2" style={{width:"100%","border": "none;"}}s />
                    </div>
                    <div className="content">
                        <div className="title">
                            Jobs And Skills (Knowledge Sharing)
                        </div>
                        <p>
                            WUS Ap jointly works with Team Lease to share degree apprenticeship opportunities for workers and their families. Get daily updates and news
                            for latest government or private jobs and learning opportunities in various sectors, colleges, and universities. Register your skills on our
                            app and get notifications for admissions, exams, interviews at different job openings. Use our AI/ML based application to learn new skills on
                            the job, connect with experts and buy tools for your job.
                        </p>
                    </div>
                </div>
                <div className="card center" style={{"border": "none"}}>
                    <div className="img">
                        <img src={n} alt="screen5"style={{width:'100%'}}/>
                    </div>
                    <div className="content">
                        <div className="title">
                            Community Build-Up (Group Communication)
                        </div>
                        <p>
                            Discuss your problem live with your leaders in virtual rallies, conferences, and forums. Chat within your community for any
                            professional or personal updates with your friends and colleagues. Get perspective into global labour market and laws through
                            interaction with different trade union leaders and even International labour organizations on our platform.
                        </p>
                    </div>
                </div>
                <div className="card center" style={{"border": "none"}}>
                    <div className="img">
                        <img src={ffk} style={{width:"100%","border": "none",height:'300px'}} alt="scree3"/>
                    </div>
                    <div className="content">
                        <div className="title">
                            Library And Notifications (Rights & Privileges)
                        </div>
                        <p>
                            Know your rights and privileges, government schemes, eligibility criteria for central government and state government schemes,
                            Indian railway board orders and circulars with their detailed analysis.
                        </p>
                    </div>
                </div>
                <div className="card center" >
                    <div className="img">
                        <img src={k1} style={{width:"100%","border": "none"}} alt="loan"/>
                    </div>
                    <div className="content">
                        <div className="title">
                            Loans And Credit Support
                        </div>
                        <p>
                            Avail loan from INR 1000 up to 50 Lakhs on our platform from Reserve Bank of India certified banking and Non-banking financial
                            institutional partners using digital KYC and CIBIL score within 1-2 weeks with various discount offers and fee waivers. Avail
                            fundamental financial education and Cyber security tools for secured financial transactions on our platform.
                        </p>
                    </div>
                </div>
                <div className="card center" style={{"border": "none"}}>
                    <div className="img">
                        <img src={ww} style={{width:"100%",height:"350px","border": "none"}} className=' img' alt="sccreen6"/>
                    </div>
                    <div className="content">
                        <div className="title">
                            Refer & Earn (Digital Membership)
                        </div>
                        <p>
                            Share app and its features to within your group and earn hundreds of reward points which can be redeemed for utility bills,
                            shopping or any fee payments.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="clear"></div>
</main>
</div>

{/* <script>
$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000, //2000ms = 2s;
    autoplayHoverPause: true,
});
</script> */}


<div className="bgded AIBg container center bg-info">
<div className="hoc clear AIpad">
    <div className="txtCenter center">
        <h1 className="AIFont">AI,ML&IoT Based Solutions</h1>
        
    </div>
</div>
</div>

<div className="wrapper row3">
<div className="hoc container clear">
   
    <section id="introblocks" className="row3 inspace-30 clear">
        <div className="one_half first">
            <img src={jj} style={{height:'400px',width:'100%'}} className='img' alt="AI"/>
        </div>
    </section>
    <div className="clear"></div>
</div>
</div>



<div className="bgded overlay startImg">
<section className="hoc container clear Downloadpad">
    <div className="sectiontitle txtLeft">
        <h6 className="heading font-x2">DOWNLOAD THE APP FOR MORE UPDATES AND INFORMATION</h6>
    </div><div className="btnFloat center"><a href="https://play.google.com/store/apps/details?id=com.bb.indianmajdoorunion" className="btn btn-primary btn-lg btn-block center" style={{"background-color": "#1a2016" }} target="new">Get Started</a></div>
</section>
</div>
<hr></hr>
<div className="wrapper row3">
<section id="support">
    <div className="space-60"></div>
    <div className="container">
        <div className="row wow fadeInUp">
            <div className="center ">
                <h3 className="text-uppercase main-heading txtUpper center">Our supporters</h3>
                <hr className=""/>
            </div>
        </div>
        <div className="space-30"></div>
        <div className="supporter">
            <div className="center displayBlock">
                <a href="https://www.n-coe.in/" target="new">
                    <img src={aa} alt="Support" style={{height:"75%"}} className="center ssupporterDivImg img"/>
                </a>
              </div>
        </div>
        <div className="space-80"></div>
    </div>
</section>
</div>


<div className="wrapper row3">
<section id="media">
    </section><div className='container'>
        <div className="row wow fadeInUp container pt-2 pb-2 bg-info">
            <div className="center">
                <h1 className="text-uppercase center main-heading txtUpper">WUS In Media</h1>
                <hr/>
            </div>
        </div>
        <div className="space-30"></div>
        <div className="row txtPad">
            <div id="homepage-slider" className="st-slider">
                <input type="radio" className="cs_anchor radio DisplayNone" name="slider" id="play1" checked=""/>
                <div className="images imgBorder">
                    <div className="images-inner">
                      
                        <div className="image-slide">
                            <div className="image ">
                                <div className="hidden-xs hidden-sm fadeInLeft one_quarter first fadeLeft">
                                    <img src={yy} alt="vaccination_Drive" className="center wiHi img" style={{width:"98%",height:"450px"}}/>
                                </div>
                                <div className="two_third">
                                    <h1>NYU Alum's start-up (WUS)-selected for Nasdaq Entrepreneurial Center's Milestone Makers – launched Covid19 –
                                        vaccination drive for Indian blue-collar workers</h1>
                                    <p>On May 24th 2021, Dr Amar Patnaik, Member Parliament (India) Rajya Sabha, launched the vaccination drive and
                                        grievance redressal platform for Blue Collar workers through WUS Ap (Oriya version). WUS – an IIT Kanpur start-up –
                                        is working for digital inclusion and digital skilling of blue-collar workers. Ms Nicola Corzine – Executive Director,
                                        Nasdaq Entrepreneurial Center, throughher recorded message, emphasized the importance of vaccination and how it will
                                        pave the path for a brighter future.
                                    </p>
                                    <div className="flex-container-publish">
                                        <div>
                                            <a href="https://www.wrde.com/story/43960412/nyu-alums-startup-wusselected-for-nasdaq-entrepreneurial-centers-milestone-makers-launched-covid19vaccination-drive-for-indian-bluecollar-workers" target="_blank" className="imgBlue" rel="noopener">
                                                <img src={m} alt="WRDE" className="mediaSize center" style={{width:"100%",height:"250px"}}/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="image-slide">
                            <div className="image ">
                                <div className="hidden-xs hidden-sm fadeInLeft one_quarter first fadeLeft">
                                    <img src={xx} alt="blog" style={{width:"100%",height:"350px"}} className="wiHi"/>
                                </div>
                                <div className="two_third">
                                    <h1>WUS Invited by Nasdaq Entrepreneurial Center</h1>
                                    <p>Nasdaq Entrepreneurial Center invited Mr. Prasoon Sharma- Founder &amp; CEO, WUS for its new program, Circles: an individualized group mentorship &amp; coaching experience for founders and entrepreneurs. Open to selected Founder &amp; Entrepreneur community, a Circle is a multi-week commitment to solving entrepreneurs most pressing problems alongside industry expert mentors. Through this highly curated experience, Founders &amp; Entrepreneurs will build peer connections, clear next steps and the capacity to be productive &amp; resourceful while facing immediate changing circumstances and adversity.
                                    </p>
                                    <div className="flex-container-publish">
                                        <div className="center ">
                                            <a href="https://www.businesswireindia.com/wus-invited-by-nasdaq-entrepreneurial-center-69286.html" target="_blank" rel="noopener">
                                                <img src={bc} alt="WUS in news" style={{height:'75px'}} className=" mediaSizenew img"/></a>
                                        </div>
                                        <div className="center ">
                                            <a href="https://www.mangaloremirror.com/wus-invited-by-nasdaq-entrepreneurial-center/" target="_blank" rel="noopener">
                                                <img src={ee} alt="WUS in news" style={{height:'75px',width:'200px'}} className="center mediaSizeWiHI img"/></a>
                                        </div>
                                        <div className="center ">
                                            <a href="https://www.thetruthone.com/business-wire-news/wus-invited-by-nasdaq-entrepreneurial-center/" target="_blank" rel="noopener">
                                                <img src="<?= base_url() ?>images/news/tone.png" alt="WUS in news" className="mHi img"/></a>
                                        </div>
                                        <div>
                                            <a href="https://www.organiser.org/Encyc/2020/9/1/The-Goonj-of-PMs-call-for-Aatma-Nirbhar-Bharat-reaches-Nasdaq.html" target="_blank" rel="noopener">
                                                <img src="<?= base_url() ?>images/news/organiser.png" alt="WUS in news" className="mWIHI img"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        <div className="image-slide">
                            <div className="image center">
                                <div className="hidden-xs hidden-sm fadeInLeft one_quarter first fadeLeft">
                                    <img src="<?= base_url() ?>images/news/news1.jpeg" alt="WUS in news"/>
                                </div>
                                <div className="two_third">
                                    <h1>How NYU Wagner alum is empowering Indian blue-collar workers</h1>
                                    <p>Since 1998, Prasoon has thoroughly observed the pain and suffering of workers. The pandemic was an awakening call for Prasoon Sharma. Through his start-up – Worker Union support (WUS) - a worker-union digital community, Prasoon is solving worker's (mainly blue/grey collar) professional problems (grievance redressal, knowing government schemes and their rights) and personal problem (taking loans, family insurance etc.).</p>
                                    <b>Read More :-</b>
                                    <div className="flex-container-publish">
                                        <div>
                                            <a href="https://siliconvalleylivenews.com/how-nyu-wagner-alum-is-empowering-indian-blue-collar-workers/" target="_blank" rel="noopener" className="imgBlue">
                                            </a>
                                            <p className="site-title"><a href="https://siliconvalleylivenews.com/how-nyu-wagner-alum-is-empowering-indian-blue-collar-workers/" target="_blank" rel="noopener" className="imgBlue"></a>
                                                <a href="https://siliconvalleylivenews.com/" alt="WUS in news" rel="home">Siliconvalley Livenews</a>
                                            </p>

                                        </div>
                                        <div className='center'>
                                            <a href="https://www.wrde.com/story/43382355/how-nyu-wagner-alum-is-empowering-indian-blue-collar-workers" target="_blank" rel="noopener" className="imgBlue">
                                                <img src={n} alt="WUS in WRDE " style={{height:'200px'}}className="center mHi center img"/></a>
                                        </div>
                                        <div className='center'>
                                            <a href="https://www.wicz.com/story/43382355/how-nyu-wagner-alum-is-empowering-indian-blue-collar-workers" target="_blank" rel="noopener" className="imgBlue">
                                                <img src={p} alt="WUS in fox40 " style={{height:'200px'}} className="mediaSize center img"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      
                        <div className="carousel slide">
                            <div className="image">
                                <div className="center ">
                                    <img src={o} alt="WUS logo"style={{width:'250px'}} className="wiHi center  img"/>
                                </div>
                                <div className="two_third">
                                    <h1>IIT Kanpur startup WUS selected by Nasdaq Entrepreneurial Center</h1>
                                    <p>The Nasdaq Entrepreneurial Center has selected WUS – an IIT Kanpur startup- for the Milestone Makers cohorts 2021, focusing on supporting startup founders working on the UN's Sustainable Development Goals (SDG's)- Reducing inequalities. WUS was incorporated on PM Modi's call for "Aatma Nirbhar Bharat App challenge". WUS aims to improve the lives of 500 million workers in India and 3.3 billion workers globally by building a Unified-digital community for workers and unions. Considering the social impact WUS is creating, the Ministry of Electronics and Information Technology (MeiTy, GOI) under the prestigious TIDE 2.0 (Technology Incubation and Development of Entrepreneurs) program extended support for WUS.</p>
                                    <div className="flex-container-publish">
                                        <div>
                                            <a href="https://www.organiser.org/Encyc/2021/3/31/IIT-Kanpur-startup-WUS-selected-by-Nasdaq-Entrepreneurial-Center.html" target="_blank" rel="noopener" className="imgBlue">
                                                <img src={q} alt="organiser" className="mediaSize"/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="labels ">
                <i class='far fa-comments' style={{'font-size':'36px'}}></i>
                    <div className="fake-radio">
                        <label for="slide1" className="radio-btn"></label>
                        <label for="slide2" className="radio-btn"></label>
                        <label for="slide3" className="radio-btn"></label>
                        <label for="slide4" className="radio-btn"></label>
                    </div>
                </div>
            
        </div></div>
    </div>
    </div>
   <div><button onclick="window.location.href = 'https://ide.geeksforgeeks.org';">chat</button></div>
   <div className="container bg-light" style={{width:"100%"}}>
   <i class='far fa-comments' style={{'font-size':'36px'}}></i>
   <div className="container bg-info container">
       <div className="row g-5 container">
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
            <strong>Come visit us:</strong> Directions to <a href="https://goo.gl/maps/JPjjF8s3FMqzLiur6" target="new">Our NCR <br></br>&nbsp;&nbsp;&nbsp;Office</a></span></p>
               <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>Give us a call:<strong> +91 88004 08169</strong></p>
               <p className="mb-2"><i className="fa fa-envelope me-3"></i> wus@workerunionsupport.com</p>
               <div className="d-flex pt-2">
                   <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                   <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                   <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                   <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
               </div></div></div></div>
           
 </div>

</div>); 
}
export default Home;
