import styles from './Navbar.module.css';
import logo from '../../assets/logo.png';
import { IoBagHandleOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="relative z-50">
        <nav className={styles.navbar}>
          <a className={styles.logo} href="#">
            <img src={logo} alt="FloraVision Logo" height="48" width="48"
              className={styles.logoIcon} />
            <h3 className={styles.logoName}>FloraVision</h3>
          </a>

          <ul className={`${styles.navList} hidden md:flex`}>
            <li><a href="#" className={styles.navLink}>Home</a></li>
            <li><a href="#" className={`${styles.navLink} ${styles.dropdown}`}>Plants Type</a></li>
            <li><a href="#" className={styles.navLink}>More</a></li>
            <li><a href="#" className={styles.navLink}>Contact</a></li>
          </ul>

          <div className={styles.navRight}>
            <button className={styles.navIcons} aria-label="Search">
              <CiSearch />
            </button>

            <button className={styles.navIcons} aria-label="Cart">
              <IoBagHandleOutline />
            </button>

            <button
              className={`${styles.hamburger} md:hidden`}
              aria-label="Menu"
              onClick={toggleMenu}
            >
              <BiMenuAltRight />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-b border-white/10">
            <ul className="flex flex-col gap-4 list-none p-6">
              <li><a href="#" className="text-white hover:text-white/70 transition-colors block py-2">Home</a></li>
              <li><a href="#" className="text-white hover:text-white/70 transition-colors block py-2">Plants Type</a></li>
              <li><a href="#" className="text-white hover:text-white/70 transition-colors block py-2">More</a></li>
              <li><a href="#" className="text-white hover:text-white/70 transition-colors block py-2">Contact</a></li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};