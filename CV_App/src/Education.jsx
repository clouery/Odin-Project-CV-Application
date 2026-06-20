export function Education({
  sch = "SMU",
  deg = "Computer Science",
  start = "2025",
  end = "2029",
  country = "Singapore"
}) {
  let date = `${start} - ${end}`;

  return (
    <div className="education">
      <div className="sch">{sch}</div>
      <div className="country">{country}</div>
      <div className="deg">{deg}</div>
      <div className="date">{date}</div>
    </div>
  );
}