const Contact = () => {
    return(
        <div className="row justify-content-center align-items-center" id='Contact'>
                <h6 className="my-3"><i className="bi bi-circle-fill" style={{color: "#3498db"}}></i>&nbsp; Contact Me</h6>
                <div className="col-md-4">
                    <div data-aos="fade-right">
                        <ul className="card border-0 bg-transparent text-white mt-3 w-75">
                            <li className="btn card-body my-4 border border-secondary border-2 rounded-3 li-hover">
                                <a className="nav-link"><i className="bi bi-whatsapp"></i>&nbsp; +923312619428</a>
                            </li>
                            <li className="btn card-body my-4 border border-secondary border-2 rounded-3 li-hover">
                                <a className="nav-link" href="https://github.com/saadkhan2211"><i className="bi bi-github"></i>&nbsp; GitHub</a>
                            </li>
                            <li className="btn card-body my-4 border border-secondary border-2 rounded-3 li-hover">
                                <a className="nav-link" href="https://www.linkedin.com/in/saad-saifullah-8a6754150/"><i className="bi bi-linkedin"></i>&nbsp; Linkedin</a>
                            </li>
                            <li className="btn card-body my-4 border border-secondary border-2 rounded-3 li-hover">
                                <a className="nav-link" href="https://www.instagram.com/saadsaifullah.khan/"><i className="bi bi-instagram"></i>&nbsp; Instagram</a>
                            </li>
                            <li className="btn card-body my-4 border border-secondary border-2 rounded-3 li-hover">
                                <a className="nav-link" href=""><i className="bi bi-file-text"></i>&nbsp; Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div data-aos="fade-left">
                        <div className="card border-secondary border-2 container bg-dark ">
                            <form className="form-control bg-transparent border-0 text-white">
                                <h2 className="card-title mt-4">Got Ideas? We've got the skills.<br/> Let's team up.</h2>
                                <p className="card-text">Tell us more about yourself and what you're got in mind.</p>
                                <br/>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label className="form-label">Name</label>
                                        <input className="form-control mb-3 bg-transparent text-white" placeholder="Name" type="text" name="name"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Email</label>
                                        <input className="form-control mb-3 bg-transparent text-white" placeholder="Email" type="email" name="email"/>
                                    </div>
                                </div>
                                <label className="form-label">Subject</label>
                                <input className="form-control mb-3 bg-transparent text-white" placeholder="Subject" type="text" name="subject"/>
                                <label className="form-label">Message</label>
                                <textarea className="form-control mb-3 bg-transparent text-white" placeholder="Message" name="message"></textarea>
                                <div className="row">
                                    <button className="btn text-white w-25 mb-2 ms-auto me-2 btn-hover" type="submit"><i className="bi bi-send"></i> Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Contact;