import Calculator from '../assets/Images/Calculator.png';
import OsmErp from '../assets/Images/OSM-ERP.png';
import ToDo from '../assets/Images/ToDo.png';
import RealExtate from '../assets/Images/RealEstate.png';
import WeatherApp from '../assets/Images/WeatherApp.png';
import ECommerce from '../assets/Images/ECommerce.png';

const Portfolio = () => {
    return(
        <div className="row justify-content-between align-items-center my-5" id='Portfolio'>
                <h6 className="my-4"><i className="bi bi-circle-fill" style={{color: "#3498db"}}></i>&nbsp; Portfolio</h6>
                <div className="col-md-4 mt-3">
                    <div className="card border-secondary border-2 rounded-3 bg-dark">
                        <div className="card-body">
                            <img className="img-fluid w-100 img-hover rounded-3" src={RealExtate}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="card border-secondary border-2 rounded-3 bg-dark">
                        <div className="card-body">
                            <img className="img-fluid w-100 img-hover rounded-3" src={OsmErp}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="card border-secondary border-2 rounded-3 bg-dark">
                        <div className="card-body">
                            <img className="img-fluid w-100 img-hover rounded-3" src={ToDo}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="card border-secondary border-2 rounded-3 bg-dark">
                        <div className="card-body">
                            <img className="img-fluid w-100 img-hover rounded-3" src={Calculator}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="card border-secondary border-2 rounded-3 bg-dark">
                        <div className="card-body">
                            <img className="img-fluid w-100 img-hover rounded-3" src={WeatherApp}/>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mt-3">
                    <div className="card border-secondary border-2 rounded-3 bg-dark text-white">
                        <div className="card-body">
                            <img className="img-fluid w-100 img-hover rounded-3" src={ECommerce}/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default Portfolio;