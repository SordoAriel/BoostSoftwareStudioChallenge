import { Input } from './Input'
import { Button } from '../button/Button'

export function Form () {
    return (
        <form>
            <Input labelName='Nombre:' type='text' placeholder='Juan Pérez' />
            <Input labelName='Email:' type='email' placeholder='juanperez@mail.com' />
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Comentario:</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" cols="40" rows="10" required></textarea>
            </div>
            <Button type='submit' className='m-2 p-2 text-white bg-success' description='Enviar'/>
            <Button type='reset' className='m-2 p-2 text-white bg-danger' description='Limpiar' />
        </form>
    )
}
