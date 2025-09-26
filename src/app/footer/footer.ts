import { Component } from '@angular/core';
import { Profile } from '../models/profile';
import { ProfileService } from '../services/profile';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  constructor(private profileService: ProfileService) { }

  profile?: Profile;
  date: Date = new Date();

  ngOnInit() { 

    this.profile = this.profileService.getProfile();


  }
}
