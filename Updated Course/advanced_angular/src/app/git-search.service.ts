import { Injectable, Inject } from '@angular/core';
import { GitSearch } from './git-search';
import { GitUsers } from './git-users';
import { HttpClient } from '@angular/common/http';
import 'rxjs';
import { Observable } from 'rxjs';
//import { publishReplay } from 'rxjs/operators/publishReplay';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/publishReplay';

@Injectable()
export class GitSearchService {
  cachedSearches: Array<{
      [query: string]: GitSearch
  }> = [];
  cachedValue: string;
  cachedUsers: Array<{
      [query: string]: GitUsers
  }> = [];
  search: Observable<GitSearch>;
  constructor(private http: HttpClient) {
  }

  gitSearch : Function = (query: string) : Observable<GitSearch> => {
      if (!this.search) {
        this.search = this.http.get<GitSearch>('https://api.github.com/search/repositories?q=' + query)
        // .publishReplay(1)
        // .refCount();
        this.cachedValue = query;
      }
      else if (this.cachedValue !== query) {    
        this.search = null;
        this.gitSearch(query);
      }
      return this.search;
  }

  gitUsers = (query: string) : Promise<GitUsers> => {
    let promise = new Promise<GitUsers>((resolve, reject) => {
        if (this.cachedUsers[query]) {
            resolve(this.cachedUsers[query])
        }
        else {
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