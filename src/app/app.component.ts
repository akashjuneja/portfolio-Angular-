import { Component , OnInit} from '@angular/core';
import { UserService } from './services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user:any
 constructor(private userService: UserService, private toastr :ToastrService ){
 }

 ngOnInit(){
   this.userService.getData().subscribe(
     (user :any)=>{
       console.log(user)
        this.user=user.results[0]
     },
     (error)=>{
       this.toastr.error(error ,"Something went wrong");
     }
   )
 }
}
