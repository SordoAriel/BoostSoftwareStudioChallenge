import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import './navbar.css'

function NavBar() {
    return (
        <div className='border-bottom border-bottom-white sticky-top '>
            <nav className="navbar navbar-expand-md navbar-dark px-2">
                <div className="container-fluid">
                    <Link to='/' className='navbar-brand'><img className='logo' src={logo} alt="Logo"/></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggleExternalContent" data-bs-theme="dark">
                        <div className='navbar-nav ms-auto fs-5'>
                            <Link to='/' className='nav-link'>Inicio</Link>
                            <Link to='/products' className='nav-link'>Catálogo de productos</Link>
                            <Link to='/contact' className='nav-link'>Contacto</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;