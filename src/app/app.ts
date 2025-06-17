import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./footer/footer";
import { MenuComponent } from './menu/menu';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio-guilheme';
}
