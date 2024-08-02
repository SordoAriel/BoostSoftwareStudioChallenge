export function Input ({labelName, type, placeholder}) {
    return (
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">{labelName}</label>
            <input type={type} className="form-control" id="exampleFormControlInput1" placeholder={placeholder} required/>
        </div>
    )
}
