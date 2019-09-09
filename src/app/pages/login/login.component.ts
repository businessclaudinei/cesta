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
    this.form = this.fb.group({
      email:['', Validators.required],
      password:['', Validators.required]
    });
  }

  ngOnInit() {
    this.router.navigate(['home']);
  }

  submit(){
    this.service.getToken(this.form.controls.email.value).subscribe((res:Result)=>{
      if(res.success){
        localStorage.setItem('login',JSON.stringify(res.data));
        this.router.navigate(['home']);
      }
    },(err)=>{console.log(err);});
  };

}
