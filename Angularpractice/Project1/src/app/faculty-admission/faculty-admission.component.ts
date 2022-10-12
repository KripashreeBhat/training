import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-faculty-admission',
  templateUrl: './faculty-admission.component.html',
  styleUrls: ['./faculty-admission.component.css']
})
export class FacultyAdmissionComponent implements OnInit {
addFacultyForm : FormGroup;

  constructor( private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    // This was through formcontrol and formgroup
    // this.addFacultyForm = new FormGroup({
    //   'fname': new FormControl(),
    //   'lname': new FormControl()
  // })

  // This is through FormBuiler
  
  //case 1 : FormArray with FormComponent
  // let students = new FormArray([
  //   new FormControl('Jasmin'),
  //   new FormControl('Kitch')
  // ]);
  this.addFacultyForm = this.formbuilder.group({
    'fname': new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]),
    'lname': new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z]+$')]), 
    'age': new FormControl('',[Validators.required]),
    'mobileno':new FormControl('',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]),
    'email':new FormControl('',[Validators.required]),
    // 'students':new FormArray([
    //   new FormControl('Jasmin'),
    //   new FormControl('kitch'),
    // ])
})

// Set values
// // First way :Direct way
// this.addFacultyForm = this.formbuilder.group({
//   'fname': new FormControl('kripa'),
//   'lname': new FormControl('Bhat'),
//   'age': new FormControl(22),
//   'mobileno':new FormControl(7417428078),
//   'email':new FormControl('kri19bhat@gmail.com')
// })

// Second way : create instance

// const studentDetail={
//   'fname': 'Nagaveni',
//     'lname': 'Gopal naik',
//     'age': 22,
//     'mobileno':'9480672805',
//     'email':'nag08naik@gmail.com'
// }
// this.addFacultyForm.setValue(studentDetail);
// // third way: patchvalue
// this.addFacultyForm.patchValue(studentDetail);

// Track value changes
this.addFacultyForm.get('lname')?.valueChanges.subscribe(data=>{console.log(data);});
this.addFacultyForm.get('fname')?.statusChanges.subscribe(data=>{console.log('Input status');console.log(data);});
}
addFaculty(){
  console.log(this.addFacultyForm.value);
  // console.log(this.addFacultyForm.get('email')?.value);
// console.log(this.addFacultyForm.valueChanges.subscribe(data =>console.log(data)));
}
resetForm(){
  this.addFacultyForm.reset();
}
}

  
  