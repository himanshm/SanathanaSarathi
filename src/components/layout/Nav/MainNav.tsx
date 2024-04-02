import styles from './MainNav.module.css';
import { navItems } from '../../../utils/navigationItems';
import { IconButton } from '../../UI/Icon/IconButton';

function MainNav() {
  return (
    <nav>
      <ul className={styles['main-nav']}>
        {navItems.map((navItem) => {
          const { icon, to, name } = navItem;
          return (
            <IconButton icon={icon} to={to} key={name}>
              {name}
            </IconButton>
          );
        })}
      </ul>
    </nav>
  );
}
export default MainNav;
