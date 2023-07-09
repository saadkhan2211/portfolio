import blue from '../assets/blue.jpg';

const Portfolio = () => {
    return(
        <div className="row justify-content-between align-items-center my-5" id='Portfolio'>
                <h6 className="my-4"><i className="bi bi-circle-fill" style={{color: "#3498db"}}></i>&nbsp; Portfolio</h6>
                <div className="col-md-4 mt-3">
                    <div className="card border-secondary border-2 rounded-3 bg-dark">
                        <div className="card-body">
                            <img className="img-fluid w-100 img-hover rounded-3" src={blue}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="card border-secondary border-2 rounded-3 bg-dark">
                        <div className="card-body">
                            <img className="img-fluid w-100 img-hover rounded-3" src={blue}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="card border-secondary border-2 rounded-3 bg-dark">
                        <div className="card-body">
                            <img className="img-fluid w-100 img-hover rounded-3" src={blue}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="card border-secondary border-2 rounded-3 bg-dark">
                        <div className="card-body">
                            <img className="img-fluid w-100 img-hover rounded-3" src={blue}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="card border-secondary border-2 rounded-3 bg-dark">
                        <div className="card-body">
                            <img className="img-fluid w-100 img-hover rounded-3" src={blue}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="card border-secondary border-2 rounded-3 bg-dark text-white">
                        <div className="card-body">
                            <img className="img-fluid w-100 img-hover rounded-3" src={blue}/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Portfolio;