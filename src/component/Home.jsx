import blue from '../assets/blue.jpg';

const Home = () => {
    return(
        <div className="row justify-content-center align-items-center mb-3 mt-5 me-auto" id='Home'>
            <div className="col-md-5">
                <h3>Hi, I'm<h3 className='fs-1 handFont'>Saad Saifullah <span className="wave">👋</span></h3></h3>
                <h4 className="mt-4">I'm a Full Stack Developer</h4>
                <p>Passionate full stack developer for crafting robust web applications. Dedicated to delivering scalable solutions with clean code and seamless user experiences.</p>
            </div>
            <div className="col-md-7 my-5 img-display">
                <div className="ms-5 row justify-content-center">
                    <div className="col-md-6">
                        <img className="img-fluid img-width" style={{borderRadius: "0px 150px 150px 150px"}} src={blue} alt="blue" />
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid img-width" style={{borderRadius: "150px 150px 0px 150px"}} src={blue} alt="blue" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;