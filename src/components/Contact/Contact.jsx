import css from './Contact.module.css'

const Contact = ({contact, deleteContact}) => {
  return (
    <div className={css.contactContainer}>
      <p className={css.contactName}>{contact.name}</p>
      <p>{contact.number}</p>
      
      <button className={css.deleteBtn} onClick={()=>deleteContact(contact.id)}>Delete</button>
    </div>
  )
}

export default Contact
