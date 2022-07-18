import Header from "./Header/Header";
import s from "./App.module.css";
import Form from "./Form/Form";
import { ReactComponent as Arrow } from "../img/Arrow-btn.svg";

export const App = () => {
  return (
    <div className={s.container}>
      <Header />

      <h1 className={s.title}>We are hiring!</h1>
      <p className={s.pretitle}>The road is your second home? Join us!</p>

      <div className={s.backgroundImg}>
        <div className={s.text}>
          <p>
            We hire drivers from all across the United States, promoting quality
            opportunities for hardworking individuals of all backgrounds.
          </p>

          <p>
            We require our drivers to have a minimum of two years experience,
            knowing they have the skills and reputation to successfully take on
            any special requests we receive from our customers.
          </p>
        </div>

        <Form />
      </div>

      <div className={s.apllyNow}>
        <p className={s.titleText}>
          Or send all needed information directly to our HR department
        </p>
        <button type="button" className={s.applyBtn}>
          <span className={s.btnText}>Apply Now</span>
          <span className={s.btnArrow}>
            <Arrow />
          </span>
        </button>
      </div>
    </div>
  );
};
