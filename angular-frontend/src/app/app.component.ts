import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  persons: Person[] = [];
  selectedPerson: Person = new Person();
  searchNni: number = 0;  // Initialized with a default value

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.loadPersons();
  }

  loadPersons() {
    this.apiService.getPersons().subscribe(data => {
      this.persons = data;
    });
  }

  onSelectPerson(nni: number) {
    this.apiService.getPersonByNni(nni).subscribe(data => {
      this.selectedPerson = data;
    });
  }

  onCreatePerson() {
    this.apiService.createPerson(this.selectedPerson).subscribe(() => {
      this.selectedPerson = new Person();
      this.loadPersons();
    }, error => {
      console.error('Error creating person:', error);
    });
  }

  onUpdatePerson() {
    this.apiService.updatePerson(this.selectedPerson.nni, this.selectedPerson).subscribe(() => {
      this.selectedPerson = new Person();
      this.loadPersons();
    });
  }

  onDeletePerson(nni: number) {
    this.apiService.deletePerson(nni).subscribe(() => {
      this.loadPersons();
    });
  }
}
