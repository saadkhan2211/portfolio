import blue from '../assets/blue.jpg';

const Home = () => {
    return(
        <div className="row justify-content-center align-items-center mb-5" id='Home'>
            <div className="col-md-5">
                <h3>Hi, I'm<h1 className='handFont'>Saad Saifullah <span className="wave">👋</span></h1></h3>
                <h4 className="mt-4">I'm a Developer</h4>
                <p>We work with professionals and leaders who want to build careers that fulfil them intellectually, financially</p>
            </div>
            <div className="col-md-7 my-5">
                <div className="ms-5 row justify-content-center">
                    <div className="col-md-6">
                        <img className="img-fluid img-display" style={{borderRadius: "0px 150px 150px 150px"}} src={blue} alt="blue" />
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid img-display" style={{borderRadius: "150px 150px 0px 150px"}} src={blue} alt="blue" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;