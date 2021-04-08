import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  starships: any[] = [];
  svcUrl: string = 'https://swapi.dev/api/starships/';
  constructor(private http: HttpClient) { }


  getStarships(): Observable<any> {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.get(this.svcUrl, options);
  };

  ngOnInit(): void {
    this.getStarships().subscribe((response) => {
      console.log("response", response);
      this.starships = response.results;
    });
  }

}
