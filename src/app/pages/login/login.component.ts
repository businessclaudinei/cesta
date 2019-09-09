import { Result } from './../../models/result.model';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public form :FormGroup;
  constructor(private router: Router, private service: DataService,private fb:FormBuilder) { 
    this.form = this.fb.group(
      {email:['', Validators.required]},
      {password:['', Validators.required]}
      );
  }

  ngOnInit() {
    var login = localStorage.getItem('login');
    if(login != null){
      this.router.navigate['home'];
    }
  }

  submit(){
    this.service.getLoginInformation(2).subscribe((res:Result)=>{
      if(res.success){
        localStorage.setItem('login',res.data);
      }
    });
  };

}
