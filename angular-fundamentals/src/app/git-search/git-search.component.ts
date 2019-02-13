import { Component, OnInit } from '@angular/core';
import { GitSearchService } from '../git-search.service';
import { GitSearch } from '../git-search';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResults: GitSearch;
  searchQuery: string;
  pageQuery: any;
  title: string;
  displayQuery: string;
  constructor(
    private GitSearchService: GitSearchService, 
    private route: ActivatedRoute, 
    private router: Router
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.pageQuery = 1;
      this.displayQuery = params.get('query');
      this.gitSearch();
    })

    // this.GitSearchService.gitSearch('angular').then((response) => {
    //   console.log(response)
    //   this.searchResults = response;
    // }, (error) => {
    //   alert("Error:" + error.statusText)
    // })
    this.route.data.subscribe( (result) => {
      this.title = result.title;
    });
  }

  gitSearch = () => {
    this.GitSearchService.gitSearch(this.searchQuery, this.pageQuery).then((response) => {
      this.searchResults = response;
    }, (error) => {
      alert("Error:" + error.statusText)
    })
  }

  sendQuery = () => {
    this.searchResults = null;
    this.router.navigate(['/search/' + this.searchQuery]);
  }

  previousPage = () => {
    this.searchResults = null;
    if(this.pageQuery != 1){
      this.pageQuery--;
    }
    this.GitSearchService.gitSearch(this.searchQuery, this.pageQuery).then((response) => {
      this.searchResults = response;
    }, (error) => {
      alert("Error:" + error.statusText)
    })
  }

  nextPage = () => {
    this.searchResults = null;
    this.pageQuery++;
    this.GitSearchService.gitSearch(this.searchQuery, this.pageQuery).then((response) => {
      this.searchResults = response;
    }, (error) => {
      alert("Error:" + error.statusText)
    })
  }

}
