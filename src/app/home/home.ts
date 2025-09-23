import { Component } from '@angular/core';
import { Profile } from '../models/profile';
import { ProfileService } from '../services/profile';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

  constructor(private profileService: ProfileService) { }

  profile?: Profile;
  
  ngOnInit() {
    this.profile = this.profileService.getProfile();
  }
}
