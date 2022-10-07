import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParamMap } from '@angular/router';
@Component({
  selector: 'app-student-detail',
  template: `
    <h2> selected id ={{studentId}} <h2>
  `,
  styles: [
  ]
})
export class StudentDetailComponent implements OnInit {
  public studentId : any;
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id = params.get('id');
      this.studentId=id
    }
    );

}
}
