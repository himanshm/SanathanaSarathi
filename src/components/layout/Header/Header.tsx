import styles from './Header.module.css';
import HeaderMenu from './HeaderMenu';

function Header() {
  return (
    <div className={styles.header}>
      <HeaderMenu />
    </div>
  );
}

export default Header;
