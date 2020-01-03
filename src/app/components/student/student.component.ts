import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public x:number=150;
  @Input()
  public volume:number=5;
  @Input()
  public name:String='';
  

  constructor() { }

  ngOnInit() {
  }

}
