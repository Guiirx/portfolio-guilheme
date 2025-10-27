import { Injectable } from '@angular/core';
import { Profile } from '../models/profile';
 
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(): Profile {

    var profile: Profile = {
      email: 'yasmin.cabral_@hotmail.com',
      name: 'Yasmin Cabral',
      whatsApp: 'https://wa.link/w3fifm',
    }
    return profile;
  }
}
