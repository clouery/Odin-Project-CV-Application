export function Education({
  sch,
  deg,
  startDate,
  endDate,
  location
}) {
  let date = startDate + " - " + endDate;

  return (
    <div className="education">
      <div className="sch">{sch}</div>
      <div className="location">{location}</div>
      <div className="deg">{deg}</div>
      <div className="date">{date}</div>
    </div>
  );
}