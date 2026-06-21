export function Person({ name, email, number, address}) {
    return (
        <div className="person">
            <h1 className="name">{name}</h1>
            <div className="details">
                <div className="email">{email}</div>
                <div className="number">{number}</div>
                <div className="address">{address}</div>
            </div>
        </div>
    )
}

