
export function InputEdu({ data, onChange, onClick, removeEdu }) {
    const { id, sch, location, deg, startDate, endDate, isCollapsed } = data;

    return (
        <div className="forms-container">

            {isCollapsed ? (
                <button
                    key={id}
                    className="collapsed-bar"
                    onClick={() => onClick(id)}
                >
                    <span className="collapsed-title">{sch || "(No School)"}</span>
                </button>
            ) : (
                <div className="form-card">

                    <div className="input-group">
                        <label htmlFor="sch">School: </label>
                        <input
                            type="text"
                            id="sch"
                            value={sch}
                            onChange={(e) => onChange("sch", e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="location">Location: </label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => onChange("location", e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="deg">Degree: </label>
                        <input
                            type="text"
                            id="deg"
                            value={deg}
                            onChange={(e) => onChange("deg", e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="startDate">Start Date: </label>
                        <input
                            type="text"
                            id="startDate"
                            value={startDate}
                            onChange={(e) => onChange("startDate", e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="endDate">End Date: </label>
                        <input
                            type="text"
                            id="endDate"
                            value={endDate}
                            onChange={(e) => onChange("endDate", e.target.value)}
                        />
                    </div>
                    <div className="form-buttons">
                        <button className="btn-delete" onClick={() => removeEdu(id)}>Delete</button>
                        <button className="btn-cancel" onClick={() => onClick(id)}>Cancel</button>
                        <button className="btn-save" onClick={() => onClick(id)}>Save</button>
                    </div>
                </div>
            )
            }
        </div >
    )


}