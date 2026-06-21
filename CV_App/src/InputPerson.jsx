
// InputP is an object
export function InputPerson({data}) {

    const {name, email, number, address} = data;

    return (
        <div className="inputPerson">
            <form>
                <label htmlFor="pName">Name: </label>
                <input type="text" id="pName" name="pName"/>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email"/>
                <label htmlFor="number">Phone Number: </label>
                <input type="number" id="number" name="number"/>
                <label htmlFor="address">Address: </label>
                <input type="text" id="address" name="address"/>

                <button type="submit">Submit</button>


            </form>
        </div>
    )
}