export function InputExp({ data,  onChange, onClick, removeExp}) {

    const { id, cname, pos, startDate, endDate, location, desc, isCollapsed } = data
    return (
        <div className="forms-container">
            {isCollapsed ? (
                <button
                    key={id}
                    className="collapsed-bar"
                    onClick={() => onClick(id)}
                >
                    <span className="collapsed-title">{pos || "no pos"}, {cname === "" ? "Company" : cname}</span>
                </button>
            ) : (
                <div className="form-card">

                    <div className="input-group">
                        <label htmlFor="cname">Event / Company: </label>
                        <input
                            type="text"
                            id="cname"
                            value={cname}
                            onChange={(e) => onChange( "cname", e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="pos">Position: </label>
                        <input
                            type="text"
                            id="pos"
                            value={pos}
                            onChange={(e) => onChange( "pos", e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="startDate">Start Date: </label>
                        <input
                            type="text"
                            id="startDate"
                            value={startDate}
                            onChange={(e) => onChange( "startDate", e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="endDate">End Date: </label>
                        <input
                            type="text"
                            id="endDate"
                            value={endDate}
                            onChange={(e) => onChange( "endDate", e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="location">Location: </label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => onChange( "location", e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label htmlFor="desc">Description: </label>
                        <textarea
                            value={desc}
                            onChange={(e) => onChange( "desc", e.target.value)}
                            placeholder="Enter description"
                            rows={3}
                        />
                    </div>
                    <div className="form-buttons">
                        <button className="btn-delete" onClick={() => removeExp(id)}>Delete</button>
                        <button className="btn-cancel" onClick={() => onClick(id)}>Cancel</button>
                        <button className="btn-save" onClick={() => onClick(id)}>Save</button>
                    </div>
                </div>
            )}
        </div>
    )
}
