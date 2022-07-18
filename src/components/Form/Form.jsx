import React from "react";
import { Formik } from "formik";
import s from "./Form.module.css";

const Form = () => (
  <div>
    <Formik
      initialValues={{ name: "", phone: "", classDriving: "" }}
      onSubmit={(values) => {
        console.log("Форма отправила данные", values);
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit} className={s.form}>
          <input
            className={s.input}
            type="name"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <input
            className={s.input}
            type="phone"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.phone}
          />

          <select
            onChange={handleChange}
            name="classDriving"
            className={s.select}
          >
            <option value="not value">Class a driving experience</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>

          <button type="submit" disabled={isSubmitting} className={s.button}>
            Send
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Form;
