import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostModel} from "../models/postModel";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient:HttpClient) {}
  getPost():Observable<PostModel[]>{
    return this.httpClient.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
