import "./services.css";
import Card from "./card";

export default function Services(){
  return(
    <div className="services">

      <h2 className="servicesTitle">Our Services</h2>

      <div className="cardServices">

       <Card
  title="Report Lost Item"
  description="Users can quickly report items they have lost by providing details such as item name, location, and description."
/>

<Card
  title="Report Found Item"
  description="Anyone who finds a lost item can report it on the platform so the rightful owner can reclaim it."
/>

<Card
  title="Search Lost Items"
  description="Users can browse the database of reported items to check if their lost belongings have been found."
/>

      </div>

    </div>
  )
}