const About = () => {
    return(
        <div className="row justify-content-center align-items-center my-5" id='About'>
            <div className="col-md-6">
                <h6 className="my-3"><i className="bi bi-circle-fill" style={{color: "#3498db"}}></i>&nbsp; About Me</h6>
                <h5 className="mt-5">MY NAME IS <span className="fw-bold" style={{color: "#3498db"}}>SAAD SAIFULLAH</span></h5>
                <h3 className="fw-bold mt-3">I'M AVAILABLE FOR WEBAPP DEVELOPEMENT PROJECTS</h3>
                <p className="my-4">Full Stack Web Developer with a strong passion for scalable and user-friendly and responsive web applications. With a comprehensive understanding of both front-end and back-end development, I excel at designing and implementing scalable solutions that meet the unique needs of clients.</p>
            </div>
            <div className="col-md-6">
                <h6 className="my-4"><i className="bi bi-circle-fill" style={{color: "#3498db"}}></i>&nbsp; Experience</h6>
                <div className="container py-2 px-3 card border-secondary border-2 bg-dark hide-scroll" style={{height:"290px"}}>
                    <div className="card border-secondary border-2 bg-dark text-white my-2">
                        <div className="card-body">
                            <small className="card-text">2022-Present</small>
                            <h4 className="card-title" style={{color: "#3498db"}}>Freelancer</h4>
                            <h6 className="card-title" style={{color: "#3498db"}}>Sur-Solution</h6>
                            <p className="card-text">Provided an ERP (Enterprise Resource Planning) Web-App for managing over 1000+ Employees' Data, Roles & Authorization, Projects and Daily Progress, having Responsive and Userfriendly Interface, making Client's work more easy and efficient.</p>
                        </div>
                    </div>
                    <div className="card border-secondary border-2 bg-dark text-white my-2">
                        <div className="card-body">
                            <small className="card-text">2022-Present</small>
                            <h4 className="card-title" style={{color: "#3498db"}}>Freelancer</h4>
                            <h6 className="card-title" style={{color: "#3498db"}}>Sur-Solution</h6>
                            <p className="card-text">Provided an ERP (Enterprise Resource Planning) Web-App for managing over 1000+ Employees' Data, Roles & Authorization, Projects and Daily Progress, having Responsive and Userfriendly Interface, making Client's work more easy and efficient.</p>
                        </div>
                    </div>
                    <div className="card border-secondary border-2 bg-dark text-white my-2">
                        <div className="card-body">
                            <small className="card-text">2022-Present</small>
                            <h4 className="card-title" style={{color: "#3498db"}}>Freelancer</h4>
                            <h6 className="card-title" style={{color: "#3498db"}}>Sur-Solution</h6>
                            <p className="card-text">Provided an ERP (Enterprise Resource Planning) Web-App for managing over 1000+ Employees' Data, Roles & Authorization, Projects and Daily Progress, having Responsive and Userfriendly Interface, making Client's work more easy and efficient.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;