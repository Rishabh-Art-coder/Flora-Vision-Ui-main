import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { IoBagHandleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";
export default function Navbar() {
  return (
    < >
      <header >
        <nav class={styles.navbar}>
          <a class={styles.logo} href="#">
            <img src={logo} alt="FloraVision Logo" height="48" width="48"
              class={styles.logoIcon} />

            <h3 className={styles.logoName}>FloraVision</h3>
          </a>
          <ul class={styles['nav-links']} >
            <li><a href="#" class={styles.navLinks}>Home</a></li>
            <li><a href="#" class={styles.navLinks} class={styles.dropdown}>Plants Type</a></li>
            <li><a href="#" class={styles.navLinks}>More</a></li>
            <li><a href="#" class={styles.navLinks}>Contact</a></li>
          </ul>
          <div className={styles.navRight}>
            <button className={styles.navIcons} aria-label="Search">
              <CiSearch />
            </button>

            <button className={styles.navIcons} aria-label="Cart">
              <IoBagHandleOutline />
            </button>

            <button className={styles.hamburger} aria-label="Menu">
              <BiMenuAltRight />
            </button>
          </div>
        </nav>
      </header>
    </>)

};