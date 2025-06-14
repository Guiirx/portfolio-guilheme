import { Injectable } from '@angular/core';
import { Menu } from '../models/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  getItems(): Array<Menu> {

    const menu: Array<Menu> = [
      {
        name: 'Inicio',
        url: '#banner'
      },
      {
        name: 'Assuntos',
        url: '#banner'
      },
      {
        name: 'Sobre mim',
        url: '#about'
      },
      {
        name: 'contato',
        url: '#Contact'
      }
    ];

    return menu;

  }
}
