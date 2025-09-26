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
      whatsApp: 'https://api.whatsapp.com/send?phone=5583986780591&text=Ol%C3%A1,%20estou%20no%20seu%20site%20%C3%A9%20gostaria%20de%20me%20consultar',
    }

    return profile;
  }
}
