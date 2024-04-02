import styles from './HeaderMenu.module.css';

import { IconButton } from '../../UI/Icon/IconButton';
import { HiOutlineUser } from 'react-icons/hi2';
function HeaderMenu() {
  return (
    <div className={styles.menu}>
      <li className={styles['menu-item']}>
        <IconButton icon={HiOutlineUser} to='/subscribe'>
          Subscribe
        </IconButton>
      </li>
    </div>
  );
}

export default HeaderMenu;
