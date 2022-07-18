import { ReactComponent as Logo } from "../../img/DNM-Name.svg";
import s from "./header.module.css";

export default function Header() {
  return (
    <div className={s.container}>
      <a className={s.logo} href="/">
        {<Logo />}
      </a>

      <ul className={s.navigation}>
        <li className={s.navItem}>about us</li>
        <li className={s.navItem}>our servises</li>
        <li className={s.navItem}>become a driver</li>
        <li className={s.navItem}>dispatchers</li>
        <li className={s.navItem}>contact us</li>
      </ul>

      <button className={s.button} type="button">
        TRack shipment
      </button>
    </div>
  );
}
