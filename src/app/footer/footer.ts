import { Component } from '@angular/core';
import { Profile } from '../models/profile';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
 
  constructor(private profile: Profile) { }
}
