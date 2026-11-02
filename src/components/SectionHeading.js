export default function SectionHeading({
  number,
  eyebrow,
  title,
  description,
  light = false
}) {
  const headingClassName = light
    ? "section-heading heading-light"
    : "section-heading";

  return (
    <div className={headingClassName}>
      <div className="section-kicker">
        <span>{number}</span>
        <i />
        {eyebrow}
      </div>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}
