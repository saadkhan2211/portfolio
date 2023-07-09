import blue from '../assets/blue.jpg';

const Skills = () => {
    return(
        <div className="row justify-content-center align-items-center my-5"  id='Skills'>
            <div className="col-md-6">
                <div data-aos="fade-right">
                    <h6 className="mt-2 mb-4"><i className="bi bi-circle-fill" style={{color: "#3498db"}}></i>&nbsp; Skills</h6>
                    <label>HTML/CSS</label>
                    <div className="progress my-3 bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-blue" style={{width: "95%"}}>95%</div>
                    </div>
                    <label>C#</label>
                    <div className="progress my-3 bg-dark" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-blue" style={{width: "80%"}}>80%</div>
                    </div>
                    <label>ASP .Net Core</label>
                    <div className="progress my-3 bg-dark" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-blue" style={{width: "85%"}}>85%</div>
                    </div>
                    <label>UX/UI</label>
                    <div className="progress my-3 bg-dark" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar bg-blue" style={{width: "90%"}}>90%</div>
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <div data-aos="fade-left">
                    <h6 className="my-4"><i className="bi bi-circle-fill" style={{color: "#3498db"}}></i>&nbsp; TESTIMONIALS</h6>
                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="card border-secondary border-2 bg-dark text-white my-2">
                                    <div className="card-body">
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-12 w-25">
                                                <img className="card-img rounded-circle p-0 m-0 img-fluid round-img" src={blue} alt="picture"/>
                                            </div>
                                            <div className="col-12">
                                                <h4 className="card-title text-center">Client</h4>
                                                <p className="card-text text-secondary text-center">Upwork Client</p>
                                            </div>
                                        </div>
                                        <p className="card-text">I have provided Web Application of Large Enterprises and School Management System, E-Commerce Stores</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card border-secondary border-2 bg-dark text-white my-2">
                                    <div className="card-body">
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-12 w-25">
                                                <img className="card-img rounded-circle p-0 m-0 img-fluid round-img" src={blue} alt="picture"/>
                                            </div>
                                            <div className="col-12">
                                                <h4 className="card-title text-center">Client</h4>
                                                <p className="card-text text-secondary text-center">Upwork Client</p>
                                            </div>
                                        </div>
                                        <p className="card-text">I have provided Web Application of Large Enterprises and School Management System, E-Commerce Stores</p>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="card border-secondary border-2 bg-dark text-white my-2">
                                    <div className="card-body">
                                        <div className="row justify-content-center mb-3">
                                            <div className="col-12 w-25">
                                                <img className="card-img rounded-circle p-0 m-0 img-fluid round-img" src={blue} alt="picture"/>
                                            </div>
                                            <div className="col-12">
                                                <h4 className="card-title text-center">Client</h4>
                                                <p className="card-text text-secondary text-center">Upwork Client</p>
                                            </div>
                                        </div>
                                        <p className="card-text">I have provided Web Application of Large Enterprises and School Management System, E-Commerce Stores</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;