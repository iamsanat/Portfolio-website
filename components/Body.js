
export default function Body() {
    
  return (
    <>
      <header class="header">
        <div class="container">
            <ul class="social-icons pt-3">
                <li class="social-item"><a class="social-link text-light" target="_blank" href="https://www.linkedin.com/in/sanat-pawar-01120721b/"><i class="ti-linkedin" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" target="_blank" href="mailto:sanatpawar23@gmail.com"><i class="ti-google" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" target="_blank" href="https://www.instagram.com/sanat_pawar_?igsh=MXZtMTJub2hlN2xscQ=="><i class="ti-instagram" aria-hidden="true"></i></a></li>
                <li class="social-item"><a class="social-link text-light" target="_blank" href="https://github.com/iamsanat"><i class="ti-github" aria-hidden="true"></i></a></li>
            </ul>  
            <div class="header-content">
                <h4 class="header-subtitle" >Hello, I am</h4>
                <h1 class="header-title">Sanat</h1>
                <h6 class="header-mono" >Full Stack Developer</h6>
                <a class="btn btn-primary btn-rounded" href="/resume.pdf" target="_blank" rel="noopener noreferrer" download><i class="ti-printer pr-2" ></i>Print Resume</a>
            </div>
        </div>
    </header>
    <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white" data-spy="affix" data-offset-top="510">
        <div class="container">
            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse mt-sm-20 navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a href="#home" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#resume" class="nav-link">Resume</a>
                    </li>
                </ul>
                <ul class="navbar-nav brand">
                    <li class="brand-txt">
                        <h5 class="brand-title">Sanat</h5>
                        <div class="brand-subtitle">Web Designer | Developer</div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container-fluid">
        <div id="about" class="row about-section">
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">Who am I ?</h3>
                <span class="line mb-5"></span>
                <h5 class="mb-3">A Web Designer / Developer Located In India</h5>
                <p class="mt-20">Excited to make your product a better version of itself</p>
                <a class="btn btn-outline-danger" href="/resume.pdf" download><i class="icon-down-circled2 "></i>Download My CV</a>
            </div>

            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">Personal Info</h3>
                <span class="line mb-5"></span>
                <ul class="mt40 info list-unstyled">
                    <li><span>Birthdate</span> : 9<sup class="small-th">th</sup> May 2003</li>
                    <li><span>Email</span> : sanatpawar23@gmail.com</li>
                    <li><span>Phone</span> : +91 9372697177</li>
                    <li><span>Address</span> :  A/305 Shree ganga - Navi Mumbai</li>
                </ul>
                <ul class="social-icons pt-3">
                    <li class="social-item"><a class="social-link text-light" target="_blank" href="https://www.linkedin.com/in/sanat-pawar-01120721b/"><i class="ti-linkedin" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link text-light" target="_blank" href="mailto:sanatpawar23@gmail.com"><i class="ti-google" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link text-light" target="_blank" href="https://www.instagram.com/sanat_pawar_?igsh=MXZtMTJub2hlN2xscQ=="><i class="ti-instagram" aria-hidden="true"></i></a></li>
                    <li class="social-item"><a class="social-link text-light" target="_blank" href="https://github.com/iamsanat"><i class="ti-github" aria-hidden="true"></i></a></li>                </ul>  
            </div>
            <div class="col-lg-4 about-card">
                <h3 class="font-weight-light">My Expertise</h3>
                <span class="line mb-5"></span>
                <div class="row">
                    <div class="col-1 text-danger pt-1"><i class="ti-widget icon-lg"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>UX Design</h6>
                        <p class="subtitle">Attractive and Responsive Sites</p>
                        <hr/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1 text-danger pt-1"><i class="ti-paint-bucket icon-lg"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>Web Development</h6>
                        <p class="subtitle">Full Stack Websites</p>
                        <hr/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-1 text-danger pt-1"><i class="ti-stats-up icon-lg"></i></div>
                    <div class="col-10 ml-auto mr-3">
                        <h6>DevOps</h6>
                        <p class="subtitle">Strong and Scalabel websites</p>
                        <hr/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <section class="section" id="resume">
        <div class="container">
            <h2 class="mb-5"><span class="text-danger">My</span> Resume</h2>
            <div class="row">
                <div class="col-md-6 col-lg-4">
                    <div class="card scrollable-card">
                        <div class="card-header">
                            <div class="mt-2">
                                <h4>Projects</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div className="card-body" style={{ maxHeight: '800px', overflowY: 'auto' }}>
                            <h6 class="title text-danger">Roommate Finder (Kleos National Level Hackathon)</h6>
                            <p>Django,Python,JavaScript</p>
                            <p class="subtitle">It is a Django-based project that serves as a platform for helping people find compatible roommates. It was a group project developed by 4 teammates during a hackathon within 24 hours.</p>
                            <hr/>
                            <h6 class="title text-danger">Blogging Website</h6>
                            <p>Django,Python,Bootstrap</p>
                            <p class="subtitle">A complete full-stack website made using Django and Bootstrap, including user authentication, CRUD operations for blog posts</p>
                            <hr/>
                            <h6 class="title text-danger">FOND Food Pre-ordering app (HackMIT Workathon)</h6>
                            <p>Html,CSS,javasc</p>
                            <p class="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4">
                    <div class="card scrollable-card">
                       <div class="card-header">
                            <div class="mt-2">
                                <h4>Education</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body">
                            <h6 class="title text-danger">2024 - Present</h6>
                            <p>B.E Computer Engineering</p>
                            <p class="subtitle">B.Tech Computer Science Engineering(Cyber Security and Forensics) | MIT-WPU, Pune</p>
                            <hr/>
                            <h6 class="title text-danger">2019 - 2021</h6>
                            <p>XII Jr College</p>
                            <p class="subtitle">PACE Jr. Science College, Nerul</p>
                            <hr/>
                            <h6 class="title text-danger">-2018</h6>
                            <p>X High School Degree</p>
                            <p class="subtitle">Indian Certificate of Secondary Education (ICSE) | Ryan International School, Nerul.</p>
     
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card">
                       <div class="card-header">
                            <div class="pull-left">
                                <h4 class="mt-2">Skills</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body pb-2">
                           <h6>JavaScript</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>C++</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Python</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>SQL</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>MERN</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Django</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                       <div class="card-header">
                            <div class="pull-left">
                                <h4 class="mt-2">Languages</h4>
                                <span class="line"></span>  
                            </div>
                        </div>
                        <div class="card-body pb-2">
                           <h6>English</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Marathi</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                            <h6>Hindi</h6>
                            <div class="progress mb-3">
                                <div class="progress-bar bg-danger" role="progressbar"  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="section bg-dark text-center logos">
        <div class="container">
            <div class="row text-center">
                <div class="col-lg-2">
                    <div class="row ">
                        <div class="col-10 text-right text-light py-3">
                            <div class="m-auto"><img src="/atom.png" alt="" class="img-fluid w-100"/></div>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-6 col-lg-2">
                    <div class="row ">
                        <div class="col-10 text-right text-light py-3">
                            <div class="m-auto"><img src="/django.png" alt="" class="img-fluid w-100"/></div>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-6 col-lg-2">
                    <div class="row ">
                        <div class="col-10 text-right text-light py-3">
                            <div class="m-auto"><img src="/docker.png" alt="" class="img-fluid w-100"/></div>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-6 col-lg-2">
                    <div class="row ">
                        <div class="col-10 text-right text-light py-3">
                            <div class="m-auto"><img src="/mern.png" alt="" class="img-fluid w-100"/></div>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-6 col-lg-2">
                    <div class="row ">
                        <div class="col-10 text-right text-light py-3">
                            <div class="m-auto"><img src="/kuber.png" alt="" class="img-fluid w-100"/></div>
                        </div>
                        
                    </div>
                </div>
                <div class="col-md-6 col-lg-2">
                    <div class="row ">
                        <div class="col-10 text-right text-light py-3">
                            <div class="m-auto"><img src="/js.png" alt="" class="img-fluid w-100"/></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="section bg-dark contact" id="contact">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="contact-form-card">
                        <h4 class="contact-title">Send a message</h4>
                        <form data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            name="feedback"
                            method="POST"
                            action="/">
                        <div class="form-group">
                         <input type="hidden" name="form-name" value="feedback" />
                            <input class="form-control" name="name" id="name" type="text" maxLength="40" placeholder="Name *" />
                        </div>
                        <div class="form-group">
                            <input class="form-control" name="email" id="email" type="email" maxLength="40" placeholder="Email *"/>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" name="message" id="message" maxLength="1000" placeholder="Message *" rows="7" required></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="form-control btn btn-primary">Send Message</button>
                        </div>
                        <div class="form-group">
                            <p class="text-center text-success" id="success-message"></p>
                        </div>
                    </form>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="contact-info-card">
                        <h4 class="contact-title">Get in touch</h4>
                        <div class="row mb-2">
                            <div class="col-1 pt-1 mr-1">
                                <i class="ti-mobile icon-md"></i>
                            </div>
                            <div class="col-10 ">
                                <h6 class="d-inline">Phone : <br/> <span class="text-muted">+91 9372697177</span></h6>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-1 pt-1 mr-1">
                                <i class="ti-map-alt icon-md"></i>
                            </div>
                            <div class="col-10">
                                <h6 class="d-inline">Address :<br/> <span class="text-muted">A/305 shree ganga chs kamothe Navi Mumbai</span></h6>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-1 pt-1 mr-1">
                                <i class="ti-envelope icon-md"></i>
                            </div>
                            <div class="col-10">
                                <h6 class="d-inline">Email :<br/> <span class="text-muted">sanatpawar23@gmail.com</span></h6>
                            </div>
                        </div>
                        <ul class="social-icons pt-4">

                            <li class="social-item"><a class="social-link text-light" target="_blank" href="https://www.linkedin.com/in/sanat-pawar-01120721b/"><i class="ti-linkedin" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-light" target="_blank" href="mailto:sanatpawar23@gmail.com"><i class="ti-google" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-light" target="_blank" href="https://www.instagram.com/sanat_pawar_?igsh=MXZtMTJub2hlN2xscQ=="><i class="ti-instagram" aria-hidden="true"></i></a></li>
                            <li class="social-item"><a class="social-link text-light" target="_blank" href="https://github.com/iamsanat"><i class="ti-github" aria-hidden="true"></i></a></li>                        </ul> 
                    </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}