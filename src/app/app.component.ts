import { Component } from '@angular/core';
import { GithubService } from './services/github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'github-api-call';

  users: String[]

  // importing our servive for usage
  constructor(private githubService: GithubService){}

  getUsers() {
      this.githubService.getApiData().subscribe((allDataFromApiCall) => {
        console.log(allDataFromApiCall)
        this.users = allDataFromApiCall;
      })
  }

}
