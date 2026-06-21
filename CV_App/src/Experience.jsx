export function Experience({
    cname,
    pos,
    startDate, 
    endDate, 
    location,
    desc
})  {
    let date = startDate + " - " + endDate;
    return (
        <div className="exp">
            <div className="cname">{cname}</div>
            <div className="pos">{pos}</div>
            <div className="date">{date}</div>
            <div className="location">{location}</div>
            <div className="desc">{desc}</div>
        </div>
    )
}