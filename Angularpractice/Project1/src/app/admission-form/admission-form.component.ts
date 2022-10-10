import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-admission-form',
  templateUrl: './admission-form.component.html',
  styleUrls: ['./admission-form.component.css']
})
export class AdmissionFormComponent implements OnInit {

  firstname: string="";
  middlename: string="";
  lastname: string="";
  gender: boolean=false;
  fathername: string="";
  mothername: string="";
  grade: string="";
  gradee: string="";
  board: string="";
  boardd: string="";
  domain:string="";
  terms:boolean=false;
  phone: string="";
  mail: string="";
  constructor() { }
  @HostListener('submit') submit(){
    alert('Form submitted');
  }

  ngOnInit(): void {
  }
admissionform(formValue:NgForm){
  console.log(formValue);
}
}
