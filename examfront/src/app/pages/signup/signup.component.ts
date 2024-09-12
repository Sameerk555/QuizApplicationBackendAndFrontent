import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private userService: UserService, private _snackBar: MatSnackBar) { }

  public user = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void { }

  formSubmit() {
    console.log(this.user);
    if (this.user.username == '' || this.user.username == null) {
      // alert('user is required !!');
      this._snackBar.open('User required !!', '', {
        duration: 2000,
      });
      return;
    }
    // addUser:userservice
    this.userService.addUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        //alert('successful registration');
        Swal.fire('User Registered Successfully ', 'User id is ' + data.id,);
      },
      (error) => {
        console.log(error);
        this._snackBar.open('Something went wrong !!', '', {
          duration: 2000,
        });

      }
    );

  }
}

