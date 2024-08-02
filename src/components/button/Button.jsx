export function Button ({type, className, description}) {
    return (
        <button type={type} className={className}>
            {description}
        </button>
    )
}