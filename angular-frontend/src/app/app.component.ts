import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  template: `
    <h1>Items from API:</h1>
    <ul>
      <li *ngFor="let item of items">{{ item | json }}</li> <!-- Using json pipe for demonstration -->
    </ul>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  items: any[] = []; // Assuming items is an array

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getItems().subscribe(data => {
      console.log(data); // Log to see the structure
      this.items = data; // Assign data to items, assuming data is the array you want
    }, error => {
      console.error('Error fetching data: ', error);
    });
  }
}
