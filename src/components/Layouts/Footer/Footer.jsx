import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons'

function Footer () {
    return (
        <div className='footer d-flex flex-column flex-md-row justify-content-md-between align-items-md-center border-top border-top-white p-4'>
            <span className='col d-flex justify-content-center align-items-center fs-6 p-2'>©Cofee Land - 2024 - Todos los derechos reservados</span>
            <div className='col d-flex justify-content-evenly align-items-center p-2'>
                <a href='https://www.instagram.com/' target='_blank'><FontAwesomeIcon icon={faSquareInstagram} className='fs-3 text-white bg-transparent'/></a>
                <a href='https://www.facebook.com/' target='_blank'><FontAwesomeIcon icon={faSquareFacebook} className='fs-3 text-white bg-transparent'/></a>
            </div>
            <a href='https://buenosaires.gob.ar/defensaconsumidor/direccion-general' className='col nav-link d-flex align-items-center justify-content-center p-2' target='_blank'>Defensa al consumidor</a>
        </div>
    )
}

export default Footer
