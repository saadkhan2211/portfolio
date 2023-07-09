const About = () => {
    return(
        <div className="row justify-content-center align-items-center my-5" id='About'>
            <div className="col-md-6">
                <h6 className="my-3"><i className="bi bi-circle-fill" style={{color: "#3498db"}}></i>&nbsp; About Me</h6>
                <h5 className="mt-5">MY NAME IS <span className="fw-bold" style={{color: "#3498db"}}>SAAD SAIFULLAH</span></h5>
                <h3 className="fw-bold mt-3">I'M AVAILABLE FOR WEBAPP DEVELOPEMENT PROJECTS</h3>
                <p className="my-4">Born in 2003, living in Pakistan. I provide Interactive and Responsive Websites, designs & Web Applications, as well as front-end implementation. I will continue to pursue a wide range of expressions and better code by pursuing our “likes”.</p>
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-6 col-sm-6">
                        <p><span className="fs-1">5k </span>Projects Completed.</p>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <p><span className="fs-1">3k </span>Satisfied Client.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <h6 className="my-4"><i className="bi bi-circle-fill" style={{color: "#3498db"}}></i>&nbsp; Experience</h6>
                <div className="container py-2 px-3 card border-secondary border-2 bg-dark hide-scroll" style={{height:"335px"}}>
                    <div className="card border-secondary border-2 bg-dark text-white my-2">
                        <div className="card-body">
                            <small className="card-text">2021-Present</small>
                            <h4 className="card-title" style={{color: "#3498db"}}>Freelancer</h4>
                            <p className="card-text">I have provided Web Application of Large Enterprises and School Management System, E-Commerce Stores</p>
                        </div>
                    </div>
                    <div className="card border-secondary border-2 bg-dark text-white my-2">
                        <div className="card-body">
                            <small className="card-text">2021-Present</small>
                            <h4 className="card-title" style={{color: "#3498db"}}>Freelancer</h4>
                            <p className="card-text">I have provided Web Application of Large Enterprises and School Management System, E-Commerce Stores</p>
                        </div>
                    </div>
                    <div className="card border-secondary border-2 bg-dark text-white my-2">
                        <div className="card-body">
                            <small className="card-text">2021-Present</small>
                            <h4 className="card-title" style={{color: "#3498db"}}>Freelancer</h4>
                            <p className="card-text">I have provided Web Application of Large Enterprises and School Management System, E-Commerce Stores</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;