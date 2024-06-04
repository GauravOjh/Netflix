import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service/auth.service';
import { HeaderComponent } from '../../core/components/header/header/header.component';

@Component({
  selector: 'app-browse',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './browse.component.html',
  styleUrl: './browse.component.css'
})
export class BrowseComponent {
  auth= inject(AuthService);
  name=JSON.parse(sessionStorage.getItem("loggedInUser")!).name;
  userProfileImg=JSON.parse(sessionStorage.getItem("loggedInUser")!).picture;
  email=JSON.parse(sessionStorage.getItem("loggedInUser")!).email;

  signOut(){
    sessionStorage.removeItem("loggedInUser");
    this.auth.signOut();
  }
}
