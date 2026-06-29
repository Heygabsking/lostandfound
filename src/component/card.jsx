import "./card.css";
export default function Card({ title, description }) {
  return (
    <div className="serviceCard">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}