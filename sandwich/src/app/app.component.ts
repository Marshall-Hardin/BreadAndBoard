import { Component } from '@angular/core';
// import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'sandwich';
  // postData = { test: 'my content' };
  // url = 'http://httpbin.org/post';
  // json;

  // constructor(private http : HttpClient) {
  //   console.log("running...");
  //   this.http.post(this.url, this.postData).toPromise().then((data:any) => {
  //     console.log(data);
  //     this.json = JSON.stringify(data.json);
  //   });
  // }
}
