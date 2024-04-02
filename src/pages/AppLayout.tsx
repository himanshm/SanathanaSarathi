import { Outlet } from 'react-router-dom';
import Header from '../components/layout/Header/Header';
import Main from '../components/layout/Main/Main';
import Sidebar from '../components/layout/Sidebar/Sidebar';
import styles from './AppLayout.module.css';

function AppLayout() {
  return (
    <div className={styles['app-layout']}>
      <Header />
      <Sidebar />
      <Main>
        <div className={styles.container}>
          <Outlet />
        </div>
      </Main>
    </div>
  );
}

export default AppLayout;
