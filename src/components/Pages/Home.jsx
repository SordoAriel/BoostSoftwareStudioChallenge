import cofee from '../../assets/cofeeGif.webp'
import logo from '../../assets/logo.png'

export function Home () {
    return <div className='container-fluid d-flex flex-column justify-content-center p-2'>
                <div className='d-flex flex-column flex-md-row justify-content-around p-2'>
                    <img className='cofee'
                            src={cofee}
                            alt='Taza de café humeante'/>
                    <div className='d-flex flex-column justify-content-center align-items-center p-3'>
                        <h1>¡Bienvenida/o!</h1>
                        <img className='w-50' src={logo} alt='logo'/>
                        <h2>Sabores que encandilan</h2>
                    </div>
                </div>
                <div className='p-4'>
                <h2>¿Quienes somos?</h2>
                    <p>Fundada en 1998 por un grupo de fanáticos del café, Coffe Land en sus principios contaba con una fábrica en un garage. Nuestro amor por lo que hacemos nos llevó a crecer, primero como fábrica, y posteriormente, a poner nuestra cafetería donde compartimos con todo el público nuestras creaciones tal como a nosotros nos gustan.</p> 
                    <h2>¿Qué hacemos?</h2>
                    <li>Creamos y comercializamos productos de alta calidad, con la mejor materia prima importada directo de la tierra del café.</li>
                    <li>Cumplimos con todas las normas y convenciones nacionales e internacionales para el procesamiento, envasado y preservación de nuestros productos</li>
                    <li>Nos mantenemos a la vanguardia, buscando nuevos sabores para deleitar a nuestros clientes</li>    
                </div>
        
        
    </div>
}
