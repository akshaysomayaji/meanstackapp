
export class Hero {
  id: number;
  name: string;
}

export class menuModel {
  menuname: string;
  link: string;
  active: boolean;
  submenu: submenu[]
}


export class submenu {
  submenuname: string;
  link: string;
  active: boolean;
}

