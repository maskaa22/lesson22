import {Component, Input, OnInit} from '@angular/core';
import {PostModel} from "../../models/postModel";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input()
  post:PostModel

  constructor() { }

  ngOnInit(): void {
  }

}
