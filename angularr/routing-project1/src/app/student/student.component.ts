import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-student',
  template: `<h3>
                  Student Info
                  </h3>
                  <ul>
                  <li (click) ="onSelect(student)" *ngFor="let student of students">
                  <span>{{student.id}}&nbsp;&nbsp;</span>{{student.name}}
                  </li>
                  </ul>`,
  
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students=[
    {'id': '1', 'name': 'John', 'email': 'john@example.com'},
    {'id': '2', 'name': 'Jane', 'email': 'jane@example.com'},
    {'id': '3', 'name': 'Doe', 'email': 'doe@example.com'},
    {'id': '4', 'name': 'Kate', 'email': 'kate@example.com'},
    {'id': '5', 'name': 'Ronal', 'email': 'ronal@example.com'}
  ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 onSelect(student :any) {
  this.router.navigate(['/student',student.id])
}
}