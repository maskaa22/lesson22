import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUserModel} from "../models/IUserModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }

  getUser(): Observable<IUserModel[]> {
    return this.httpClient.get<IUserModel[]>('https://jsonplaceholder.typicode.com/users')
  }
}
