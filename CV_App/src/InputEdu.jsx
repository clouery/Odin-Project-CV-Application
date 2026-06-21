
export function InputEdu({data, onChange}) {
    const {sch, location, deg, startDate, endDate} = data;

    return (
        <div className="inputBox">
            <div className="inputTitle">Education</div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="sch">School: </label>
                <input 
                    type="text" 
                    id="sch" 
                    value={sch}
                    onChange={(e) => onChange("sch", e.target.value)}
                />

                <label htmlFor="location">Location: </label>
                <input 
                    type="text" 
                    id="location" 
                    value={location}
                    onChange={(e) => onChange("location", e.target.value)}
                />

                <label htmlFor="deg">Degree: </label>
                <input 
                    type="text" 
                    id="deg" 
                    value={deg}
                    onChange={(e) => onChange("deg", e.target.value)}
                />

                <label htmlFor="startDate">Start Date: </label>
                <input 
                    type="text" 
                    id="startDate" 
                    value={startDate}
                    onChange={(e) => onChange("startDate", e.target.value)}
                />

                <label htmlFor="endDate">End Date: </label>
                <input 
                    type="text" 
                    id="endDate" 
                    value={endDate}
                    onChange={(e) => onChange("endDate", e.target.value)}
                />

                <button type="submit">Submit</button>


            </form>
        </div>
    )


}