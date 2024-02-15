export default function ContactInfo({icon, title, children}) {
  return (
    <div className="contact-info">
      <img src={icon} className="contact-icon" />
      <div>
        <span>{title}</span>
        <p>{children}</p>
      </div>
    </div>
  );
}
