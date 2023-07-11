import { Link } from "react-scroll";

const NavBar = () => {

    const title = "<Saad Saifullah />"

    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-lg py-3" style={{backgroundColor: "#212121"}}>
                    <div className="container-fluid">
                        <a className="navbar-brand ms-3 fs-3 handFont" href="#">{title}</a>
                        <button className="navbar-toggler" style={{borderColor: "#3498db"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" style={{color: "#ECF0F1"}}></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-4 mb-2 mb-lg-0 text-center">
                                <li className="nav-item mx-2">
                                    <Link to="Home" className="nav-link navFont" smooth={true} offset={-100} duration={500}>Home</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link to="About" className="nav-link navFont" smooth={true} offset={-100} duration={500}>About</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link to="Skills" className="nav-link navFont" smooth={true} offset={-100} duration={500}>Skills</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link to="Portfolio" className="nav-link navFont" smooth={true} offset={-100} duration={500}>Portfolio</Link>
                                </li>
                                <li className="nav-item mx-2">
                                    <Link to="Contact" className="nav-link navFont" smooth={true} offset={0} duration={500}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default NavBar;