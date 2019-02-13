import { Component, OnInit } from '@angular/core';
import { GitSearchService } from './git-search.service';
import { GitUserService } from './git-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GitSearchService, GitUserService]
})
export class AppComponent implements OnInit {
  constructor(private GitSearchService: GitSearchService){

  }
  // constructor(private GitUserService: GitUserService){

  // }
  ngOnInit() {
    // this.GitSearchService.gitSearch('angular').then( (response) => {
    //   alert("Total Libraries Found:" + response.total_count);
    // }, (error) => {
    //   alert("Error:" + error.statusText)
    // })
    // this.GitUserService.gitUsers('Harry').then((response) => {
    //   alert("Total Users Found:" + response.total_count);
    // }, (error) => {
    //   alert("Error:" + error.statusText)
    // })
  }
  title = 'GitHub Browser';
}
