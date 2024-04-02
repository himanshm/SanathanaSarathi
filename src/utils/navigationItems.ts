import { IconType } from 'react-icons';
import { HiOutlineHome } from 'react-icons/hi2';
import { HiOutlineInformationCircle } from 'react-icons/hi2';

interface NavItems {
  icon: IconType;
  to: string;
  name: string;
}

export const navItems: NavItems[] = [
  {
    icon: HiOutlineHome,
    to: '/',
    name: 'home',
  },
  {
    icon: HiOutlineInformationCircle,
    to: '/about',
    name: 'the Story',
  },
];
