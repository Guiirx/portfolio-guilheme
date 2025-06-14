import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
 
@Injectable({
  providedIn: 'root'
})
export class Profile {

  constructor() { }

  getProfile(): Profile {

    var profile: Profile = {
      email: 'yasmin.cabral_@hotmail.com',
      name: 'Yasmin Cabral',
      whatsApp: '',
      instagram: ''
    }

    return profile;
  }
}
