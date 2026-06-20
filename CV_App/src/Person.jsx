export function Person({ name="Hor Xiang Zhi", email="horxiangzhi@gmail.com", number="1234 5678", address="Singapore"}) {
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

