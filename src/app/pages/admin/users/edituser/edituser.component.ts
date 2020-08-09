import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  @Input() modelProfileId : string;
  constructor() { }

  ngOnInit(): void {
  }

}
