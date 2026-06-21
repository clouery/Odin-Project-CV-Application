export function InputPerson({ data, onChange }) {

    const { name, email, number, address } = data;

    return (
        <div className="form-card">
            <div className="input-group">
                <label htmlFor="pName">Name: </label>
                <input
                    type="text"
                    id="pName"
                    value={name}
                    onChange={(e) => onChange("name", e.target.value)}
                />
            </div>

            <div className="input-group">
                <label htmlFor="email">Email: </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => onChange("email", e.target.value)}
                />
            </div>

            <div className="input-group">
                <label htmlFor="number">Phone Number: </label>
                <input
                    type="text"
                    id="number"
                    value={number}
                    onChange={(e) => onChange("number", e.target.value)}
                />
            </div>

            <div className="input-group">
                <label htmlFor="address">Address: </label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => onChange("address", e.target.value)}
                />
            </div>

        </div>
    )
}