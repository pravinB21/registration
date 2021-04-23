import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpClient){}
  methods=['Google Pay','Paytm','paypal','phone-pay'];

  user1=new User("","",0,"","","",0,"","","",true,'pay','','');

  onSubmit() {
    console.log(this.user1)
    this.getData().subscribe((data:any)=>{
      console.log(data);
    });
    this.postData(this.user1).subscribe(data=>{console.log('submitted successfully',data)});
  }
  getData():Observable<any>{
    return this.http.get('http://localhost:4050/forms');
  }

  postData(user1:any){
    return this.http.post('http://localhost:4050/forms',user1);
  }
  ngOnInit(): void {
  }

}
