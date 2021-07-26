import {Component, Input, OnInit} from '@angular/core';
import {IUserModel} from "../../models/IUserModel";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
  user:IUserModel

  constructor() { }

  ngOnInit(): void {
  }

}
