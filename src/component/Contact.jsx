import { Link } from "react-router-dom";

const Contact = () => {
    return(
        <div>
            <div data-aos="fade-bottom">
                <h6 className="mt-5 mb-3"><i className="bi bi-circle-fill" style={{color: "#3498db"}}></i>&nbsp; Contact Me</h6>
                <div className="card border-secondary border-2 mb-3 container bg-transparent" id='Contact'>
                    <div className="row justifuy-content-center align-items-center text-white my-3">
                        <div className="col-md-2 btn card-body mx-3 px-1 py-2 my-4 border border-secondary border-2 rounded-3 li-hover ">
                            <a className="nav-link" target="_blank"><i className="bi bi-whatsapp"></i>&nbsp; +923151030280</a>
                        </div>
                        <div className="col-md-2 btn card-body mx-3 px-1 py-2 my-4 border border-secondary border-2 rounded-3 li-hover">
                            <a className="nav-link" target="_blank" href="https://github.com/saadkhan2211"><i className="bi bi-github"></i>&nbsp; GitHub</a>
                        </div>
                        <div className="col-md-2 btn card-body mx-3 px-1 py-2 my-4 border border-secondary border-2 rounded-3 li-hover">
                            <a className="nav-link" target="_blank" href="https://www.linkedin.com/in/saad-saifullah"><i className="bi bi-linkedin"></i>&nbsp; Linkedin</a>
                        </div>
                        <div className="col-md-2 btn card-body mx-3 px-1 py-2 my-4 border border-secondary border-2 rounded-3 li-hover">
                            <a className="nav-link" target="_blank" href="https://www.instagram.com/saadsaifullah.khan/"><i className="bi bi-instagram"></i>&nbsp; Instagram</a>
                        </div>
                        <div className="col-md-2 btn card-body mx-3 px-1 py-2 my-4 border border-secondary border-2 rounded-3 li-hover">
                            <a className="nav-link" target="_blank" href="https://app.luminpdf.com/viewer/64afd90421ef979618b44e4c"><i className="bi bi-file-text"></i>&nbsp; Resume</a>
                        </div>
                    </div>
                    <h2 className="text-center text-secondary">OR</h2>
                    <form className="form-control bg-transparent border-0 text-white">
                        <h2 className="card-title mt-3">Got Ideas? Let's team up.</h2>
                        <p className="card-text">Tell more about yourself and what you've got in mind.</p>
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
    );
}

export default Contact;