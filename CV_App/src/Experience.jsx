export function Experience({
    name="XZ inc.", 
    pos="CEO", 
    start="2025", 
    end="present", 
    location="Singapore",
    desc="This is my job"
})  {
    let date = start + " - " + end;
    return (
        <div className="exp">
            <div className="name">{name}</div>
            <div className="pos">{pos}</div>
            <div className="date">{date}</div>
            <div className="location">{location}</div>
            <div className="desc">{desc}</div>
        </div>
    )
}