import { menuModel } from './menuModel';

export const menues: menuModel[] = [
  { link: "/users", menuname: 'Users', active: false, submenu: [] },
  { link: "/heroes", menuname: 'Heroes', active: false, submenu: [] },
  {
    link: "/heroes", menuname: 'Page 1', active: false, submenu: [{ submenuname: 'Page 1-1', link: '/users', active: false }, {submenuname: 'Page 1-2', link: '/heroes', active: false }] },
];
