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

  constructor(private menu: Menu) { }

   menuStatus: string = 'closed';

   menuService: any;

  menuItems?: Array<MenuService>

  ngOnInit() {

    const menu = this.menuService.getItems();
    
    this.menuItems = menu;
  }

  menuClick() {

   this.menuStatus = (this.menuStatus == 'open' ? 'cloded' : 'open');

  }
}