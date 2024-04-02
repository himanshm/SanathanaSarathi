import { Link } from 'react-router-dom';
import styles from './Logo.module.css';
import logoImg from '../../../assets/logo.png';

function Logo() {
  return (
    <div className={styles.logo}>
      <Link to='/'>
        <img className={styles['logo-img']} src={logoImg} alt='orgLogo' />
      </Link>
    </div>
  );
}

export default Logo;
