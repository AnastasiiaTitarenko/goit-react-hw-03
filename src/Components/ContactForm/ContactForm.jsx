import { useState } from "react"
import css from './ContactForm.module.css'

const ContactForm = ({ addContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name.trim() || !number.trim())
      return;
    const newContact = {
      id: Math.random().toString(),
      name: name,
      number: number
    };

    addContact(newContact);
    setName("");
    setNumber("");
  };
  
  return (
    <form className={css.ContactForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event)=> setName(event.target.value)}
      />
      <input
        type="text"
        placeholder="Phone Number"
        value={number}
        onChange={(event)=> setNumber(event.target.value)}
      />
      <button className={css.addBtn} type="submit">Add Contact</button>
    </form>
  )
}

export default ContactForm
