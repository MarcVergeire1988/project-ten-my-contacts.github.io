import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Heading from "./Heading";
import Avatar from "./Avatar";

/* OR function createCard(contact){
    return (
        <Card 
            id={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
        />
    );
} */

function App() {
  return (
    <div>
      <Heading />

  {/* OR {contacts.map(createCard)} */}
      <Avatar 
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPYKsC9BDERFppjWq7li5-BoqzgM1PBQiJAfIqQ5jLA&s"
      />

      {contacts.map(contact => (
        <Card 
            id={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
        />
    ))}

    </div>
  );
}

export default App;
