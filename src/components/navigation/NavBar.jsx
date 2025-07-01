import styles from './NavBar.module.css'
import NavBarItem from './NavBarItem';

function NavBar({ open, handleClick }) {
  return (
    <nav className={`${styles.navigation} ${open ? styles.open : ''}`}>
      <ul>
        <NavBarItem handleClick={handleClick} href='/about' text='about us'/>
        <NavBarItem handleClick={handleClick} href='/portfolio' text='portfolio'/>
        <NavBarItem handleClick={handleClick} href='/services' text='services'/>
        <NavBarItem handleClick={handleClick} href='/contact' text='contact us'/>
      </ul>
    </nav>
  )
}

export default NavBar