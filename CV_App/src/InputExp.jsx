export function InputExp({ data, onChange }) {

    const { cname, pos, startDate, endDate, location, desc } = data
    return (
        <div className="inputBox">
            <div className="inputTitle">Experience</div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="cname">Event / Company: </label>
                <input
                    type="text"
                    id="cname"
                    value={cname}
                    onChange={(e) => onChange("cname", e.target.value)}
                />

                <label htmlFor="pos">Position: </label>
                <input
                    type="text"
                    id="pos"
                    value={pos}
                    onChange={(e) => onChange("pos", e.target.value)}
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
                    id=""
                    value={endDate}
                    onChange={(e) => onChange("endDate", e.target.value)}
                />

                <label htmlFor="location">Location: </label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => onChange("location", e.target.value)}
                />

                <label htmlFor="desc">Desciption: </label>
                <input
                    type="text"
                    id=""
                    value={desc}
                    onChange={(e) => onChange("desc", e.target.value)}
                />

                <button type="submit">Submit</button>


            </form>
        </div>
    )
}
