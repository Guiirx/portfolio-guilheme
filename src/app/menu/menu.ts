import { Component } from '@angular/core';
import { MenuService } from '../services/menu';
import { CommonModule } from '@angular/common';
import { Menu } from '../models/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {

  menuStatus: string = 'closed';

  menuItems?: Array<Menu>

  ngOnInit() {

    const menu = new MenuService().getMenu();

    this.menuItems = menu;
  }

  menuClick() {

    this.menuStatus = (this.menuStatus == 'open' ? 'cloded' : 'open');

  }
}

export { Menu };
