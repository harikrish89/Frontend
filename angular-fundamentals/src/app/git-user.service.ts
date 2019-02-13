import { Injectable } from '@angular/core';
import { GitUsers } from './git-users';
import {HttpClient } from '@angular/common/http';
import 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GitUserService {
  cachedValues: Array<{
    [query: string]: GitUsers
  }> = [];
  constructor(private http:HttpClient) { }
  gitUsers = (query: string): Promise<GitUsers> => {
    let promise = new Promise<GitUsers>((resolve, reject) => {
      if (this.cachedValues[query]){
         resolve(this.cachedValues[query])
      }
      else{
         this.http.get('https://api.github.com/search/users?q=' + query)
         .toPromise()
         .then( (response) => {
             resolve(response as GitUsers)
         }, (error) => {
             reject(error);
         })
      }
    })
    return promise;
  }
}
