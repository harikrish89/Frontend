import { Injectable, Inject } from '@angular/core';
import { GitSearch } from './git-search';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class GitSearchService {
  cachedValues: Array<{
      [query: string]: GitSearch
  }> = [];
  constructor(@Inject(Http) private http: Http) {
  }

  gitSearch : Function = (query: string) : Promise<GitSearch> => {
    let promise = new Promise<GitSearch>((resolve, reject) => {
        if (this.cachedValues[query]) {
            resolve(this.cachedValues[query])
        }
        else {
            this.http.get('https://api.github.com/search/repositories?q=' + query)
            .toPromise()
            .then( (response) => {
                resolve(response.json())
            })
        }
    })
    return promise;
  }
}