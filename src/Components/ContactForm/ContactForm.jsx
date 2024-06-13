import { useState } from "react"
import css from './ContactForm.module.css'
import { useFormik } from "formik";
import * as Yup from "yup"

const ContactForm = ({ addContact }) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      number: ""
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, "Мінімум 3 символи")
        .max(50, "Максимум 50 символів")
        .required("Обов'язкове поле"),
      number: Yup.string()
        .min(3, "Мінімум 3 символи")
        .max(50, "Максимум 50 символів")
        .required("Обов'язкове поле"),
    }),
    onSubmit: (values, { resetForm }) => {
      const newContact = {
        id: Math.random().toString(),
        name: values.name,
        number: values.number
      };
      addContact(newContact);
      resetForm();
    }
  });

  // const [name, setName] = useState("");
  // const [number, setNumber] = useState("");

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   if (!name.trim() || !number.trim())
  //     return;
  //   const newContact = {
  //     id: Math.random().toString(),
  //     name: name,
  //     number: number
  //   };

  //   addContact(newContact);
  //   setName("");
  //   setNumber("");
  // };
  
  return (
    <form className={css.ContactForm} onSubmit={formik.handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name = "name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // onChange={(event)=> setName(event.target.value)}
      />
      {formik.touched.name && formik.errors.name ? (
        <div className={css.error}>{formik.errors.name}</div>
      ): null}
      <input
        type="number"
        placeholder="Phone Number"
        name="number"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        // onChange={(event)=> setNumber(event.target.value)}
      />
       {formik.touched.number && formik.errors.number ? (
        <div className={css.error}>{formik.errors.number}</div>
      ): null}
      <button className={css.addBtn} type="submit">Add Contact</button>
    </form>
  )
}

export default ContactForm
