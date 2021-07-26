import { Component, OnInit } from '@angular/core';
import {PostModel} from "../../models/postModel";
import {PostsService} from "../../servises/posts.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts:PostModel[];

  constructor(private postsService:PostsService) {
    this.postsService.getPost().subscribe(value => {
      this.posts=value
    })
  }

  ngOnInit(): void {
  }

}
