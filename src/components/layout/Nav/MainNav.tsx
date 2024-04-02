import styles from './MainNav.module.css';
import { HiOutlineHome } from 'react-icons/hi2';
import { HiOutlineInformationCircle } from 'react-icons/hi2';
import { IconButton } from '../../UI/Icon/IconButton';

const navItems = [
  {
    icon: HiOutlineHome,
    to: '/',
    name: 'home',
  },
  {
    icon: HiOutlineInformationCircle,
    to: '/about',
    name: 'About',
  },
];

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
