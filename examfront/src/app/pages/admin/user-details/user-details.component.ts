import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user: any;
  constructor(private userdetails: UserService, public login: LoginService) { }

  ngOnInit(): void {
    this.login.getCurrentUser().subscribe(
      (user: any) => {
        this.user = user;
      },
      (error) => {
        alert('error');
      }
    );
  }


}
