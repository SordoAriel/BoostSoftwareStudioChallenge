import { Form } from '../Form/Form.jsx'

export function Contact () {
    return (
        <div className='p-2'>
            <h1>Contacto</h1>
            <div>
                <div className='container-fluid d-flex flex-column flex-md-row'>
                    <div className='p-2 col-12 col-md-6'>
                        <h2>Vení a conocernos</h2>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11048.46462834263!2d-58.42841980311184!3d-34.58574366727562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb588f4af5d17%3A0x560fe6ff3f099abf!2sPlaza%20Serrano!5e0!3m2!1ses-419!2sar!4v1722452277476!5m2!1ses-419!2sar" 
                        className="w-100"            
                        height="500px" 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                        </iframe>       
                    </div>
                    <div className='w-100 p-2'>
                        <h2>Dejanos tu mensaje</h2>
                        <Form />    
                    </div>
                </div>  
            </div>            
        </div>
    )
}
