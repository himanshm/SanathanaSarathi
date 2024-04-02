import Logo from '../../UI/Logo/Logo';
import MainNav from '../Nav/MainNav';
import styles from './Sidebar.module.css';

function Sidebar() {
  return (
    <aside className={styles.aside}>
      <Logo />
      <div className={styles.content}>
        <h2>Sanathana Sarathi</h2>
        <h4>The Eternal Charioteer</h4>
      </div>
      <div className={styles.nav}>
        <MainNav />
      </div>
    </aside>
  );
}

export default Sidebar;
