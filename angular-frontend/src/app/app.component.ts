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
  searchNni?: number; // Property for search functionality
  isUpdateMode: boolean = false;

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
      this.isUpdateMode = true;
    });
  }

  onFormSubmit() {
    if (this.isUpdateMode) {
      this.onUpdatePerson();
    } else {
      this.onCreatePerson();
    }
  }

  onCreatePerson() {
    this.apiService.createPerson(this.selectedPerson).subscribe(() => {
      this.selectedPerson = new Person();
      this.loadPersons();
      this.isUpdateMode = false;
    }, error => {
      console.error('Error creating person:', error);
    });
  }

  onUpdatePerson() {
    this.apiService.updatePerson(this.selectedPerson.nni, this.selectedPerson).subscribe(() => {
      this.selectedPerson = new Person();
      this.loadPersons();
      this.isUpdateMode = false;
    }, error => {
      console.error('Error updating person:', error);
    });
  }

  onDeletePerson(nni: number) {
    this.apiService.deletePerson(nni).subscribe(() => {
      this.loadPersons(); // Refresh the list after deletion
    }, error => {
      console.error('Error deleting person:', error);
    });
  }
}
